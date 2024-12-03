import { ColumnDef } from '@tanstack/react-table';
import { DataActions } from '../DataActions';
import { Customer } from '@/infrastructure/interfaces';
import { useCustomerMutation } from '@/presentation/hooks/customer/useCustomerMutation';

export const customerColumns: ColumnDef<Customer>[] = [
	{
		accessorKey: 'first_name',
		header: 'Nombre',
		cell: ({ getValue }) => {
			const value = getValue<string>();
			return value;
		},
	},
	{
		accessorKey: 'last_name',
		header: 'Apellido',
		cell: ({ getValue }) => {
			const value = getValue<string>();
			return value;
		},
	},
	{
		accessorKey: 'dni',
		header: 'DNI',
		cell: ({ getValue }) => {
			const value = getValue<string>();
			return value;
		},
	},
	{
		accessorKey: 'email',
		header: 'Correo Electrónico',
		cell: ({ getValue }) => {
			const value = getValue<string>();
			return value;
		},
	},
	{
		accessorKey: 'phone_number',
		header: 'Teléfono',
		cell: ({ getValue }) => {
			const value = getValue<string>();
			return value;
		},
	},
	{
		id: 'actions',
		header: 'Acciones',
		cell: ({ row }) => {
			const customer: Customer = row.original;

			const { mutationDelete } = useCustomerMutation();

			const onDelete = () => {
				mutationDelete.mutate(customer.ID);
			};

			return <DataActions onDelete={onDelete} />;
		},
	},
];
