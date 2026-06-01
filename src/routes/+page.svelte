<script lang="ts">
	import { type Thesis, SortOption, type Algorithm } from '$lib/interfaces';
	import { MOCKDATA } from './mockData.ts';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import FilterSelection from '$lib/components/FilterSelection.svelte';
	import Card from '$lib/components/Card.svelte';
	import SortBy from '$lib/components/SortBy.svelte';

	// states ===================================================================
	let theses = $state<Thesis[]>(MOCKDATA as Thesis[]);
	let searchTerm = $state<string>('');
	let selectedAlgoFilters = $state<Algorithm[]>([]);
	let selectedSortTarget = $state<keyof typeof SortOption>();
	// states ===================================================================

	let algoFilters = $derived.by(() => {
		let algos: Set<Algorithm> = new Set();

		for (const thesis of theses) {
			for (const algo of thesis.algorithm) {
				algos.add(algo);
			}
		}

		return Array.from(algos).sort();
	});

	let displayedTheses = $derived.by(() => {
		const searchLower = searchTerm.toLowerCase();

		// 1. Process Search and Filters
		let result = theses.filter((t) => {
			const matchesSearch =
				t.name.toLowerCase().includes(searchLower) ||
				t.title.toLowerCase().includes(searchLower) ||
				t.dataset.toLowerCase().includes(searchLower);

			const matchesAlgo =
				selectedAlgoFilters.length === 0 ||
				selectedAlgoFilters.every((algo) => t.algorithm.includes(algo));

			return matchesSearch && matchesAlgo;
		});

		// 2. Apply Sorting based on the selected enum value
		result.sort((a, b) => {
			switch (selectedSortTarget) {
				case 'YearAsc':
					return a.year - b.year;
				case 'YearDesc':
					return b.year - a.year;
				case 'TitleAsc':
					return a.title.localeCompare(b.title);
				case 'TitleDesc':
					return b.title.localeCompare(a.title);
				case 'DatasetAsc':
					return a.dataset.localeCompare(b.dataset);
				case 'DatasetDesc':
					return b.dataset.localeCompare(a.dataset);
				default:
					return b.year - a.year;
			}
		});

		return result;
	});
</script>

<div class="flex min-w-9/12 justify-center gap-2 p-5">
	<SearchBar bind:value={searchTerm} />
	<FilterSelection options={algoFilters} bind:selected={selectedAlgoFilters} />
	<SortBy bind:value={selectedSortTarget} />
</div>
<div class="flex max-w-10/12 flex-col gap-4 rounded-2xl bg-green-500 p-5 shadow-xl">
	{#each displayedTheses as thesis (thesis.id)}
		<Card {thesis} />
	{/each}
</div>
