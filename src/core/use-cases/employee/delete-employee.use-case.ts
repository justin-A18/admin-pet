import { HttpAdapter } from "@/config/adapters/http";
import { EmployeeResponse } from "@/infrastructure/interfaces";

export const deleteEmployeeUseCase = async (fetcher: HttpAdapter, token: string, id: number): Promise<EmployeeResponse> => {
	const response = await fetcher.delete<EmployeeResponse>(`api/v1/employee/${id}`, {}, token);
	return response;
};