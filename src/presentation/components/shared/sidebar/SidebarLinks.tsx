import { navLinksAdmin, navLinksEmployee } from '@/config/const';
import { userStore } from '@/presentation/store/user.store';
import { Link, useLocation } from 'react-router-dom';

export const SidebarLinks = () => {
	const { pathname } = useLocation();

	const { user } = userStore();

	const isAdmin = user.role ? navLinksAdmin : navLinksEmployee;

	return (
		<ul className='w-full'>
			{isAdmin.map(({ id, label, href, icon }) => (
				<li
					key={id}
					className={`${
						pathname === href ? 'bg-white/20 text-white' : 'text-[#acb1c0]'
					} p-4 hover:bg-white/10 hover:text-white transition-all 
						duration-300 font-medium backdrop-blur-lg`}>
					<Link
						to={href}
						className='flex items-center gap-2'>
						{icon}
						{label}
					</Link>
				</li>
			))}
		</ul>
	);
};
