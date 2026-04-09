<script>
	import { base } from '$app/paths';
	import { t } from '$lib/translations';
	import { animateOnScroll } from '$lib/actions/animateOnScroll.js';

	// —— Data (one place, in page order) ——
	const aboutItems = $derived.by(() => [
		{ heading: $t('all.about1'), description: $t('all.about1Text'), image: '/lom01a.jpg' },
		{ heading: $t('all.about2'), description: $t('all.about2Text'), image: '/KFR01_mac.jpg' },
		{ heading: $t('all.about3'), description: $t('all.about3Text'), image: '/KFR01_ntb.jpg' },
	]);
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

	// Carousel state (only state on this page)
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
	<title>Home</title>
	<meta name="description" content="Kefer Astrology presentation" />
</svelte:head>

<!-- 1. Hero -->
<header id="start" class="masthead">
	<div class="masthead-content">
		<h1>{$t('all.heroTitle')}</h1>
		<p class="masthead-subtitle">{$t('all.heroSubtitle')}</p>
	</div>
	<div class="masthead-screenshot">
		<img src="{base}/1.webp" alt="Kefer astrology software" />
	</div>
</header>

<!-- 2. Supported OS -->
<section id="supported-os" class="section-card supported-os animate-on-scroll" use:animateOnScroll>
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

