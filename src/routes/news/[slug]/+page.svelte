<script>
	import { asset, resolve } from '$app/paths';
	import { t } from '$lib/translations';

	let { data } = $props();
	const post = $derived(data.post);
</script>

<svelte:head>
	<title>{post.title} :: keferastrology.com</title>
	<meta name="description" content={post.perex} />
</svelte:head>

{#if !post}
	<main class="page-shell">
		<section class="section-panel glass-panel">
			<p>{$t('all.newsNotFound')}</p>
		</section>
	</main>
{:else}
	<main class="page-shell post-page">
		<section class="section-panel glass-panel">
			<header class="post-header">
				<div class="post-header-content">
					<h1 class="page-title">{post.title}</h1>
					<div class="divider"></div>
					<time class="post-date" datetime={post.date}>{post.date}</time>
				</div>
				<div class="post-header-image subsection-panel">
					<img src={asset(post.image)} alt="" width="1920" height="1080" />
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
				<a href={resolve('/news')}>← {$t('all.newsBack')}</a>
			</p>
		</section>
	</main>
{/if}

<style>
	.post-header {
		margin-bottom: 2rem;
	}

	.post-header-content {
		margin-bottom: 1rem;
	}

	.post-header h1 {
		margin: 0;
	}

	.post-date {
		display: block;
		font-size: 0.9rem;
		color: #6c757d;
	}

	.post-header-image {
		overflow: hidden;
		background: rgba(255, 255, 255, 0.35);
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
		text-align: left;
	}

	.post-body p {
		margin: 0 0 1rem 0;
	}

	.post-back {
		margin-top: 2.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid rgba(33, 37, 41, 0.12);
	}

	.post-back a {
		color: #0d6efd;
		text-decoration: none;
	}

	.post-back a:hover {
		text-decoration: underline;
	}
</style>
