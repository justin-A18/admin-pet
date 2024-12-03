import { Pet } from '@/infrastructure/interfaces';
import { ColumnDef } from '@tanstack/react-table';
import { DataActions } from '../DataActions';
import { usePetMutation } from '@/presentation/hooks/pet/usePetMutation';

export const petColumns: ColumnDef<Pet>[] = [
	{
		accessorKey: 'name',
		header: 'Nombre',
		cell: ({ getValue }) => {
			const value = getValue<string>();
			return value;
		},
	},
	{
		accessorKey: 'specie',
		header: 'Especie',
		cell: ({ getValue }) => {
			const value = getValue<string>();
			return value;
		},
	},
	{
		accessorKey: 'gender',
		header: 'Género',
		cell: ({ getValue }) => {
			const value = getValue<string>();
			return value;
		},
	},
	{
		accessorKey: 'race',
		header: 'Raza',
		cell: ({ getValue }) => {
			const value = getValue<string>();
			return value;
		},
	},
	{
		accessorKey: 'age',
		header: 'Edad',
		cell: ({ getValue }) => {
			const value = getValue<number>();
			return value.toString();
		},
	},
	{
		accessorKey: 'weight',
		header: 'Peso',
		cell: ({ getValue }) => {
			const value = getValue<number>();
			return value.toString();
		},
	},
	{
		id: 'actions',
		header: 'Acciones',
		cell: ({ row }) => {
			const pet: Pet = row.original;

			const { mutationDelete } = usePetMutation();

			const onDelete = () => {
				mutationDelete.mutate(pet.ID);
			};

			return <DataActions onDelete={onDelete} />;
		},
	},
];
