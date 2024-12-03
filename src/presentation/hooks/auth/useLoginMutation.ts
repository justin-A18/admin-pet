import { apiFetcher } from "@/config/adapters/api.adapter";
import { loginUserUseCase } from "@/core/use-cases/auth/login-use.use-case";
import { userStore } from "@/presentation/store/user.store";
import { useMutation } from "@tanstack/react-query";
import { useLocalStorage } from 'usehooks-ts';

export const useLoginMutation = () => {
	const [, setUserStorage] = useLocalStorage('userStorage', {});

	const { login } = userStore();

	const loginMutation = useMutation({
		mutationKey: ['login'],
		mutationFn: (body: Record<string, string>) => loginUserUseCase(apiFetcher, body),
		onSuccess: (data) => {
			setUserStorage(data);
			login(data);
		}
	});

	return {
		loginMutation
	};
};
