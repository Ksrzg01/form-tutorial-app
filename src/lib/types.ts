export interface User {
	id: number;
	name: string;
	email: string;
	role: 'admin' | 'user' | 'editor';
	lastActive: string;
}
