<script lang="ts">
	import { type Thesis, type ThesisFormData, type Algorithm } from '$lib/interfaces';
	import { MOCKDATA, DEGREE_PROGRAMS } from './mockData.ts';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import FilterSelection from '$lib/components/FilterSelection.svelte';
	import Card from '$lib/components/Card.svelte';

	let theses = $state<Thesis[]>(MOCKDATA as Thesis[]);
	let searchTerm = $state<string>('');
	let selectedAlgoFilters = $state<Algorithm[]>([]);

	let algoFilters = $derived.by(() => {
		let algos: Set<Algorithm> = new Set();

		for (const thesis of theses) {
			for (const algo of thesis.algorithm) {
				algos.add(algo);
			}
		}

		return Array.from(algos).sort();
	});
</script>

<div class="flex min-w-9/12 justify-center gap-2 p-5">
	<SearchBar bind:value={searchTerm} />
	<FilterSelection options={algoFilters} bind:selected={selectedAlgoFilters} />
</div>
<div class="flex max-w-10/12 flex-col gap-4 rounded-2xl bg-green-500 p-5 shadow-xl">
	{#each theses as thesis (thesis.id)}
		<Card {thesis} />
	{/each}
</div>
