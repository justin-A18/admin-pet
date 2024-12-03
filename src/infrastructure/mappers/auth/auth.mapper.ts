import { AuthResponse, LoginResponse } from "@/infrastructure/interfaces/api.responses";

export class AuthMapper {
	static fromAuthResponseToUser(response: AuthResponse): LoginResponse {
		return {
			token: response.data.token,
			role: response.data.role,
			message: response.message
		};
	}
}