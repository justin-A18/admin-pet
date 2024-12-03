import { HttpAdapter } from "@/config/adapters/http";
import { CustomerResponse, } from "@/infrastructure/interfaces";

export const deleteCustomerUseCase = async (fetcher: HttpAdapter, token: string, id: number): Promise<CustomerResponse> => {
	const response = await fetcher.delete<CustomerResponse>(`/api/v1/customer/${id}`, {}, token);
	return response;
};