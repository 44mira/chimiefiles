<script lang="ts">
	import {
		ChevronDown,
		ChevronUp,
		GraduationCap,
		Database,
		Cpu,
		User,
		Calendar
	} from '@lucide/svelte';

	export interface Thesis {
		id: string;
		name: string;
		year: number;
		degree: string;
		title: string;
		problem: string;
		algorithm: string[];
		dataset: string;
		performance: string;
	}

	interface Props {
		thesis: Thesis;
	}

	let { thesis }: Props = $props();

	// Local state to handle expanding/collapsing the text details
	let isExpanded = $state(false);

	function toggleExpand() {
		isExpanded = !isExpanded;
	}
</script>

<article
	class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
>
	<div class="p-6 sm:p-8">
		<div class="mb-4">
			<h2 class="text-xl leading-tight font-bold text-slate-900 sm:text-2xl">
				{thesis.title}
			</h2>
		</div>

		<div class="mb-6 flex flex-wrap gap-4 text-sm">
			<div
				class="flex items-center gap-1.5 rounded-md bg-slate-100 px-3 py-1.5 font-medium text-slate-700"
			>
				<User size={16} class="text-slate-500" />
				{thesis.name}
			</div>
			<div
				class="flex items-center gap-1.5 rounded-md bg-blue-100 px-3 py-1.5 font-medium text-blue-800"
			>
				<GraduationCap size={16} class="text-blue-600" />
				{thesis.degree}
			</div>
			<div
				class="flex items-center gap-1.5 rounded-md bg-purple-100 px-3 py-1.5 font-medium text-purple-800"
			>
				<Calendar size={16} class="text-purple-600" />
				{thesis.year}
			</div>
		</div>

		<div class="mb-6 flex flex-wrap gap-3">
			<div class="flex max-w-full items-start gap-2">
				<Cpu size={18} class="mt-0.5 flex-shrink-0 text-amber-500" />
				<div>
					<span class="mb-1 block text-xs font-semibold tracking-wider text-slate-500 uppercase"
						>Algorithm(s)</span
					>
					<div class="flex flex-wrap gap-1.5">
						{#each thesis.algorithm as algo}
							<span
								class="inline-block rounded-md bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800"
							>
								{algo}
							</span>
						{/each}
					</div>
				</div>
			</div>

			<div class="mx-2 hidden h-8 w-px bg-slate-200 sm:block"></div>

			<div class="flex max-w-full items-start gap-2">
				<Database size={18} class="mt-0.5 flex-shrink-0 text-emerald-500" />
				<div>
					<span class="mb-1 block text-xs font-semibold tracking-wider text-slate-500 uppercase"
						>Dataset</span
					>
					<span class="text-sm font-medium text-slate-800">{thesis.dataset}</span>
				</div>
			</div>
		</div>

		<div class="relative">
			<div class="space-y-5 leading-relaxed text-slate-600 {!isExpanded ? 'line-clamp-3' : ''}">
				<div>
					<h4 class="mb-1 text-sm font-bold text-slate-900">Problem Statement</h4>
					<p>{thesis.problem}</p>
				</div>
				<div>
					<h4 class="mb-1 text-sm font-bold text-slate-900">Performance & Narrative</h4>
					<p>{thesis.performance}</p>
				</div>
			</div>

			{#if !isExpanded}
				<div
					class="pointer-events-none absolute right-0 bottom-0 left-0 h-16 bg-gradient-to-t from-white to-transparent"
				></div>
			{/if}
		</div>
	</div>

	<button
		onclick={toggleExpand}
		class="flex w-full items-center justify-center gap-2 border-t border-slate-100 bg-slate-50 py-3 text-sm font-medium text-blue-600 transition-colors hover:bg-slate-100 hover:text-blue-700 focus:outline-none"
	>
		{#if isExpanded}
			<ChevronUp size={16} /> Show Less
		{:else}
			<ChevronDown size={16} /> Read Full Abstract
		{/if}
	</button>
</article>
