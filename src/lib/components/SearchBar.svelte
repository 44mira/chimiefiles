<script lang="ts">
	import Search from '@lucide/svelte/icons/search';

	// Defines 'value' as a bindable prop so the parent component updates automatically
	let { value = $bindable('') } = $props();
</script>

<div class="relative w-full max-w-xl">
	<div
		class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400"
	>
		<Search class="h-5 w-5" />
	</div>

	<input
		type="text"
		bind:value
		placeholder="Search by year, degree, or algorithm..."
		class="w-full rounded-xl border border-slate-200 bg-white py-2.5 pr-4 pl-11 text-sm text-slate-900 placeholder-slate-400 shadow-sm ring-offset-white transition-all outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
	/>
</div>
