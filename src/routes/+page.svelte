<script>
	// Functionality for language selection
	import { t } from '$lib/translations';
	import Donate from '$lib/Donate.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Kefer Astrology presentation" />
</svelte:head>
  
<!-- Masthead : Uvodni banner -->
<header id="start" class="masthead">
	<h1>{$t('all.welcome')}</h1>
	<p>{$t('all.description')}</p>
	<a href="#about"><button class="btn">{$t('learnMore')}</button></a>
</header>
  
<!-- About Section : O Aplikaci -->
<section id="about" class="bg-primary">
	<!-- Altering contents -->
	<h2>{$t('all.about1')}</h2>
	<p>{$t('all.about1Text')}</p>
	<div class="divider"></div>
	<h2>{$t('all.about2')}</h2>
	<p>{$t('all.about2Text')}</p>
	<div class="divider"></div>
	<h2>{$t('all.about3')}</h2>
	<p>{$t('all.about3Text')}</p>
	<div class="divider"></div>
	<h2>{$t('all.about4')}</h2>
	<p>{$t('all.about4Text')}</p>
	<div class="divider"></div>
</section>
  
<!-- Functions Section: Funkce Kefer -->
<section id="function">
	<h2>{$t('all.functions')}</h2>
	<div class="divider"></div>
	<p>{$t('all.fCarousel1')}</p>
	<p>{$t('all.fCarousel2')}</p>
	<p>{$t('all.fCarousel3')}</p>
	<p>{$t('all.fCarousel4')}</p>
	<p>{$t('all.fCarousel5')}</p>
	<p>{$t('all.fCarousel6')}</p>
	<p>{$t('all.fCarousel7')}</p>
	<p>{$t('all.fCarousel8')}</p>
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
	<p>{$t('all.openSourceText')}</p>
</section>

<!-- Donation Section : Podporte -->
<section id="donation">
	<h2>{$t('all.donate')}</h2>
	<p>{$t('all.donateText')}</p>
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
		url('$lib/images/screen_dark_small.jpeg') center/cover no-repeat;
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
