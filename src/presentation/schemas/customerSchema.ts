import { z } from "zod";

export const CustomerSchema = z.object({
	first_name: z.string(),
	last_name: z.string(),
	dni: z.string().length(8, 'El DNI debe tener 10 caracteres'),
	email: z.string().email('Debe ser un correo electrónico válido'),
	phone_number: z.string().min(7, 'El teléfono debe tener al menos 7 caracteres'),
	pet_id: z.preprocess(
		(val) => {
			if (typeof val === 'string') {
				const parsed = parseInt(val, 10);
				return isNaN(parsed) ? undefined : parsed;
			}
			return val;
		},
		z.number().int().positive('El ID de la mascota debe ser un número positivo')
	),
});