import { petColumns } from '../components/shared/tables/columns/pet.column';
import { DataTable } from '../components/shared/tables/DataTable';
import { Pet } from '@/infrastructure/interfaces';
import { usePetsQuery } from '../hooks/pet';
import { Button } from '../components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../components/ui/form';
import { Input } from '../components/ui/input';
import { PetSchema } from '../schemas/petSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { usePetMutation } from '../hooks/pet/usePetMutation';
import { X } from 'lucide-react';
import { useMenuStore } from '../store/user.store';
export const PetsPage = () => {
	const { petsQuery } = usePetsQuery();
	const { mutationCreate } = usePetMutation();

	const form = useForm<z.infer<typeof PetSchema>>({
		resolver: zodResolver(PetSchema),
		defaultValues: {
			age: 0,
			gender: '',
			name: '',
			race: '',
			specie: '',
			weight: 0,
		},
	});

	const onSubmit = (values: z.infer<typeof PetSchema>) => {
		mutationCreate.mutate(values);
		console.log(mutationCreate.data);
	};

	const { isPetMenuOpen, setPetMenuOpen } = useMenuStore();

	return (
		<main className='p-4 md:p-8'>
			{petsQuery.isLoading ? (
				<div>Loading...</div>
			) : (
				<DataTable
					title='Mascotas'
					data={petsQuery.data?.data as Pet[]}
					columns={petColumns}
					onClick={() => setPetMenuOpen(true)}
				/>
			)}

			<div
				className={`position fixed top-0 left-0 z-20 bg-black/50 w-full h-full items-center justify-center p-4 ${
					isPetMenuOpen ? 'flex' : 'hidden'
				}`}>
				<div className='max-w-[509px] w-full bg-white rounded-lg p-4 sm:px-8 sm:py-5 flex flex-col gap-4 relative'>
					<Button
						onClick={() => setPetMenuOpen(false)}
						className='absolute right-2 top-2'
						variant='ghost'
						size='icon'>
						<X />
					</Button>

					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='flex flex-col gap-4 mt-6'>
							<FormField
								control={form.control}
								name='name'
								render={({ field, formState: { errors } }) => (
									<FormItem>
										<FormLabel className='text-md'>Nombre</FormLabel>
										<FormControl>
											<Input
												placeholder='Escribe un nombre'
												className={`border ${
													errors.name?.message
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
								name='race'
								render={({ field, formState: { errors } }) => (
									<FormItem>
										<FormLabel className='text-md'>Raza</FormLabel>
										<FormControl>
											<Input
												placeholder='Escribe la raza'
												className={`border ${
													errors.race?.message
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
								name='specie'
								render={({ field, formState: { errors } }) => (
									<FormItem>
										<FormLabel className='text-md'>Especie</FormLabel>
										<FormControl>
											<Input
												placeholder='Escribe la especie'
												className={`border ${
													errors.specie?.message
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
								name='weight'
								render={({ field, formState: { errors } }) => (
									<FormItem>
										<FormLabel className='text-md'>Peso</FormLabel>
										<FormControl>
											<Input
												type='number'
												placeholder='Escribe el peso'
												className={`border ${
													errors.weight?.message
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
								name='age'
								render={({ field, formState: { errors } }) => (
									<FormItem>
										<FormLabel className='text-md'>Edad</FormLabel>
										<FormControl>
											<Input
												type='number'
												placeholder='Escribe la edad'
												className={`border ${
													errors.age?.message
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
								name='gender'
								render={({ field, formState: { errors } }) => (
									<FormItem>
										<FormLabel className='text-md'>Género</FormLabel>
										<FormControl>
											<Input
												placeholder='Escribe el género'
												className={`border ${
													errors.gender?.message
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

							<Button
								type='submit'
								variant='orange'
								className='w-full flex gap-2 md:text-md font-bold'>
								Crear Mascota
							</Button>
						</form>
					</Form>
				</div>
			</div>
		</main>
	);
};
