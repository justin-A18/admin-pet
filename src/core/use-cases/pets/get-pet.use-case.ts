import { HttpAdapter } from "@/config/adapters/http";
import { Pet } from "@/infrastructure/interfaces";

export const getPetUseCase = async (fetcher: HttpAdapter, token: string, id: string): Promise<Pet> => {
	const response = await fetcher.get<Pet>(`api/v1/pet/${id}`, {}, token);
	return response;
};