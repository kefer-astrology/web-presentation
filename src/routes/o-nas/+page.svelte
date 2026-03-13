<script>
	import { base } from '$app/paths';
	import { t } from '$lib/translations';
</script>

<svelte:head>
	<title>O nás :: keferastrology.com</title>
	<meta name="description" content="Jsme čtyři nadšenci, kteří se rozhodli, že společně vyvinou astrologický software s otevřeným kódem." />
</svelte:head>

<main class="o-nas-page">
	<h1>O nás</h1>
	<p class="lead">
		Jsme čtyři nadšenci, kteří se rozhodli, že společně vyvinou astrologický software s otevřeným kódem.
	</p>
	<p>
		<a href="{base}/#donation">{$t('all.donate')}</a> ·
		<a href="{base}/#form">{$t('all.contactUs')}</a>
	</p>
</main>

<style>
	.o-nas-page {
		max-width: 56rem;
		margin: 0 auto;
		padding: 5rem 1.5rem 4rem;
	}

	.o-nas-page h1 {
		text-align: center;
		font-size: 2rem;
		margin-bottom: 1.5rem;
		color: #212529;
	}

	.lead {
		font-size: 1.15rem;
		line-height: 1.6;
		color: #495057;
		margin-bottom: 1.5rem;
	}

	.o-nas-page a {
		color: #0d6efd;
		text-decoration: none;
	}

	.o-nas-page a:hover {
		text-decoration: underline;
	}
</style>
