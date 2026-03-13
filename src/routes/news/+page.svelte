<script>
	import { base } from '$app/paths';
	import { blogPosts } from '$lib/data/blogPosts.js';
</script>

<svelte:head>
	<title>Blog :: keferastrology.com</title>
	<meta name="description" content="Aktuality – Blog Kefer Astrology" />
</svelte:head>

<main class="news-page">
	<h1 class="news-title">Aktuality</h1>

	<div class="blog-list">
		{#each blogPosts as post}
			<article class="blog-item">
				<div class="blog-item-wrapper">
					<div class="blog-item-media">
						<a href="{base}/news/{post.slug}">
							<img
								src="{base}{post.image}"
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
								<a href="{base}/news/{post.slug}">{post.title}</a>
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
</main>

<style>
	.news-page {
		max-width: 56rem;
		margin: 0 auto;
		padding: 5rem 1.5rem 4rem;
	}

	.news-title {
		text-align: center;
		font-size: 2rem;
		margin-bottom: 2.5rem;
		color: #212529;
	}

	.blog-list {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	.blog-item {
		background: #fff;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
		transition: box-shadow 0.2s;
	}

	.blog-item:hover {
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
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
		background: #f1f3f5;
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
	}

	.blog-item-head {
		margin-bottom: 0.75rem;
	}

	.blog-item-head h2 {
		font-size: 1.25rem;
		margin: 0 0 0.35rem 0;
		line-height: 1.3;
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
	}

	.blog-item-perex p {
		margin: 0;
	}
</style>
