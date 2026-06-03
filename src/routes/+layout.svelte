<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import FileText from '@lucide/svelte/icons/file-text';

	let { children } = $props();
	let title = 'the chimie files';
	let subtitle = 'Manuscript summaries for topics under the advisory of Ritchie Mae Gamot';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="sticky flex border-b-2 p-5 shadow-lg">
	<!-- LOGO -->
	<div class="flex gap-3">
		<div class="h-fit w-fit self-center rounded-xl bg-blue-600 p-3 shadow-xl">
			<FileText class="size-[4em] text-white" />
		</div>
		<div class="flex flex-col justify-center gap-2">
			<h1 class="w-fit rounded-md text-4xl font-bold text-mist-900">
				{title}
			</h1>
			<h2 class="rounded-md text-xs text-mist-800">{subtitle}</h2>
		</div>
	</div>
</div>

<div class="flex flex-col px-3 py-5">
	{@render children()}
</div>
