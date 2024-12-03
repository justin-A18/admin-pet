import { Button } from '@/presentation/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/presentation/components/ui/dropdown-menu';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';

interface DataActionsProps {
	onEdit?: () => void;
	onDelete?: () => void;
}

export const DataActions = ({ onEdit, onDelete }: DataActionsProps) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				asChild
				className='bg-[#FED8AB] hover:bg-[#FED8AB]
				outline-none focus:outline-none'>
				<Button
					variant='ghost'
					className='h-8 w-8 p-0'>
					<DotsHorizontalIcon className='h-4 w-4' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align='end'
				className='bg-[#FED8AB] border-none 
			text-black'>
				<DropdownMenuLabel>Acciones</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={onEdit}>Editar</DropdownMenuItem>
				<DropdownMenuItem onClick={onDelete}>Eliminar</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
