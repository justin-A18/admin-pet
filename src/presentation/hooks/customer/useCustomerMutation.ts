import { apiFetcher } from "@/config/adapters/api.adapter";
import { createCustomerUseCase } from "@/core/use-cases/customer/create-customer.use-case";
import { deleteCustomerUseCase } from "@/core/use-cases/customer/delete-customer.use-case";
import { userStore } from "@/presentation/store/user.store";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCustomerMutation = () => {
	const queryClient = useQueryClient();

	const { user } = userStore();

	const mutationCreate = useMutation({
		mutationFn: (customer: Record<string, unknown>) => {
			return createCustomerUseCase(apiFetcher, user.token, customer);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				predicate: (query) => query.queryKey[0] === 'customers',
			});
		},
	});


	const mutationDelete = useMutation({
		mutationFn: (id: number) => {
			return deleteCustomerUseCase(apiFetcher, user.token, id);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				predicate: (query) => query.queryKey[0] === 'customers',
			});
		},
	});

	return {
		mutationDelete,
		mutationCreate
	};
};