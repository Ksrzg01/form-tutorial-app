import type { PageServerLoad } from '../$types';
import { faker } from '@faker-js/faker';
import type { User } from '$lib/types';
import { superValidate, message } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { userSchema } from '$lib/schema';

const generateFakeUsers = (count: number): User[] => {
	return Array.from({ length: count }, (_, i) => ({
		id: i + 1,
		name: faker.person.fullName(),
		email: faker.internet.email(),
		role: faker.helpers.arrayElement(['admin', 'user', 'editor']),
		lastActive: faker.date.recent().toISOString()
	}));
};


export const load: PageServerLoad = async () => {
	const users = generateFakeUsers(10);
    const user = generateFakeUsers(1);
    const form = await superValidate(zod(userSchema))
	return {
		form
	};
}