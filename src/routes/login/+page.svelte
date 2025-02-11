<script lang="ts">
    import type { PageProps } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	let { data }: PageProps = $props();
	const { form, errors, enhance } = superForm(data.form);
</script>

<div class="flex h-screen w-full flex-col items-center px-4 py-20">
	<h2 class="text-base-content mt-2 text-center text-3xl font-bold tracking-tight">
		Login to your account
	</h2>
	<p class="mt-1 text-center">
		Or <a
			href="/signup"
			class="font-medium text-primary underline hover:cursor-pointer hover:underline">register</a
		> if you don't already have an account.
	</p>
	<form
		method="POST"
		use:enhance
		action="?/signInEmail"
		class="flex w-full flex-col items-center space-y-2 pt-4"
		data-testid="login-form"
	>
		<div class="form-control mb-2 w-full max-w-lg">
			<label for="email" class="label pb-1 font-medium">
				<span class="label-text">Email</span>
			</label>
			<Input
				class="input input-bordered w-full max-w-lg"
				type="text"
				name="email"
				bind:value={$form.email}
				data-testid="email"
			/>

			{#if $errors.email}
				<span class="block text-red-600 dark:text-red-500">{$errors.email}</span>
			{/if}
		</div>
		<div class="form-control mb-2 w-full max-w-lg">
			<label for="password" class="label pb-1 font-medium">
				<span class="label-text">Password</span>
			</label>
			<Input
				class="input input-bordered w-full max-w-lg"
				type="password"
				name="password"
				bind:value={$form.password}
				data-testid="password"
			/>

			{#if $errors.password}
				<span class="block text-red-600 dark:text-red-500">{$errors.password}</span>
			{/if}
		</div>
		<div class="w-full max-w-lg">
			<a
				href="/reset-password"
				class="font-medium text-primary hover:cursor-pointer hover:underline"
			>
				Forgot Password?</a
			>
		</div>

		<div class="w-full max-w-lg pt-2">
			<Button type="submit" class="btn btn-primary w-full">Login</Button>
		</div>
	</form>
	<div class="flex w-full max-w-lg items-center py-4">
		<hr class="flex-grow border-gray-300" />
		<span class="px-2 text-gray-500">OR</span>
		<hr class="flex-grow border-gray-300" />
	</div>

	<form
		method="POST"
		action="?/signInWithGoogle"
		class="flex w-full max-w-lg flex-col space-y-1 pt-2 md:flex-row md:space-x-1 md:space-y-0"
	>
		<Button variant="outline" type="submit" class="flex w-full items-center justify-center gap-2">
			<svg class="h-5 w-5" viewBox="0 0 24 24">
				<path
					d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
					fill="#4285F4"
				/>
				<path
					d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
					fill="#34A853"
				/>
				<path
					d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
					fill="#FBBC05"
				/>
				<path
					d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
					fill="#EA4335"
				/>
			</svg>
			Continue with Google
		</Button>
	</form>
	<div class="divider" />
</div>