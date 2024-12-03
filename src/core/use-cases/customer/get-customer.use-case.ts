import { HttpAdapter } from "@/config/adapters/http";
import { CustomerResponse } from "@/infrastructure/interfaces";

export const getCustomerUseCase = async (fetcher: HttpAdapter, token: string, id: string): Promise<CustomerResponse> => {
	const response = await fetcher.get<CustomerResponse>(`api/v1/customer/${id}`, {}, token);
	return response;
};