<script>
	import { base } from '$app/paths';
	// Functionality for language selection
	import { t } from '$lib/translations';
	import Alternations from '$lib/Alternations.svelte';
	import Donate from '$lib/Donate.svelte';
    import Carousel from '$lib/Carousel.svelte';
	// Main function items
	$: aboutItems = [
		{ heading: $t('all.about1'), description: $t('all.about1Text'), image: '/lom01a.jpg' },
		{ heading: $t('all.about2'), description: $t('all.about2Text'), image: '/KFR01_mac.jpg' },
		{ heading: $t('all.about3'), description: $t('all.about3Text'), image: '/KFR01_ntb.jpg' },
		{ heading: $t('all.about4'), description: $t('all.about4Text'), image: '/KFR02_tab.jpg' },
	];
	// Carounsel functionality
	$: carouselItems = [
		{ description: $t('all.fCarousel1'), image: '/KFR01_mac.jpg' },
		{ description: $t('all.fCarousel2'), image: '/KFR01_ntb.jpg' },
		{ description: $t('all.fCarousel3'), image: '/KFR01_tab.jpg' },
		{ description: $t('all.fCarousel4'), image: '/KFR02_mac.jpg' },
		{ description: $t('all.fCarousel5'), image: '/KFR02_tab.jpg' },
		{ description: $t('all.fCarousel6'), image: '/KFR02_ntb.jpg' },
		{ description: $t('all.fCarousel7'), image: '/lom01a.jpg' },
		{ description: $t('all.fCarousel8'), image: '/lom02a.jpg' },
	];
	$: openSourceText = $t('all.openSourceText').replace(
		"{github}",
	 	`<a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a>`
	).replace(
		"{rust}",
	 	`<a href="https://www.rust-lang.org/" target="_blank" rel="noopener noreferrer">Rust</a>`
	).replace(
		"{tauri}",
	 	`<a href="https://v2.tauri.app/" target="_blank" rel="noopener noreferrer">Tauri</a>`
	).replace(
		"{python}",
	 	`<a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">Python</a>`
	).replace(
		"{sveltekit}",
		`<a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">Svelte Kit</a>`
	)
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Kefer Astrology presentation" />
</svelte:head>
  
<!-- Masthead : Uvodni banner -->
<header id="start" class="masthead">
	<h1>{$t('all.welcome')}</h1>
	<p>{$t('all.description')}</p>
	<a href="{base}/#about"><button class="btn">{$t('all.about')}</button></a>
</header>
  
<!-- About Section : O Aplikaci -->
<section id="about" class="bg-primary">
	<Alternations {aboutItems} />
</section>
  
<!-- Functions Section: Funkce Kefer -->
<section id="function">
	<h2>{$t('all.functions')}</h2>
	<div class="divider"></div>
	<Carousel {carouselItems} />
</section>
  
<!-- Extra Section: Astrolab -->
<section id="astrolab">
	<h2>{$t('all.astrolab')}</h2>
	<div class="divider"></div>
	<p>{$t('all.astrolabText')}</p>
</section>

<!-- Extra Section: Jan Kefer -->
<section id="kefer">
	<h2>{$t('all.kefer')}</h2>
	<div class="divider"></div>
	<p>{$t('all.keferText')}</p>
</section>

<!-- OSS Section: Open Source -->
<section id="oss">
	<h2>{$t('all.openSource')}</h2>
	<div class="divider"></div>
	<p>{@html openSourceText}</p>
</section>

<!-- Donation Section : Podporte -->
<section id="donation">
	<h2>{$t('all.donate')}</h2>
	<Donate /> <!-- the actual embedded page TO-DO select provider -->
</section>

<!-- Download Section : Stazeni -->
<section id="download" class="bg-primary">
	<h2>{$t('all.download')}</h2>
	<p>{$t('all.downloadText')}</p>
	<a class="btn" href="https://github.com/kubow/AstroSmrkRust/releases">IMAGE_PLACEHOLDER</a>
</section>

<!-- About Section : O Nas -->
<section id="contact">
	<h2>{$t('all.contact')}</h2>
	<p>{$t('all.contactText')}</p>
</section>

<!-- Contact Section : Form -->
<section id="form">
	<h2>{$t('all.contactUs')}</h2>
	<p>{$t('all.contactDescription')}</p>
</section>

<style>
	.masthead {
		height: 100vh;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)),
		url('$lib/images/lom01a.jpg') center/cover no-repeat;
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.masthead h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.masthead .btn {
		padding: 1rem 2rem;
		background: #007bff;
		color: white;
		border: none;
		border-radius: 4px;
		font-size: 1rem;
		text-transform: uppercase;
		cursor: pointer;
	}

	.masthead .btn:hover {
		background: #0056b3;
	}

	section {
		padding: 4rem 2rem;
	}

	section.bg-primary {
		background: #007bff;
		color: white;
	}

	.divider {
		width: 100px;
		height: 3px;
		margin: 1.5rem auto;
		background: white;
	}
</style>
