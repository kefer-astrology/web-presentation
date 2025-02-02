<script>
	//import { base } from '$app/paths';
	// Functionality for language selection
	import { t } from '$lib/translations';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Kefer Astrology news" />
</svelte:head>

<h2>{$t('news.heading')}</h2>
<!-- News Section : Novinky -->
<section id="news">
	<h2>{$t('news.1head')}</h2>
	<p>{$t('news.1body')}</p>
</section>


<style>
	section {
		padding: 4rem 2rem;
	}

</style>
