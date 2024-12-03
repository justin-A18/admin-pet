import { HttpAdapter } from "@/config/adapters/http";
import { EmployeeTypeResponse, EmployeeTypesMapperResponse } from "@/infrastructure/interfaces";

export const getEmployeeTypesUseCase = async (fetcher: HttpAdapter, token: string): Promise<EmployeeTypesMapperResponse> => {
	const response = await fetcher.get<EmployeeTypeResponse>(`api/v1/types`, {}, token);
	return response;
};;