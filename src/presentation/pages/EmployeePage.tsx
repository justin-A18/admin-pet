import { Employee } from '@/infrastructure/interfaces';
import { DataTable } from '../components/shared/tables/DataTable';
import { useEmployeesQuery } from '../hooks/employee';
import { employeeColumns } from '../components/shared/tables/columns/employe.column';
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
import { EmployeeSchema } from '../schemas/employeeSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '../components/ui/popover';
import { cn } from '../lib/utils';
import { format } from 'date-fns';
import { CalendarIcon, X } from 'lucide-react';
import { Calendar } from '../components/ui/calendar';
import { useEmployeeMutation } from '../hooks/employee/useEmployeeMutation';
import { useEmployeeTypesQuery } from '../hooks/employee/useEmployeeTypesQuery';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../components/ui/select';
import { useMenuStore } from '../store/user.store';

export const EmployeePage = () => {
	const { employeesQuery } = useEmployeesQuery();
	const { mutationCreate } = useEmployeeMutation();
	const { employeeTypesQuery } = useEmployeeTypesQuery();

	const form = useForm<z.infer<typeof EmployeeSchema>>({
		resolver: zodResolver(EmployeeSchema),
		defaultValues: {
			dni: '',
			first_name: '',
			last_name: '',
			email: '',
			phone_number: '',
			birth_date: undefined,
			direction: '',
			type_id: 0,
		},
	});

	const onSubmit = (values: z.infer<typeof EmployeeSchema>) => {
		mutationCreate.mutate({
			...values,
			birth_date: format(values.birth_date, 'yyyy-MM-dd'),
		});
	};

	const { setEmployeeMenuOpen, isEmployeeMenuOpen } = useMenuStore();

	return (
		<main className='p-4 md:p-8'>
			{employeesQuery.isLoading ? (
				<div>Loading...</div>
			) : (
				<DataTable
					title='Empleados'
					data={employeesQuery.data?.data as Employee[]}
					columns={employeeColumns}
					onClick={() => setEmployeeMenuOpen(true)}
				/>
			)}

			<div
				className={`position fixed top-0 left-0 z-20 bg-black/50 w-full h-full items-center justify-center p-4 ${
					isEmployeeMenuOpen ? 'flex' : 'hidden'
				}`}>
				<div className='max-w-[509px] w-full bg-white rounded-lg p-4 sm:px-8 sm:py-5 flex flex-col gap-4 relative'>
					<Button
						className='absolute right-2 top-2'
						variant='ghost'
						size='icon'
						onClick={() => setEmployeeMenuOpen(false)}>
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
								name='direction'
								render={({ field, formState: { errors } }) => (
									<FormItem>
										<FormLabel className='text-md'>Dirección</FormLabel>
										<FormControl>
											<Input
												placeholder='Escribe una dirección'
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
								name='birth_date'
								render={({ field }) => (
									<FormItem className='flex flex-col'>
										<FormLabel className='text-md'>
											Fecha de cumpleaños
										</FormLabel>
										<Popover>
											<PopoverTrigger asChild>
												<FormControl>
													<Button
														variant={'outline'}
														className={cn(
															'w-full pl-3 text-left font-normal',
															!field.value && 'text-muted-foreground',
														)}>
														{field.value ? (
															format(field.value, 'yyyy-MM-dd')
														) : (
															<span>Selecciona una fecha</span>
														)}
														<CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
													</Button>
												</FormControl>
											</PopoverTrigger>
											<PopoverContent
												className='w-auto p-0'
												align='start'>
												<Calendar
													mode='single'
													selected={field.value}
													onSelect={field.onChange}
													disabled={(date) =>
														date > new Date() || date < new Date('1900-01-01')
													}
													initialFocus
												/>
											</PopoverContent>
										</Popover>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='type_id'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Selecciona tipo de empleado</FormLabel>
										<Select onValueChange={field.onChange}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder='Selecciona un tipo' />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{employeeTypesQuery.data?.data.map((employee) => (
													<SelectItem value={employee.ID.toString()}>
														{employee.name}
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
								Crear Empleado
							</Button>
						</form>
					</Form>
				</div>
			</div>
		</main>
	);
};
