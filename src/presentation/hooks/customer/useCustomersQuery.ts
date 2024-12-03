import { apiFetcher } from "@/config/adapters/api.adapter";
import { getCustomersUseCase } from "@/core/use-cases/customer/get-customers.use-case";
import { userStore } from "@/presentation/store/user.store";
import { useQuery } from "@tanstack/react-query";

export const useCustomersQuery = () => {

	const { user } = userStore();

	const customersQuery = useQuery({
		queryKey: ["customers"],
		queryFn: () => getCustomersUseCase(apiFetcher, user.token),
	});

	return {
		customersQuery
	};
};
