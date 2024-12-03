import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { TypographyH3, TypographyP } from '../components/shared/typography';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/presentation/components/ui/form';

import { Input } from '@/presentation/components/ui/input';
import { Button } from '@/presentation/components/ui/button';

import { loginSchema } from '@/presentation/schemas/userSchema';
import { Spinner } from '@/presentation/components/ui/spinner';
import { useLoginMutation } from '../hooks/auth';

export const HomePage = () => {
	const { loginMutation } = useLoginMutation();

	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	async function onSubmit(values: z.infer<typeof loginSchema>) {
		loginMutation.mutate(values);
	}

	return (
		<div className='w-full p-4 sm:px-8 sm:py-5 flex flex-col gap-4'>
			<header className='flex flex-col gap-4 items-center'>
				<img
					src='/paw.png'
					alt='paw'
				/>

				<TypographyH3 className='uppercase text-center'>
					¡Bienvenido de nuevo!
				</TypographyH3>
				<TypographyP className='text-center text-md'>
					Inicia sesión para gestionar clientes, empleados y el cuidado de las
					mascotas de manera eficiente.
				</TypographyP>
			</header>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='flex flex-col gap-4'>
					<FormField
						control={form.control}
						name='email'
						render={({ field, formState: { errors } }) => (
							<FormItem>
								<FormLabel className='text-md'>Correo</FormLabel>
								<FormControl>
									<Input
										placeholder='example@gmail.com'
										data-testid='email-input'
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
						name='password'
						render={({ field, formState: { errors } }) => (
							<FormItem>
								<FormLabel className='text-md'>Contraseña</FormLabel>
								<FormControl>
									<Input
										type='password'
										placeholder='*********'
										data-testid='password-input'
										className={`border ${
											errors.email?.message
												? 'border-red-500'
												: 'border-[#F0F0F0]'
										} h-10`}
										{...field}
									/>
								</FormControl>
								<FormMessage>
									{loginMutation.error && loginMutation.error.message}
								</FormMessage>
							</FormItem>
						)}
					/>

					<Link
						to='/auth/olvide-password'
						className='text-sm font-medium'>
						¿Olvidaste tu contraseña?
					</Link>

					<Button
						type='submit'
						variant='orange'
						disabled={loginMutation.isPending}
						className='w-full flex gap-2 md:text-md font-bold'>
						<Spinner
							show={loginMutation.isPending}
							size='small'
							data-testid='login-spinner'
							className='text-[#3F3D56]'
						/>
						Iniciar sesion
					</Button>
				</form>
			</Form>
		</div>
	);
};
