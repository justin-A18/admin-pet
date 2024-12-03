import { HttpAdapter } from "@/config/adapters/http";
import { EmployeeMapperResponse } from "@/infrastructure/interfaces";

export const getEmployeesUseCase = async (fetcher: HttpAdapter, token: string): Promise<EmployeeMapperResponse> => {
	const response = await fetcher.get<EmployeeMapperResponse>("api/v1/employees", {}, token);
	return response;
};