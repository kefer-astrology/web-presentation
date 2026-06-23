<script>
	import { asset } from '$app/paths';
	import { t } from '$lib/translations';
	import { animateOnScroll } from '$lib/actions/animateOnScroll.js';

	const aboutItems = $derived.by(() => [
		{ id: 'about1', heading: $t('all.about1'), description: $t('all.about1Text'), image: '/lom01a.jpg' },
		{ id: 'about2', heading: $t('all.about2'), description: $t('all.about2Text'), image: '/KFR01_mac.jpg' },
		{ id: 'about3', heading: $t('all.about3'), description: $t('all.about3Text'), image: '/KFR01_ntb.jpg' }
	]);
	const carouselItems = $derived.by(() => [
		{ description: $t('all.fCarousel1'), image: '/KFR01_mac.jpg' },
		{ description: $t('all.fCarousel2'), image: '/KFR01_ntb.jpg' },
		{ description: $t('all.fCarousel3'), image: '/KFR01_tab.jpg' },
		{ description: $t('all.fCarousel4'), image: '/KFR02_mac.jpg' },
		{ description: $t('all.fCarousel5'), image: '/KFR02_tab.jpg' },
		{ description: $t('all.fCarousel6'), image: '/KFR02_ntb.jpg' },
		{ description: $t('all.fCarousel7'), image: '/lom01a.jpg' },
		{ description: $t('all.fCarousel8'), image: '/lom02a.jpg' }
	]);
	const openSourceText = $derived.by(() =>
		$t('all.openSourceText')
			.replace('{github}', `<a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a>`)
			.replace('{rust}', `<a href="https://www.rust-lang.org/" target="_blank" rel="noopener noreferrer">Rust</a>`)
			.replace('{tauri}', `<a href="https://v2.tauri.app/" target="_blank" rel="noopener noreferrer">Tauri</a>`)
			.replace('{python}', `<a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">Python</a>`)
			.replace('{sveltekit}', `<a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">Svelte Kit</a>`)
	);

	let carouselIndex = $state(0);
	function carouselNext() {
		carouselIndex = (carouselIndex + 1) % carouselItems.length;
	}
	function carouselPrev() {
		carouselIndex = (carouselIndex - 1 + carouselItems.length) % carouselItems.length;
	}
	function carouselPosition() {
		const positions = ['top: 10%', 'top: 50%', 'top: 80%', 'left: 10%', 'left: 50%', 'left: 80%'];
		return `${positions[Math.floor(Math.random() * positions.length)]};`;
	}
</script>

<svelte:head>
	<title>{$t('all.navAbout')} :: keferastrology.com</title>
	<meta name="description" content={$t('all.aboutAppMeta')} />
</svelte:head>

