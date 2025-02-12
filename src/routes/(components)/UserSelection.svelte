<script lang="ts">
	import * as Form from '$lib/components/ui/form/index.js';
	import * as Select from "$lib/components/ui/select/index.js";
    import type { User } from '$lib/types';
	import { Input } from '$lib/components/ui/input/index.js';
	import { userSchema, type UserFormSchema } from '$lib/schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
    let { formz, selectedUser }: {formz: SuperValidated<Infer<UserFormSchema>> ,
	selectedUser: User
  } = $props();

  const form = superForm(formz, {
    validators: zodClient(userSchema),
  });
 
  const { form: formData, enhance } = form;

  formData.update(
  ($form) => {
    $form.name = selectedUser.name;
	$form.email = selectedUser.email;
	$form.role = selectedUser.role;
    return $form;
  },
  { taint: false }
);
</script>


<form method="POST" use:enhance>
	<h2 class="mb-4 text-xl font-bold">Edit User</h2>

	<div>
		<Form.Field {form} name="name">
			<Form.Control>
			  {#snippet children({ props })}
				<Form.Label>Name</Form.Label>
				<Input {...props}  bind:value={$formData.name} />
			  {/snippet}
			</Form.Control>
			<Form.Description>This is your public display name.</Form.Description>
			<Form.FieldErrors />
		  </Form.Field>
		<!-- <label class="block text-sm font-medium text-gray-700">Name</label>
		<input
			type="text"
			class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
			bind:value={selectedUser.name}
		/> -->
	</div>

	<div>
		<Form.Field {form} name="email">
			<Form.Control>
			  {#snippet children({ props })}
				<Form.Label>Email</Form.Label>
				<Input {...props} placeholder={selectedUser.email} bind:value={$formData.email} />
			  {/snippet}
			</Form.Control>
			<Form.Description>This is your public display name.</Form.Description>
			<Form.FieldErrors />
		  </Form.Field>
		
	</div>

	<div class="w-2/3 space-y-6">
		<Form.Field {form} name="role">
			<Form.Control>
			  {#snippet children({ props })}
				<Form.Label>Role</Form.Label>
				<Select.Root
				  type="single"
				  bind:value={$formData.role}
				  name={props.name}
				>
				  <Select.Trigger {...props}>
					{$formData.role
					  ? $formData.role
					  : "Select a verified email to display"}
				  </Select.Trigger>
				  <Select.Content>
					<Select.Item value="Admin" label="Admin" />
					<Select.Item value="Editor" label="Editor" />
					<Select.Item value="User" label="User" />
				  </Select.Content>
				</Select.Root>
			  {/snippet}
			</Form.Control>
			<Form.FieldErrors />
		  </Form.Field>
		<!-- <label class="block text-sm font-medium text-gray-700">Role</label>
		<select
			class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
			bind:value={selectedUser.role}
		>
			<option value="admin">Admin</option>
			<option value="editor">Editor</option>
			<option value="user">User</option>
		</select> -->
	</div>

	<Form.Button type="submit">Submit</Form.Button>
</form>
