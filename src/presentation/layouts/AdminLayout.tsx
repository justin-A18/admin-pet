import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/shared/sidebar';
import { NavbarMobile } from '../components/shared/menu-bar';

export const AdminLayout = () => {
	return (
		<main
			className='w-full min-h-screen md:grid md:grid-cols-[250px_1fr] 
		bg-[#191F2F]'>
			<Sidebar />
			<section className='bg-[#F5F7FA] pb-16 md:pb-0 min-h-screen'>
				<Outlet />
			</section>
			<NavbarMobile />
		</main>
	);
};
