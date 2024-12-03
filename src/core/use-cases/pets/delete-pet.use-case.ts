import { HttpAdapter } from "@/config/adapters/http";
import { PetResponse } from "@/infrastructure/interfaces";

export const deletePetUseCase = async (fetcher: HttpAdapter, token: string, id: number): Promise<PetResponse> => {
	const response = await fetcher.delete<PetResponse>(`api/v1/pet/${id}`, {}, token);
	return response;
};