import { z } from 'zod';

export const userSchema = z.object({
	id: z.number(), // Unique user ID
	name: z.string(), // User's name
	email: z.string().email(), // User's email address
	role: z.enum(['admin', 'user', 'editor']), // User role
	lastActive: z.string() // Last active timestamp
});

export type UserFormSchema = typeof userSchema;
