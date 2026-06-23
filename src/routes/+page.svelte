<script>
	import { asset, resolve } from '$app/paths';
	import { t } from '$lib/translations';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Kefer Astrology presentation" />
</svelte:head>

<main class="home-page">
	<header id="start" class="hero">
		<img class="hero-image" src={asset('/1.webp')} alt="Kefer astrology software" />
		<div class="hero-overlay">
			<div class="hero-copy glass-panel">
				<h1>{$t('all.heroTitle')}</h1>
				<p class="hero-subtitle">{$t('all.heroSubtitle')}</p>
			</div>
		</div>
	</header>

	<section class="page-shell">
		<div class="section-panel glass-panel quick-nav">
			<div class="quick-grid">
				<a class="quick-card subsection-panel" href={resolve('/o-aplikaci')}>
					<h2>{$t('all.navAbout')}</h2>
					<p>{$t('all.functions')}</p>
				</a>
				<a class="quick-card subsection-panel" href={resolve('/news')}>
					<h2>{$t('all.navBlog')}</h2>
					<p>{$t('all.homeBlogTeaser')}</p>
				</a>
				<a class="quick-card subsection-panel" href={resolve('/o-nas')}>
					<h2>{$t('all.navAboutUs')}</h2>
					<p>{$t('all.homeAboutUsTeaser')}</p>
				</a>
			</div>
		</div>
	</section>
</main>

<style>
	.home-page {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.hero {
		position: relative;
		width: 100%;
		min-height: min(92vh, 64rem);
		margin-bottom: 2rem;
		overflow: hidden;
	}

	.hero::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(90deg, rgba(5, 20, 48, 0.72) 0%, rgba(5, 20, 48, 0.38) 42%, rgba(5, 20, 48, 0.18) 100%);
		pointer-events: none;
	}

	.hero-image {
		display: block;
		width: 100%;
		height: min(92vh, 64rem);
		object-fit: cover;
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		z-index: 1;
		display: flex;
		align-items: center;
		padding: 6.5rem 1.5rem 2rem;
		box-sizing: border-box;
	}

	.hero-copy {
		text-align: left;
		padding: 1.5rem;
		width: min(100%, 42rem);
		background: rgba(255, 255, 255, 0.18);
		border: 1px solid rgba(255, 255, 255, 0.28);
	}

	.hero h1 {
		text-align: left;
		font-size: clamp(2.5rem, 6vw, 5rem);
		line-height: 1.05;
		margin-bottom: 1rem;
		color: #fff;
	}

	.hero-subtitle {
		font-size: clamp(1.15rem, 2vw, 1.75rem);
		margin: 0;
		color: rgba(255, 255, 255, 0.95);
	}

	.quick-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	.quick-card {
		display: block;
		padding: 1.5rem;
		text-decoration: none;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.quick-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 26px rgba(0, 0, 0, 0.08);
		text-decoration: none;
	}

	.quick-card h2 {
		font-size: 1.4rem;
		text-align: left;
		margin-bottom: 0.5rem;
	}

	.quick-card p {
		margin: 0;
		color: #495057;
		text-align: left;
	}

	@media (min-width: 760px) {
		.hero-overlay {
			padding-left: 3rem;
			padding-right: 3rem;
		}

		.hero-copy {
			padding: 2rem;
		}

		.quick-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	@media (max-width: 640px) {
		.hero {
			min-height: 78vh;
		}

		.hero-image {
			height: 78vh;
		}

		.hero-overlay {
			align-items: flex-end;
			padding-top: 5.5rem;
		}
	}
</style>
