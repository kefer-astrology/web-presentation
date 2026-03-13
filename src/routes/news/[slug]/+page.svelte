<script>
	import { base } from '$app/paths';

	let { data } = $props();
	const post = $derived(data.post);
</script>

<svelte:head>
	<title>{post.title} :: keferastrology.com</title>
	<meta name="description" content={post.perex} />
</svelte:head>

{#if !post}
	<p>Článek nenalezen.</p>
{:else}
	<main class="post-page">
		<header class="post-header">
			<div class="post-header-content">
				<h1>{post.title}</h1>
				<time class="post-date" datetime={post.date}>{post.date}</time>
			</div>
			<div class="post-header-image">
				<img src="{base}{post.image}" alt="" width="1920" height="1080" />
			</div>
		</header>

		<div class="post-body">
			{#if post.body}
				{#each post.body.split(/\n\n+/) as paragraph}
					{#if paragraph.trim()}
						<p>{paragraph.trim()}</p>
					{/if}
				{/each}
			{:else}
				<p>{post.perex}</p>
			{/if}
		</div>

		<p class="post-back">
			<a href="{base}/news">← Zpět na Aktuality</a>
		</p>
	</main>
{/if}

<style>
	.post-page {
		max-width: 56rem;
		margin: 0 auto;
		padding: 5rem 1.5rem 4rem;
	}

	.post-header {
		margin-bottom: 2rem;
	}

	.post-header-content {
		margin-bottom: 1rem;
	}

	.post-header h1 {
		font-size: 1.75rem;
		margin: 0 0 0.5rem 0;
		color: #212529;
	}

	.post-date {
		display: block;
		font-size: 0.9rem;
		color: #6c757d;
	}

	.post-header-image {
		border-radius: 8px;
		overflow: hidden;
		background: #f1f3f5;
	}

	.post-header-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	.post-body {
		font-size: 1rem;
		line-height: 1.7;
		color: #212529;
	}

	.post-body p {
		margin: 0 0 1rem 0;
	}

	.post-back {
		margin-top: 2.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid #dee2e6;
	}

	.post-back a {
		color: #0d6efd;
		text-decoration: none;
	}

	.post-back a:hover {
		text-decoration: underline;
	}
</style>
