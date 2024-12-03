import { apiFetcher } from "@/config/adapters/api.adapter";
import { getPetsUseCase } from "@/core/use-cases/pets/get-pets.use-case";
import { userStore } from "@/presentation/store/user.store";
import { useQuery } from "@tanstack/react-query";

export const usePetsQuery = () => {

	const { user } = userStore();

	const petsQuery = useQuery({
		queryKey: ["pets"],
		queryFn: () => getPetsUseCase(apiFetcher, user.token),
	});


	return {
		petsQuery
	};
};
