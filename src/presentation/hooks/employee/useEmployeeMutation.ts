import { apiFetcher } from "@/config/adapters/api.adapter";
import { createEmployeeUseCase } from "@/core/use-cases/employee/create-employee.use-case";
import { deleteEmployeeUseCase } from "@/core/use-cases/employee/delete-employee.use-case";
import { userStore } from "@/presentation/store/user.store";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useEmployeeMutation = () => {
	const queryClient = useQueryClient();

	const { user } = userStore();


	const mutationCreate = useMutation({
		mutationFn: (customer: Record<string, unknown>) => {
			return createEmployeeUseCase(apiFetcher, user.token, customer);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				predicate: (query) => query.queryKey[0] === 'employees',
			});
		},
	});


	const mutationDelete = useMutation({
		mutationFn: (id: number) => {
			return deleteEmployeeUseCase(apiFetcher, user.token, id);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				predicate: (query) => query.queryKey[0] === 'employees',
			});
		},
	});

	return {
		mutationCreate,
		mutationDelete
	};
};