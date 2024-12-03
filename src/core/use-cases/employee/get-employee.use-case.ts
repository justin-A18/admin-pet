import { HttpAdapter } from "@/config/adapters/http";
import { EmployeeMapperResponse } from "@/infrastructure/interfaces";

export const getEmployeeUseCase = async (fetcher: HttpAdapter, token: string, id: string): Promise<EmployeeMapperResponse> => {
	const response = await fetcher.get<EmployeeMapperResponse>(`api/v1/employee/${id}`, {}, token);
	return response;
};