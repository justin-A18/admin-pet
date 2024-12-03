import { z } from 'zod';

export const EmployeeSchema = z.object({
	first_name: z.string().min(1, 'El nombre es obligatorio'),
	last_name: z.string().min(1, 'El apellido es obligatorio'),
	dni: z.string().length(8, 'El DNI debe tener 8 caracteres'),
	email: z.string().email('Debe ser un correo electrónico válido'),
	phone_number: z
		.string()
		.min(9, 'El número de teléfono debe tener al menos 10 dígitos')
		.regex(/^\d+$/, 'El número de teléfono debe contener solo dígitos'),
	direction: z.string().min(1, 'La dirección es obligatoria'),
	birth_date: z.date(),
	type_id: z.preprocess(
		(val) => {
			if (typeof val === 'string') {
				const parsed = parseInt(val, 10);
				return isNaN(parsed) ? undefined : parsed;
			}
			return val;
		},
		z.number().int().positive('El tipo de empleado debe ser un número positivo')
	),
});