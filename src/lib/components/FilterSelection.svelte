<script lang="ts">
	import { ChevronDown, Check } from '@lucide/svelte';

	interface Props {
		options: string[];
		selected: string[];
		placeholder?: string;
	}

	// Default 'selected' to an empty array to prevent undefined errors
	let {
		options,
		selected = $bindable([]),
		placeholder = 'Filter by algorithms...'
	}: Props = $props();

	let isOpen = $state(false);
	let dropdownNode = $state<HTMLElement | null>(null);

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	// Changed to toggle logic instead of replacing the string
	function toggleOption(option: string) {
		if (selected.includes(option)) {
			selected = selected.filter((item) => item !== option);
		} else {
			selected = [...selected, option];
		}
		// Removed `isOpen = false` so the user can select multiple items without the menu closing
	}

	// Click outside handler to close the dropdown automatically
	function handleDocumentClick(event: MouseEvent) {
		if (isOpen && dropdownNode && !dropdownNode.contains(event.target as Node)) {
			isOpen = false;
		}
	}
</script>

<svelte:window onclick={handleDocumentClick} />

<div bind:this={dropdownNode} class="relative w-full max-w-xs text-sm">
	<button
		type="button"
		onclick={toggleDropdown}
		class="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-left text-slate-900 shadow-sm transition-all hover:bg-slate-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
		aria-haspopup="listbox"
		aria-expanded={isOpen}
	>
		<span class={selected.length > 0 ? 'text-slate-900' : 'text-slate-400'}>
			{selected.length === 0 ? placeholder : `${selected.length} selected`}
		</span>
		<ChevronDown
			class="h-4 w-4 text-slate-400 transition-transform duration-200 {isOpen ? 'rotate-180' : ''}"
		/>
	</button>

	{#if isOpen}
		<ul
			class="absolute z-50 mt-1.5 max-h-60 w-full overflow-auto rounded-xl border border-slate-200 bg-white p-1 shadow-lg focus:outline-none"
			role="listbox"
		>
			{#each options as option}
				{@const isSelected = selected.includes(option)}
				<li>
					<button
						type="button"
						onclick={() => toggleOption(option)}
						class="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900 {isSelected
							? 'bg-blue-50/60 font-medium text-blue-600 hover:bg-blue-50'
							: ''}"
						role="option"
						aria-selected={isSelected}
					>
						<span>{option}</span>
						{#if isSelected}
							<Check class="h-4 w-4 text-blue-600" />
						{/if}
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>
