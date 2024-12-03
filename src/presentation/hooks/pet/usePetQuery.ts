import { apiFetcher } from "@/config/adapters/api.adapter";
import { getPetUseCase } from "@/core/use-cases/pets/get-pet.use-case";
import { userStore } from "@/presentation/store/user.store";
import { useQuery } from "@tanstack/react-query";

export const usePetQuery = (id: string) => {

	const { user } = userStore();

	const petQuery = useQuery({
		queryKey: ["pet", id],
		queryFn: () => getPetUseCase(apiFetcher, user.token, id),
	});


	return {
		petQuery
	};
};
