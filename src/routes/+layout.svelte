<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';

	let { children } = $props();
</script>

<div class="app">
	<Navbar />
	{@render children()}
	<!-- Cookie bar target for footer #cookiebar link; expand for consent UI later -->
	<section id="cookiebar" class="cookiebar-placeholder" aria-hidden="true"></section>
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	
	.cookiebar-placeholder {
		position: absolute;
		width: 1px;
		height: 1px;
		clip: rect(0, 0, 0, 0);
		overflow: hidden;
	}

</style>
