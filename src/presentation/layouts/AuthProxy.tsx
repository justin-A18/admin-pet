import { Navigate } from 'react-router-dom';
import { userStore } from '../store/user.store';

export const AuthProxy = ({ children }: { children: React.ReactNode }) => {
	const { user } = userStore();

	return user.token ? children : <Navigate to='/' />;
};