<!-- 3. About (image + text blocks, single .about-widget style) -->
<section id="about" class="section-card animate-on-scroll" use:animateOnScroll>
	<div class="about-blocks">
		{#each aboutItems as item}
			<div class="about-widget">
				<h2 class="about-heading">{item.heading}</h2>
				<div class="about-content">
					<div class="about-image">
						<img src="{base}{item.image}" alt={item.heading} />
					</div>
					<div class="about-desc">
						<p>{item.description}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- 4. Functions (carousel) -->
<section id="function" class="section-card animate-on-scroll" use:animateOnScroll>
	<h2>{$t('all.functions')}</h2>
	<div class="divider"></div>
	<div class="carousel">
		{#if carouselItems.length > 0}
			<img src="{base}{carouselItems[carouselIndex].image}" alt="Carousel item" />
			<div class="carousel-text" style={carouselPosition()}>{carouselItems[carouselIndex].description}</div>
		{/if}
		<div class="carousel-buttons">
			<button type="button" onclick={carouselPrev} aria-label="Previous">&#10094;</button>
			<button type="button" onclick={carouselNext} aria-label="Next">&#10095;</button>
		</div>
	</div>
</section>

<!-- 5. Astrolab -->
<section id="astrolab" class="section-card animate-on-scroll" use:animateOnScroll>
	<h2>{$t('all.astrolab')}</h2>
	<div class="divider"></div>
	<p>{$t('all.astrolabText')}</p>
</section>

<!-- 6. Jan Kefer -->
<section id="kefer" class="section-card animate-on-scroll" use:animateOnScroll>
	<h2>{$t('all.kefer')}</h2>
	<div class="divider"></div>
	<p>{$t('all.keferText')}</p>
</section>

<!-- 7. Open Source -->
<section id="oss" class="section-card animate-on-scroll" use:animateOnScroll>
	<h2>{$t('all.openSource')}</h2>
	<div class="divider"></div>
	<p>{@html openSourceText}</p>
</section>

<!-- 8. Donation -->
<section id="donation" class="section-card animate-on-scroll" use:animateOnScroll>
	<h2>{$t('all.donate')}</h2>
	<div class="donation-content">
		<p>{$t('all.donateText')}</p>
		<div class="donation-columns">
			<div class="donation-col"><h3>Donorbox</h3></div>
			<div class="donation-col"><h3><a href="https://ko-fi.com/neodb" target="_blank" rel="noopener noreferrer">Ko-Fi</a></h3></div>
			<div class="donation-col">
				<h3>PayPal</h3>
				<form action="https://www.paypal.com/donate" method="post" target="_top">
					<input type="hidden" name="hosted_button_id" value="2K7H7J76TGJU4" />
					<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" name="submit" title="PayPal - Donate" alt="Donate with PayPal" />
				</form>
			</div>
		</div>
	</div>
</section>

<!-- 9. Vision (transparent on gradient) -->
<section id="vize" class="animate-on-scroll bg-transparent" use:animateOnScroll>
	<h2>{$t('all.visionTitle')}</h2>
	<div class="divider"></div>
	<p>{$t('all.visionText')}</p>
</section>

<!-- 10. Download (transparent on gradient) -->
<section id="download" class="animate-on-scroll bg-transparent" use:animateOnScroll>
	<h2>{$t('all.download')}</h2>
	<p>{$t('all.downloadText')}</p>
	<a class="btn btn-light" href="https://github.com/kubow/AstroSmrkRust/releases" target="_blank" rel="noopener noreferrer">{$t('all.downloadNow')}</a>
</section>

<!-- 11. Contact -->
<section id="contact" class="section-card animate-on-scroll" use:animateOnScroll>
	<h2>{$t('all.contact')}</h2>
	<p>{$t('all.contactText')}</p>
</section>

<!-- 12. Contact us (form; PHP handler to be added later) -->
<section id="form" class="section-card animate-on-scroll" use:animateOnScroll>
	<h2>{$t('all.contactUs')}</h2>
	<p>{$t('all.contactDescription')}</p>
	<form class="contact-form" method="post" action="#" accept-charset="utf-8">
		<input type="hidden" name="form" value="contact" />
		<label>
			<span class="contact-form-label">{$t('all.formName')}</span>
			<input type="text" name="name" autocomplete="name" />
		</label>
		<label>
			<span class="contact-form-label">{$t('all.formEmail')}</span>
			<input type="email" name="email" autocomplete="email" required />
		</label>
		<label>
			<span class="contact-form-label">{$t('all.formMessage')}</span>
			<textarea name="message" rows="4"></textarea>
		</label>
		<button type="submit" class="contact-form-submit">{$t('all.formSubmit')}</button>
	</form>
</section>

<style>
	/* —— 1. Hero —— */
	.masthead {
		position: relative;
		min-height: 50vh;
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
		margin-top: 1rem;
		border-radius: 8px;
		overflow: hidden;
		max-width: 80%;
	}
	.masthead-screenshot img {
		width: 100%;
		height: auto;
		display: block;
	}

	/* —— 2. Supported OS —— */
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

	/* —— Sections (shared): ~10rem top (from app.css), horizontal and bottom padding —— */
	section {
		padding: 10rem 2rem 4rem 2rem;
	}
	.divider {
		width: 100px;
		height: 3px;
		margin: 1.5rem auto;
	}

	/* —— 3. About blocks (single .about-widget style, no alternation) —— */
	.about-blocks {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4rem;
		max-width: 1200px;
		margin: 0 auto;
	}
	.about-widget {
		width: 100%;
		max-width: 900px;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
		transition: transform 0.2s;
		background: #fff;
		box-shadow: none;
		border-radius: 0;
	}
	.about-widget:hover {
		transform: translateY(-5px);
	}
	.about-heading {
		text-align: center;
		margin-bottom: 1.5rem;
		font-size: 1.8rem;
		color: #212529;
	}
	.about-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		gap: 1.5rem;
	}
	.about-widget .about-image { order: 1; }
	.about-widget .about-desc { order: 2; }
	.about-desc {
		flex: 1;
		padding: 1rem;
		font-size: 1rem;
		line-height: 1.5;
		background: #f8f9fa;
		color: #212529;
		box-shadow: none;
		border-radius: 0;
	}
	.about-image img {
		width: 250px;
		height: auto;
		object-fit: cover;
		border-radius: 0;
	}

	/* —— 4. Carousel (inlined) —— */
	.carousel {
		position: relative;
		max-width: 1200px;
		margin: auto;
		overflow: hidden;
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

	/* —— 8. Donation (inlined) —— */
	.donation-content { margin: 0 auto; }
	.donation-columns {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
	}
	.donation-col { flex: 1; min-width: 180px; }
	.donation-col h3 { font-size: 1.1rem; margin-bottom: 0.5rem; }

	/* —— 12. Contact us form —— */
	.contact-form {
		max-width: 28rem;
		margin: 1.5rem auto 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.contact-form label {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	.contact-form-label {
		font-size: 0.875rem;
		font-weight: 600;
		color: #212529;
	}
	.contact-form input,
	.contact-form textarea {
		padding: 0.5rem 0.6rem;
		border: 1px solid #ced4da;
		border-radius: 4px;
		font: inherit;
		font-size: 1rem;
	}
	.contact-form textarea {
		resize: vertical;
		min-height: 4rem;
	}
	.contact-form-submit {
		padding: 0.5rem 1rem;
		background: #0a4bac;
		color: #fff;
		border: none;
		border-radius: 4px;
		font: inherit;
		font-weight: 600;
		cursor: pointer;
		margin-top: 0.25rem;
	}
	.contact-form-submit:hover {
		background: #083a8c;
	}

	/* —— Buttons —— */
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
