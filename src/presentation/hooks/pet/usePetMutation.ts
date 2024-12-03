import { apiFetcher } from "@/config/adapters/api.adapter";
import { createPetUseCase } from "@/core/use-cases/pets/create-pet.use-case";
import { deletePetUseCase } from "@/core/use-cases/pets/delete-pet.use-case";
import { userStore } from "@/presentation/store/user.store";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePetMutation = () => {
	const queryClient = useQueryClient();

	const { user } = userStore();


	const mutationCreate = useMutation({
		mutationFn: (pet: Record<string, unknown>) => {
			return createPetUseCase(apiFetcher, user.token, pet);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				predicate: (query) => query.queryKey[0] === 'pets',
			});
		},
	});


	const mutationDelete = useMutation({
		mutationFn: (id: number) => {
			return deletePetUseCase(apiFetcher, user.token, id);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				predicate: (query) => query.queryKey[0] === 'pets',
			});
		},
	});

	return {
		mutationDelete,
		mutationCreate
	};
};