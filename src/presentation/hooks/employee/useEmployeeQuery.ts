import { apiFetcher } from "@/config/adapters/api.adapter";
import { getEmployeeUseCase } from "@/core/use-cases/employee/get-employee.use-case";
import { userStore } from "@/presentation/store/user.store";
import { useQuery } from "@tanstack/react-query";

export const useEmployeeQuery = (id: string) => {

	const { user } = userStore();

	const employeeQuery = useQuery({
		queryKey: ["employee", id],
		queryFn: () => getEmployeeUseCase(apiFetcher, user.token, id),
	});

	return {
		employeeQuery
	};
};