<main class="page-shell about-app-page">
	<section class="section-panel glass-panel page-intro">
		<h1 class="page-title">{$t('all.navAbout')}</h1>
		<div class="divider"></div>
		<p>{$t('all.heroSubtitle')}</p>
	</section>

	<section id="supported-os" class="section-panel glass-panel supported-os animate-on-scroll" use:animateOnScroll>
		<div class="supported-os-icons subsection-panel">
			<span class="os-icon" title="Windows">Windows</span>
			<span class="os-icon" title="iOS">iOS</span>
			<span class="os-icon" title="Mac">Mac</span>
			<span class="os-icon" title="Android">Android</span>
		</div>
		<div class="supported-os-text">
			<h2 class="section-title">{$t('all.about4')}</h2>
			<div class="divider"></div>
			<p>{$t('all.about4Text')}</p>
		</div>
	</section>

		{#each aboutItems as item}
			<section id={item.id} class="section-panel glass-panel about-feature animate-on-scroll" use:animateOnScroll>
				<h2 class="section-title">{item.heading}</h2>
				<div class="divider"></div>
				<div class="about-content">
					<div class="about-image">
						<img src={asset(item.image)} alt={item.heading} />
					</div>
					<div class="about-desc subsection-panel">
						<p>{item.description}</p>
					</div>
				</div>
			</section>
		{/each}

	<section id="function" class="section-panel glass-panel animate-on-scroll" use:animateOnScroll>
		<h2 class="section-title">{$t('all.functions')}</h2>
		<div class="divider"></div>
		<div class="carousel subsection-panel">
			{#if carouselItems.length > 0}
				<img src={asset(carouselItems[carouselIndex].image)} alt="Carousel item" />
				<div class="carousel-text" style={carouselPosition()}>{carouselItems[carouselIndex].description}</div>
			{/if}
			<div class="carousel-buttons">
				<button type="button" onclick={carouselPrev} aria-label="Previous">&#10094;</button>
				<button type="button" onclick={carouselNext} aria-label="Next">&#10095;</button>
			</div>
		</div>
	</section>

	<section id="astrolab" class="section-panel glass-panel animate-on-scroll" use:animateOnScroll>
		<h2 class="section-title">{$t('all.astrolab')}</h2>
		<div class="divider"></div>
		<p>{$t('all.astrolabText')}</p>
	</section>

	<section id="kefer" class="section-panel glass-panel animate-on-scroll" use:animateOnScroll>
		<h2 class="section-title">{$t('all.kefer')}</h2>
		<div class="divider"></div>
		<p>{$t('all.keferText')}</p>
	</section>

	<section id="oss" class="section-panel glass-panel animate-on-scroll" use:animateOnScroll>
		<h2 class="section-title">{$t('all.openSource')}</h2>
		<div class="divider"></div>
		<p>{@html openSourceText}</p>
	</section>

	<section id="download" class="section-panel glass-panel animate-on-scroll" use:animateOnScroll>
		<h2 class="section-title">{$t('all.download')}</h2>
		<div class="divider"></div>
		<p>{$t('all.downloadText')}</p>
		<a class="btn btn-light" href="https://github.com/kefer-astrology/tauri-application" target="_blank" rel="noopener noreferrer">{$t('all.downloadNow')}</a>
	</section>
</main>

<style>
	.about-app-page {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.page-intro p {
		margin: 1rem 0 0;
	}

	.section-panel {
		text-align: left;
	}

	.supported-os {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 2rem;
	}

	.supported-os-icons {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
		align-items: center;
		font-size: 0.9rem;
		font-weight: 600;
		color: #495057;
		padding: 1rem 1.25rem;
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

	.about-feature {
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.about-feature:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 26px rgba(0, 0, 0, 0.08);
	}

	.about-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		gap: 1.5rem;
	}

	.about-desc {
		flex: 1;
		padding: 1rem;
		font-size: 1rem;
		line-height: 1.5;
		color: #212529;
		text-align: left;
	}

	.about-image img {
		width: 250px;
		height: auto;
		object-fit: cover;
		border-radius: 0.875rem;
	}

	.carousel {
		position: relative;
		max-width: 1200px;
		margin: auto;
		overflow: hidden;
		padding: 0;
	}

	.carousel img {
		width: 100%;
		display: block;
	}

	.carousel-text {
		position: absolute;
		background: rgba(0, 0, 0, 0.6);
		color: white;
		padding: 10px;
		border-radius: 5px;
		max-width: 400px;
	}

	.carousel-buttons {
		position: absolute;
		top: 50%;
		width: 100%;
		display: flex;
		justify-content: space-between;
		transform: translateY(-50%);
	}

	.carousel-buttons button {
		background: rgba(0, 0, 0, 0.5);
		color: white;
		border: none;
		padding: 10px;
		cursor: pointer;
	}

	.btn-light {
		display: inline-block;
		margin-top: 1rem;
		background: rgba(255, 255, 255, 0.95);
		color: #0a4bac;
		border: 2px solid #fff;
		padding: 0.6rem 1rem;
		border-radius: 0.5rem;
	}

	.btn-light:hover {
		background: #fff;
		color: #0a4bac;
	}

	@media (max-width: 720px) {
		.supported-os {
			justify-content: flex-start;
		}

		.about-content {
			flex-direction: column;
			align-items: flex-start;
		}

		.about-image img {
			width: min(100%, 18rem);
		}
	}
</style>
