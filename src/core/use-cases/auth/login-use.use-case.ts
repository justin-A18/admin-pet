import { AuthMapper } from "@/infrastructure/mappers/auth";
import { HttpAdapter } from "@/config/adapters/http/";
import { AuthResponse, LoginResponse } from "@/infrastructure/interfaces";

export const loginUserUseCase = async (fetcher: HttpAdapter, body: Record<string, string>): Promise<LoginResponse> => {
	const response = await fetcher.post<AuthResponse>("/auth/login", body);
	return AuthMapper.fromAuthResponseToUser(response);
};