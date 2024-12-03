export interface MessageResponse {
	message: string;
}

export interface LoginResponse {
	role: boolean,
	token: string;
	message: string;
};

export interface AuthResponse {
	message_type: string,
	message: string,
	data: Omit<LoginResponse, 'message'>;
}

//<--------->

export interface Pet {
	ID: number;
	CreatedAt: Date;
	UpdatedAt: Date;
	DeletedAt: null;
	name: string;
	specie: string;
	gender: string;
	race: string;
	age: number;
	weight: number;
}

export interface PetResponse {
	message_type: string,
	message: string,
	data: Pet[];
}

export interface PetMapperResponse {
	message: string,
	data: Omit<Pet[], 'CreatedAt' | 'UpdatedAt' | 'DeletedAt'>;
}

//<--------->

export interface Employee {
	ID: number;
	CreatedAt: Date;
	UpdatedAt: Date;
	DeletedAt: null;
	first_name: string;
	last_name: string;
	dni: string;
	email: string;
	phone_number: string;
	direction: string;
	birth_date: Date;
	type_id: number;
	employee_type: EmployeeType;
}

export interface EmployeeResponse {
	message_type: string,
	message: string,
	data: Employee[];
}

export interface EmployeeType {
	ID: number;
	CreatedAt: Date;
	UpdatedAt: Date;
	DeletedAt: null;
	name: string;
}

export interface EmployeeTypeResponse {
	message_type: string,
	message: string,
	data: EmployeeType[];
}

export interface EmployeeMapperResponse {
	message: string,
	data: Omit<Employee[], 'CreatedAt' | 'UpdatedAt' | 'DeletedAt'>;
}

export interface EmployeeTypesMapperResponse {
	message: string,
	data: Omit<EmployeeType[], 'CreatedAt' | 'UpdatedAt' | 'DeletedAt'>;
}

//<--------->

export interface Customer {
	ID: number;
	CreatedAt: Date;
	UpdatedAt: Date;
	DeletedAt: null;
	first_name: string;
	last_name: string;
	dni: string;
	email: string;
	phone_number: string;
	pet_id: number;
	pet: Pet;
}

export interface CustomerResponse {
	message_type: string,
	message: string,
	data: Customer[];
}

export interface CustomerMapperResponse {
	message: string,
	data: Omit<Customer[], 'CreatedAt' | 'UpdatedAt' | 'DeletedAt'>;
}