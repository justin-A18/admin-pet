import { ColumnDef } from '@tanstack/react-table';
import { DataActions } from '../DataActions';
import { Employee } from '@/infrastructure/interfaces';
import { useEmployeeMutation } from '@/presentation/hooks/employee/useEmployeeMutation';

export const employeeColumns: ColumnDef<Employee>[] = [
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
		accessorKey: 'direction',
		header: 'Dirección',
		cell: ({ getValue }) => {
			const value = getValue<string>();
			return value;
		},
	},
	{
		id: 'actions',
		header: 'Acciones',
		cell: ({ row }) => {
			const person: Employee = row.original;

			const { mutationDelete } = useEmployeeMutation();

			const onDelete = () => {
				mutationDelete.mutate(person.ID);
			};

			return <DataActions onDelete={onDelete} />;
		},
	},
];
