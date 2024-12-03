import { HttpAdapter } from "@/config/adapters/http";
import { PetMapperResponse, PetResponse } from "@/infrastructure/interfaces";

export const getPetsUseCase = async (fetcher: HttpAdapter, token: string): Promise<PetMapperResponse> => {
	const response = await fetcher.get<PetResponse>(`api/v1/pets`, {}, token);
	return response;
};