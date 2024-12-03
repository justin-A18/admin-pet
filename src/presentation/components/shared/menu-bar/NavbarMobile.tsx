import { Button } from '@/presentation/components/ui/button';
import { navLinksAdmin, navLinksEmployee } from '@/config/const';
import { LogOut } from 'lucide-react';
import { Tooltip } from '../tooltip';
import { Link } from 'react-router-dom';
import { userStore } from '@/presentation/store/user.store';

export const NavbarMobile = () => {
	const { user } = userStore();

	const isAdmin = user.role ? navLinksAdmin : navLinksEmployee;

	return (
		<div className='fixed w-full mx-auto bottom-0 block md:hidden'>
			<nav className='bg-slate-200 max-w-xl mx-auto px-4 py-2 rounded-md'>
				<ul className='flex items-center justify-between'>
					{isAdmin.map(({ id, href, icon, label }) => (
						<li
							key={id}
							className='p-3 hover:bg-slate-300/50 transition-all 
							duration-300 rounded-full relative group'>
							<Tooltip>{label}</Tooltip>
							<Link to={href}>{icon}</Link>
						</li>
					))}

					<li
						className='hover:bg-slate-300/50 transition-all 
						duration-300 p-1.5 rounded-full relative group'>
						<Tooltip>Logout</Tooltip>
						<Button
							size='icon'
							variant='ghost'>
							<LogOut />
						</Button>
					</li>
				</ul>
			</nav>
		</div>
	);
};
