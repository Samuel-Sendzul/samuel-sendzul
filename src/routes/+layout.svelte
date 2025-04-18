<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<nav class="bg-neutral-2 flex items-center justify-between p-4 md:p-8">
		<a href="/" class="text-2xl font-semibold">samuelsendzul</a>
	</nav>

	{@render children()}

	<footer class="flex flex-row items-center justify-end gap-2 p-4 md:p-8">
		<a href="https://github.com/samuel-sendzul" target="_blank" rel="noopener noreferrer">
			<img src="/images/github.svg" alt="GitHub" class="w-8 md:w-12" />
		</a>
		<a href="https://www.linkedin.com/in/samuel-sendzul/" target="_blank" rel="noopener noreferrer">
			<img src="/images/linkedin.svg" alt="LinkedIn" class="w-8 md:w-12" />
		</a>
	</footer>
</div>
