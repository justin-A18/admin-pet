import { HttpAdapter } from "@/config/adapters/http";
import { EmployeeResponse } from "@/infrastructure/interfaces";

export const updateEmployeeUseCase = async (fetcher: HttpAdapter, token: string, body: Record<string, string>, id: string): Promise<EmployeeResponse> => {
	const response = await fetcher.post<EmployeeResponse>(`/employee/${id}`, body, {}, token);
	return response;
};