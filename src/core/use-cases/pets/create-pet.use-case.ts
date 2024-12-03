import { HttpAdapter } from "@/config/adapters/http";
import { PetResponse } from "@/infrastructure/interfaces";

export const createPetUseCase = async (fetcher: HttpAdapter, token: string, body: Record<string, unknown>): Promise<PetResponse> => {
	const response = await fetcher.post<PetResponse>(`api/v1/pet`, body, {}, token);
	return response;
};