<script>
	import '../app.css';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import { locale, loadTranslations, defaultLocale } from '$lib/translations';

	let { children, data } = $props();

	onMount(async () => {
		if (!browser) return;
		const storedLocale = localStorage.getItem('locale') ?? data?.locale ?? defaultLocale;
		if (storedLocale !== ($locale ?? defaultLocale)) {
			await loadTranslations(storedLocale, window.location.pathname);
			locale.set(storedLocale);
			locale.forceSet(storedLocale);
		}
	});
</script>

<div class="app">
	<Navbar />
	{@render children()}
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

</style>
