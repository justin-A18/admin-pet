import { apiFetcher } from "@/config/adapters/api.adapter";
import { getEmployeesUseCase } from "@/core/use-cases/employee/get-employees.use-case";

import { userStore } from "@/presentation/store/user.store";
import { useQuery } from "@tanstack/react-query";

export const useEmployeesQuery = () => {

	const { user } = userStore();

	const employeesQuery = useQuery({
		queryKey: ["employees"],
		queryFn: () => getEmployeesUseCase(apiFetcher, user.token),
	});

	return {
		employeesQuery
	};
};
