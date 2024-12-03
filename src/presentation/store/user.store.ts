import { LoginResponse } from '@/infrastructure/interfaces';
import { create } from 'zustand';

const initialState: LoginResponse = {
	token: '',
	role: false,
	message: ''
};

const getUserFromLocalStorage = (): LoginResponse => {
	const user = localStorage.getItem('userStorage');
	return user ? JSON.parse(user) : initialState;
};

interface UserStore {
	user: LoginResponse;
	login: (user: LoginResponse) => void;
	logout: () => void;
}

export const userStore = create<UserStore>((set) => ({
	user: getUserFromLocalStorage(),
	login(user: LoginResponse) {
		set({ user });
	},
	logout() {
		localStorage.clear();

		set({ user: initialState });
	}
}));



interface MenuState {
	isCustomerMenuOpen: boolean;
	isPetMenuOpen: boolean;
	isEmployeeMenuOpen: boolean;

	setCustomerMenuOpen: (isOpen: boolean) => void;
	setPetMenuOpen: (isOpen: boolean) => void;
	setEmployeeMenuOpen: (isOpen: boolean) => void;
}

export const useMenuStore = create<MenuState>((set) => ({
	isCustomerMenuOpen: false,
	isPetMenuOpen: false,
	isEmployeeMenuOpen: false,

	setCustomerMenuOpen: (isOpen: boolean) => set({ isCustomerMenuOpen: isOpen }),
	setPetMenuOpen: (isOpen: boolean) => set({ isPetMenuOpen: isOpen }),
	setEmployeeMenuOpen: (isOpen: boolean) => set({ isEmployeeMenuOpen: isOpen }),
}));