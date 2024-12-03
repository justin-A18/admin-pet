import { Customer } from '@/infrastructure/interfaces';
import { DataTable } from '../components/shared/tables/DataTable';
import { useCustomersQuery } from '../hooks/customer';
import { customerColumns } from '../components/shared/tables/columns/customer.column';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../components/ui/form';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { CustomerSchema } from '../schemas/customerSchema';
import { z } from 'zod';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../components/ui/select';
import { usePetsQuery } from '../hooks/pet';
import { useCustomerMutation } from '../hooks/customer/useCustomerMutation';
import { X } from 'lucide-react';
import { useMenuStore } from '../store/user.store';

export const CustomerPage = () => {
	const { customersQuery } = useCustomersQuery();
	const { mutationCreate } = useCustomerMutation();
	const { petsQuery } = usePetsQuery();

	const form = useForm<z.infer<typeof CustomerSchema>>({
		resolver: zodResolver(CustomerSchema),
		defaultValues: {
			pet_id: 0,
			dni: '',
			first_name: '',
			last_name: '',
			email: '',
			phone_number: '',
		},
	});

	const { isCustomerMenuOpen, setCustomerMenuOpen } = useMenuStore();

	const onSubmit = (values: z.infer<typeof CustomerSchema>) => {
		mutationCreate.mutate(values);
	};

	return (
		<main className='p-4 md:p-8'>
			{customersQuery.isLoading ? (
				<div>Loading...</div>
			) : (
				<DataTable
					title='Clientes'
					data={customersQuery.data?.data as Customer[]}
					columns={customerColumns}
					onClick={() => setCustomerMenuOpen(true)}
				/>
			)}

			<div
				className={`position fixed top-0 left-0 z-20 bg-black/50 w-full h-full items-center justify-center ${
					isCustomerMenuOpen ? 'flex' : 'hidden'
				}`}>
				<div className='max-w-[509px] w-full bg-white rounded-lg p-4 sm:px-8 sm:py-5 flex flex-col gap-4 relative'>
					<Button
						className='absolute right-2 top-2'
						variant='ghost'
						size='icon'
						onClick={() => setCustomerMenuOpen(false)}>
						<X />
					</Button>

					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='flex flex-col gap-4 mt-6'>
							<FormField
								control={form.control}
								name='first_name'
								render={({ field, formState: { errors } }) => (
									<FormItem>
										<FormLabel className='text-md'>Nombre</FormLabel>
										<FormControl>
											<Input
												placeholder='Escribe un  nombre'
												className={`border ${
													errors.first_name?.message
														? 'border-red-500'
														: 'border-[#F0F0F0]'
												} h-10`}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='last_name'
								render={({ field, formState: { errors } }) => (
									<FormItem>
										<FormLabel className='text-md'>Apellido</FormLabel>
										<FormControl>
											<Input
												placeholder='Escribe un  apellido'
												data-testid='password-input'
												className={`border ${
													errors.last_name?.message
														? 'border-red-500'
														: 'border-[#F0F0F0]'
												} h-10`}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='dni'
								render={({ field, formState: { errors } }) => (
									<FormItem>
										<FormLabel className='text-md'>DNI</FormLabel>
										<FormControl>
											<Input
												type='text'
												placeholder='Escribe un  DNI'
												data-testid='dni-input'
												className={`border ${
													errors.dni?.message
														? 'border-red-500'
														: 'border-[#F0F0F0]'
												} h-10`}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='email'
								render={({ field, formState: { errors } }) => (
									<FormItem>
										<FormLabel className='text-md'>
											Correo Electrónico
										</FormLabel>
										<FormControl>
											<Input
												type='email'
												placeholder='ejemplo@correo.com'
												className={`border ${
													errors.email?.message
														? 'border-red-500'
														: 'border-[#F0F0F0]'
												} h-10`}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='phone_number'
								render={({ field, formState: { errors } }) => (
									<FormItem>
										<FormLabel className='text-md'>Teléfono</FormLabel>
										<FormControl>
											<Input
												type='text'
												placeholder='Escribe un número de teléfono'
												data-testid='phone-number-input'
												className={`border ${
													errors.phone_number?.message
														? 'border-red-500'
														: 'border-[#F0F0F0]'
												} h-10`}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='pet_id'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Selecciona una mascota</FormLabel>
										<Select onValueChange={field.onChange}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder='Selecciona una mascota' />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{petsQuery.data?.data.map((pet) => (
													<SelectItem value={pet.ID.toString()}>
														{pet.name}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Button
								type='submit'
								variant='orange'
								className='w-full flex gap-2 md:text-md font-bold'>
								Crear Cliente
							</Button>
						</form>
					</Form>
				</div>
			</div>
		</main>
	);
};
