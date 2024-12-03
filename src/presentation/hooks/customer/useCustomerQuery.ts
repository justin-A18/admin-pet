import { apiFetcher } from "@/config/adapters/api.adapter";
import { getCustomerUseCase } from "@/core/use-cases/customer/get-customer.use-case";
import { userStore } from "@/presentation/store/user.store";
import { useQuery } from "@tanstack/react-query";

export const useCustomerQuery = (id: string) => {

	const { user } = userStore();

	const customerQuery = useQuery({
		queryKey: ["customer", id],
		queryFn: () => getCustomerUseCase(apiFetcher, user.token, id),
	});


	return {
		customerQuery
	};
};
