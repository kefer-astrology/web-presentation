<script>
	import { base } from '$app/paths';
	import { t } from '$lib/translations';
	import { animateOnScroll } from '$lib/actions/animateOnScroll.js';
	import Alternations from '$lib/Alternations.svelte';
	import Donate from '$lib/Donate.svelte';
	import Carousel from '$lib/Carousel.svelte';

	// About items: dark mode, DB, štítky (Podporované OS is its own section above)
	const aboutItems = $derived.by(() => [
		{ heading: $t('all.about1'), description: $t('all.about1Text'), image: '/lom01a.jpg' },
		{ heading: $t('all.about2'), description: $t('all.about2Text'), image: '/KFR01_mac.jpg' },
		{ heading: $t('all.about3'), description: $t('all.about3Text'), image: '/KFR01_ntb.jpg' },
	]);
	// Carousel functionality
	const carouselItems = $derived.by(() => [
		{ description: $t('all.fCarousel1'), image: '/KFR01_mac.jpg' },
		{ description: $t('all.fCarousel2'), image: '/KFR01_ntb.jpg' },
		{ description: $t('all.fCarousel3'), image: '/KFR01_tab.jpg' },
		{ description: $t('all.fCarousel4'), image: '/KFR02_mac.jpg' },
		{ description: $t('all.fCarousel5'), image: '/KFR02_tab.jpg' },
		{ description: $t('all.fCarousel6'), image: '/KFR02_ntb.jpg' },
		{ description: $t('all.fCarousel7'), image: '/lom01a.jpg' },
		{ description: $t('all.fCarousel8'), image: '/lom02a.jpg' },
	]);
	const openSourceText = $derived.by(() =>
		$t('all.openSourceText')
			.replace("{github}", `<a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a>`)
			.replace("{rust}", `<a href="https://www.rust-lang.org/" target="_blank" rel="noopener noreferrer">Rust</a>`)
			.replace("{tauri}", `<a href="https://v2.tauri.app/" target="_blank" rel="noopener noreferrer">Tauri</a>`)
			.replace("{python}", `<a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">Python</a>`)
			.replace("{sveltekit}", `<a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">Svelte Kit</a>`)
	);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Kefer Astrology presentation" />
</svelte:head>
  
<!-- Masthead on gradient -->
<header id="start" class="masthead">
	<div class="masthead-content">
		<h1>{$t('all.heroTitle')}</h1>
		<p class="masthead-subtitle">{$t('all.heroSubtitle')}</p>
	</div>
	<div class="masthead-screenshot">
		<img src="{base}/1.webp" alt="Kefer astrology software" />
	</div>
</header>

<!-- Sections: white widgets with shadow on gradient -->
<section id="supported-os" class="supported-os animate-on-scroll" use:animateOnScroll>
	<div class="supported-os-icons">
		<span class="os-icon" title="Windows">Windows</span>
		<span class="os-icon" title="iOS">iOS</span>
		<span class="os-icon" title="Mac">Mac</span>
		<span class="os-icon" title="Android">Android</span>
	</div>
	<div class="supported-os-text">
		<h2>{$t('all.about4')}</h2>
		<p>{$t('all.about4Text')}</p>
	</div>
</section>

<!-- About Section : O Aplikaci (order: dark mode, DB, štítky; OS already above) -->
<section id="about" class="animate-on-scroll" use:animateOnScroll>
	<Alternations {aboutItems} />
</section>

<!-- Functions Section: Funkce Kefer -->
<section id="function" class="animate-on-scroll" use:animateOnScroll>
	<h2>{$t('all.functions')}</h2>
	<div class="divider"></div>
	<Carousel {carouselItems} />
</section>

<!-- Extra Section: Astrolab -->
<section id="astrolab" class="animate-on-scroll" use:animateOnScroll>
	<h2>{$t('all.astrolab')}</h2>
	<div class="divider"></div>
	<p>{$t('all.astrolabText')}</p>
</section>

