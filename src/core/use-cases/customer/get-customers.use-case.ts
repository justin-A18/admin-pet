import { HttpAdapter } from "@/config/adapters/http";
import { CustomerMapperResponse } from "@/infrastructure/interfaces";

export const getCustomersUseCase = async (fetcher: HttpAdapter, token: string): Promise<CustomerMapperResponse> => {
	const response = await fetcher.get<CustomerMapperResponse>("api/v1/customers", {}, token);
	return response;
};