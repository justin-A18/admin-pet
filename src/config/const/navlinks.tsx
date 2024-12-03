import { BriefcaseBusiness, PawPrint, User } from 'lucide-react';

export const navLinksAdmin = [
	{
		id: 0,
		label: 'Mascotas',
		href: '/admin',
		icon: <PawPrint />,
	},
	{
		id: 1,
		label: 'Empleados',
		href: '/admin/employees',
		icon: <BriefcaseBusiness />,
	},
	{
		id: 2,
		label: 'Clientes',
		href: '/admin/customers',
		icon: <User />,
	},
];

export const navLinksEmployee = [
	{
		id: 0,
		label: 'Mascotas',
		href: '/admin',
		icon: <PawPrint />,
	},
	{
		id: 2,
		label: 'Clientes',
		href: '/admin/customers',
		icon: <User />,
	},
];
