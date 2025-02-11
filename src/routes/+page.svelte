<script lang="ts">
	import type { PageProps } from './$types';
	import type { User } from '$lib/types';
	import UserSelection from './(components)/UserSelection.svelte';
    import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';

	let { data }: PageProps = $props();
    const { form, errors, enhance } = superForm(data.form);
    
	let selectedUser = $state<User | null>(null);

	function handleUserSelect(user: User) {
		selectedUser = user;
	}
</script>

<div class="container mx-auto p-4">
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
		<!-- User List -->
		<div class="rounded-lg bg-white p-4 shadow">
			<h2 class="mb-4 text-xl font-bold">Users</h2>
			<ul class="space-y-2">
				{#each data.users as user}
					<li
						class="cursor-pointer rounded p-2 hover:bg-gray-100"
						class:bg-blue-50={selectedUser?.id === user.id}
						onclick={() => handleUserSelect(user)}
					>
						<div class="font-medium">{user.name}</div>
						<div class="text-sm text-gray-600">{user.email}</div>
					</li>
				{/each}
			</ul>
		</div>

		<!-- User Editor -->
		<div class="rounded-lg bg-white p-4 shadow">
			{#if selectedUser}
				<UserSelection  formz={data.form} {selectedUser} />
			{:else}
				<p class="text-gray-500">Select a user to edit</p>
			{/if}
		</div>
	</div>
</div>
