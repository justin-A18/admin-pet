import { HttpAdapter } from "@/config/adapters/http";
import { CustomerResponse } from "@/infrastructure/interfaces";

export const updateCustomerUseCase = async (fetcher: HttpAdapter, token: string, body: Record<string, string>, id: string): Promise<CustomerResponse> => {
	const response = await fetcher.post<CustomerResponse>(`/customer/${id}`, body, {}, token);
	return response;
};