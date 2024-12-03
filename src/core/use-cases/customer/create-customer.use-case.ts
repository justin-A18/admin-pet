import { HttpAdapter } from "@/config/adapters/http";
import { CustomerResponse } from "@/infrastructure/interfaces";

export const createCustomerUseCase = async (fetcher: HttpAdapter, token: string, body: Record<string, unknown>): Promise<CustomerResponse> => {
	const response = await fetcher.post<CustomerResponse>(`api/v1/customer`, body, {}, token);
	return response;
};