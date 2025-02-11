import { z } from 'zod';
import { setError, superValidate } from 'sveltekit-superforms/server';
import type { Actions, PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { zod } from 'sveltekit-superforms/adapters';

const loginUserSchema = z.object({
	email: z.string().email('Please enter a valid email address'),
	password: z.string().min(1, 'Please enter a password'),
	notVerified: z.boolean()
});

export const load: PageServerLoad = async () => {

	return {
		form: await superValidate(zod(loginUserSchema))
	};
};