<!-- Extra Section: Jan Kefer -->
<section id="kefer" class="animate-on-scroll" use:animateOnScroll>
	<h2>{$t('all.kefer')}</h2>
	<div class="divider"></div>
	<p>{$t('all.keferText')}</p>
</section>

<!-- OSS Section: Open Source -->
<section id="oss" class="animate-on-scroll" use:animateOnScroll>
	<h2>{$t('all.openSource')}</h2>
	<div class="divider"></div>
	<p>{@html openSourceText}</p>
</section>

<!-- Donation Section : Podpořte nás -->
<section id="donation" class="animate-on-scroll" use:animateOnScroll>
	<h2>{$t('all.donate')}</h2>
	<Donate />
</section>

<!-- Naše vize — transparent so gradient shows -->
<section id="vize" class="animate-on-scroll bg-transparent" use:animateOnScroll>
	<h2>{$t('all.visionTitle')}</h2>
	<div class="divider"></div>
	<p>{$t('all.visionText')}</p>
</section>

<!-- Download Section : Software ve vývoji — transparent so gradient shows -->
<section id="download" class="animate-on-scroll bg-transparent" use:animateOnScroll>
	<h2>{$t('all.download')}</h2>
	<p>{$t('all.downloadText')}</p>
	<a class="btn btn-light" href="https://github.com/kubow/AstroSmrkRust/releases">{$t('all.downloadNow')}</a>
</section>

<!-- About Section : O nás -->
<section id="contact" class="animate-on-scroll" use:animateOnScroll>
	<h2>{$t('all.contact')}</h2>
	<p>{$t('all.contactText')}</p>
</section>

<!-- Contact Section : Kontaktujte nás -->
<section id="form" class="animate-on-scroll" use:animateOnScroll>
	<h2>{$t('all.contactUs')}</h2>
	<p>{$t('all.contactDescription')}</p>
</section>

<style>
	/* Hero on gradient (#0a4bac → #c96be6); no solid bg so gradient shows; font must be Raleway (sans-serif) */
	.masthead {
		position: relative;
		min-height: 50vh;
		background: none;
		font-family: 'Raleway', -apple-system, BlinkMacSystemFont, sans-serif;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		padding: 5rem 1.5rem 2rem;
		overflow: hidden;
	}

	.masthead-content {
		position: relative;
		z-index: 1;
		max-width: 40rem;
		margin-right: auto;
		text-align: left;
		padding: 1rem 0;
		font-family: inherit;
	}

	.masthead-content h1,
	.masthead-content .masthead-subtitle {
		color: #fff;
		font-family: 'Raleway', sans-serif;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
	}

	.masthead h1 {
		font-size: clamp(1.75rem, 4vw, 2.5rem);
		font-weight: 700;
		margin-bottom: 0.5rem;
		line-height: 1.2;
	}

	.masthead-subtitle {
		font-size: clamp(1rem, 2.5vw, 1.35rem);
		opacity: 0.98;
		margin-bottom: 0;
	}

	.masthead-screenshot {
		position: relative;
		z-index: 1;
		margin-top: 2rem;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
		max-width: 100%;
	}

	.masthead-screenshot img {
		width: 100%;
		height: auto;
		display: block;
	}

	/* Podporované OS — matches HTML copy block */
	.supported-os {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		padding: 3rem 2rem;
		background: #fff;
	}

	.supported-os-icons {
		display: flex;
		gap: 1.5rem;
		align-items: center;
		font-size: 0.9rem;
		font-weight: 600;
		color: #495057;
	}

	.supported-os-text h2 {
		font-size: 1.25rem;
		margin-bottom: 0.25rem;
	}

	.supported-os-text p {
		margin: 0;
		color: #6c757d;
		font-size: 0.95rem;
	}

	section {
		padding: 4rem 2rem;
	}

	.divider {
		width: 100px;
		height: 3px;
		margin: 1.5rem auto;
	}

	.btn-light {
		background: rgba(255, 255, 255, 0.95);
		color: #0a4bac;
		border: 2px solid #fff;
	}

	.btn-light:hover {
		background: #fff;
		color: #0a4bac;
	}
</style>
