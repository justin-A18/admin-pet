import { apiFetcher } from "@/config/adapters/api.adapter";
import { getEmployeeTypesUseCase } from "@/core/use-cases/employee/get-employee-types.use-case";
import { userStore } from "@/presentation/store/user.store";
import { useQuery } from "@tanstack/react-query";

export const useEmployeeTypesQuery = () => {

	const { user } = userStore();

	const employeeTypesQuery = useQuery({
		queryKey: ["employeeTypes"],
		queryFn: () => getEmployeeTypesUseCase(apiFetcher, user.token),
	});

	return {
		employeeTypesQuery
	};
};
