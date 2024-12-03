import { Outlet, useNavigate } from 'react-router-dom';
import { userStore } from '../store/user.store';
import { useEffect } from 'react';

export const HomeLayout = () => {
	const { user } = userStore();

	const navigate = useNavigate();

	useEffect(() => {
		if (user.token) {
			navigate('/admin');
		}

		console.log(user)
	}, [user]);

	return (
		<main className='bg-[#FFF5E9] p-4 sm:p-8 min-h-screen flex items-center justify-center overflow-hidden'>
			<section className='w-full h-full flex items-center justify-center relative'>
				<img
					className='absolute right-3/4 bottom-0 hidden min-[1150px]:block'
					src='/vector-2.png'
					alt='vector2'
				/>

				<div className='max-w-[509px] w-full bg-white rounded-lg'>
					<Outlet />
				</div>

				<img
					className='absolute left-3/4 bottom-0 hidden min-[1150px]:block'
					src='/vector-1.png'
					alt='vector1'
				/>
			</section>
		</main>
	);
};
