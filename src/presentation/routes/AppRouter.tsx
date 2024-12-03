import { createBrowserRouter } from 'react-router-dom';

import { HomePage, ErrorPage, PetsPage, EmployeePage } from '../pages';
import { AdminLayout, HomeLayout } from '../layouts';
import { CustomerPage } from '../pages/CustomerPage';
import { AuthProxy } from '../layouts/AuthProxy';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		children: [{ index: true, element: <HomePage /> }],
	},
	{
		path: '/admin',
		element: (
			<AuthProxy>
				<AdminLayout />
			</AuthProxy>
		),
		children: [
			{ index: true, element: <PetsPage /> },
			{
				path: '/admin/customers',
				element: <CustomerPage />,
			},
			{
				path: '/admin/employees',
				element: <EmployeePage />,
			},
		],
	},
	{
		path: '*',
		errorElement: <ErrorPage />,
	},
]);
