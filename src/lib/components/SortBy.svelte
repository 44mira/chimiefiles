<script lang="ts">
	import { ArrowUpDown } from '@lucide/svelte';
	import { SortOption } from '$lib/interfaces';

	interface Props {
		// Allow the value to be SortOption OR undefined for the placeholder
		value: keyof typeof SortOption | undefined;
	}

	const OPTIONS = Object.entries(SortOption);

	// Fallback to undefined so it triggers the placeholder if no parent value is sent
	let { value = $bindable(undefined) }: Props = $props();
</script>

<div class="relative w-full text-sm md:w-56">
	<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
		<ArrowUpDown class="h-4 w-4" />
	</div>

	<select
		bind:value
		class="{value ? '' : 'text-slate-400'}
    block w-full cursor-pointer appearance-none rounded-xl border border-slate-300 bg-white py-2.5 pr-8 pl-9 shadow-sm transition-colors hover:bg-slate-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
	>
		<option value={undefined} disabled hidden>Sort by...</option>

		{#each OPTIONS as [k, v]}
			<option value={k}>{v}</option>
		{/each}
	</select>
</div>
