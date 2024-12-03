import { z } from "zod";

export const PetSchema = z.object({
	name: z.string().min(1, 'El nombre es obligatorio'),
	specie: z.string().min(1, 'La especie es obligatoria'),
	gender: z.string().min(1, 'El genero es obligatorio'),
	race: z.string().min(1, 'La raza es obligatoria'),
	age: z.preprocess(
		(val) => {
			if (typeof val === 'string') {
				const parsed = parseInt(val, 10);
				return isNaN(parsed) ? undefined : parsed;
			}
			return val;
		},
		z.number().int().positive('La edad debe ser positiva')
	),
	weight: z.preprocess(
		(val) => {
			if (typeof val === 'string') {
				const parsed = parseInt(val, 10);
				return isNaN(parsed) ? undefined : parsed;
			}
			return val;
		},
		z.number().int().positive('El peso debe ser positivo')
	),
});