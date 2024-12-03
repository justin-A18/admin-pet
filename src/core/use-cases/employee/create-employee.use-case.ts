import { HttpAdapter } from "@/config/adapters/http";
import { EmployeeResponse } from "@/infrastructure/interfaces";

export const createEmployeeUseCase = async (fetcher: HttpAdapter, token: string, body: Record<string, unknown>): Promise<EmployeeResponse> => {
	const response = await fetcher.post<EmployeeResponse>(`api/v1/employee`, body, {}, token);
	return response;
};