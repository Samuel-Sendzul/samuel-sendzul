<script>
	import { page } from '$app/state';
</script>

<div class="flex flex-grow flex-col items-center justify-center text-center">
	{#if page.status === 404}
		<h1 class="mb-4 text-6xl font-semibold text-red-500">404</h1>
		<p class="mb-4 text-lg text-gray-600">Oops! Looks like you're lost.</p>

		<p class="mt-4 text-gray-600">Let's get you back <a href="/" class="text-blue-500">home</a>.</p>
	{:else}
		<h1 class="mb-4 text-4xl font-bold text-neutral-700">Error {page.status}</h1>
		<p class="mb-4 text-lg text-gray-600">Sorry, something went wrong.</p>
		{#if page.error?.message}
			<pre class="mb-4 rounded bg-gray-100 p-2 text-sm whitespace-pre-wrap text-gray-700">{page
					.error.message}</pre>
		{/if}
		<p class="mt-4 text-gray-600">Return to <a href="/" class="text-blue-500">homepage</a>.</p>
	{/if}
</div>
