<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<nav class="bg-neutral-2 flex items-center justify-between p-4 md:p-8">
	<a href="/" class="text-2xl font-semibold">samuelsendzul</a>
</nav>

{@render children()}
