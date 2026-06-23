<script>
	import { asset, resolve } from '$app/paths';
	import { blogPosts } from '$lib/data/blogPosts.js';
	import { t } from '$lib/translations';
</script>

<svelte:head>
	<title>{$t('all.navBlog')} :: keferastrology.com</title>
	<meta name="description" content={$t('all.newsMetaDescription')} />
</svelte:head>

<main class="page-shell news-page">
	<section class="section-panel glass-panel">
		<h1 class="page-title news-title">{$t('all.newsTitle')}</h1>
		<div class="divider"></div>

		<div class="blog-list">
			{#each blogPosts as post}
				<article class="blog-item subsection-panel">
					<div class="blog-item-wrapper">
						<div class="blog-item-media">
							<a href={resolve('/news/[slug]', { slug: post.slug })}>
								<img
									src={asset(post.image)}
									alt=""
									width="1920"
									height="1080"
									loading="lazy"
								/>
							</a>
						</div>
						<div class="blog-item-content">
							<div class="blog-item-head">
								<h2>
									<a href={resolve('/news/[slug]', { slug: post.slug })}>{post.title}</a>
								</h2>
								<time class="blog-item-date" datetime="{post.date}">{post.date}</time>
							</div>
							<div class="blog-item-perex">
								<p>{post.perex}</p>
							</div>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</section>
</main>

<style>
	.news-title {
		margin-bottom: 0;
	}

	.blog-list {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.blog-item {
		overflow: hidden;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.blog-item:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 26px rgba(0, 0, 0, 0.08);
	}

	.blog-item-wrapper {
		display: grid;
		grid-template-columns: 1fr;
		gap: 0;
	}

	@media (min-width: 640px) {
		.blog-item-wrapper {
			grid-template-columns: 320px 1fr;
		}
	}

	.blog-item-media {
		aspect-ratio: 16 / 10;
		overflow: hidden;
		background: rgba(255, 255, 255, 0.35);
	}

	@media (min-width: 640px) {
		.blog-item-media {
			aspect-ratio: auto;
			min-height: 200px;
		}
	}

	.blog-item-media img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.blog-item-media a {
		display: block;
		height: 100%;
	}

	.blog-item-content {
		padding: 1.25rem 1.5rem;
		text-align: left;
	}

	.blog-item-head {
		margin-bottom: 0.75rem;
	}

	.blog-item-head h2 {
		font-size: 1.25rem;
		margin: 0 0 0.35rem 0;
		line-height: 1.3;
		text-align: left;
	}

	.blog-item-head a {
		color: #212529;
		text-decoration: none;
	}

	.blog-item-head a:hover {
		color: #0d6efd;
		text-decoration: underline;
	}

	.blog-item-date {
		display: block;
		font-size: 0.875rem;
		color: #6c757d;
	}

	.blog-item-perex {
		font-size: 0.95rem;
		line-height: 1.55;
		color: #495057;
		text-align: left;
	}

	.blog-item-perex p {
		margin: 0;
	}
</style>
