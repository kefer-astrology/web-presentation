<script>
	import { t } from '$lib/translations';
</script>

<svelte:head>
	<title>{$t('all.navAboutUs')} :: keferastrology.com</title>
	<meta name="description" content={$t('all.aboutUsMeta')} />
</svelte:head>

<main class="page-shell about-us-page">
	<section class="section-panel glass-panel about-us-intro">
		<h1 class="page-title">{$t('all.navAboutUs')}</h1>
		<div class="divider"></div>
		<p class="lead">{$t('all.aboutUsLead')}</p>
	</section>

	<section id="vize" class="section-panel glass-panel">
		<h2 class="section-title">{$t('all.visionTitle')}</h2>
		<div class="divider"></div>
		<p>{$t('all.visionText')}</p>
	</section>

	<section id="donation" class="section-panel glass-panel">
		<article class="about-widget subsection-panel">
			<h2 class="section-title">{$t('all.donate')}</h2>
			<div class="divider"></div>
			<div class="about-desc">
				<p>{$t('all.donateText')}</p>
			</div>
			<div class="donation-columns">
				<div class="donation-col subsection-panel"><h3>Donorbox</h3></div>
				<div class="donation-col subsection-panel"><h3><a href="https://ko-fi.com/neodb" target="_blank" rel="noopener noreferrer">Ko-Fi</a></h3></div>
				<div class="donation-col subsection-panel">
					<h3>PayPal</h3>
					<form action="https://www.paypal.com/donate" method="post" target="_top">
						<input type="hidden" name="hosted_button_id" value="2K7H7J76TGJU4" />
						<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" name="submit" title="PayPal - Donate" alt="Donate with PayPal" />
					</form>
				</div>
			</div>
		</article>
	</section>

	<section id="form" class="section-panel glass-panel">
		<article class="about-widget subsection-panel">
			<h2 class="section-title">{$t('all.contactUs')}</h2>
			<div class="divider"></div>
			<div class="about-desc">
				<p>{$t('all.contactDescription')}</p>
			</div>
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
		</article>
	</section>
</main>

<style>
	.about-us-page {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.about-us-intro h1 {
		margin-bottom: 1.5rem;
	}

	.lead {
		font-size: 1.15rem;
		line-height: 1.6;
		color: #495057;
		margin: 0;
	}

	.about-widget {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		padding: 1.5rem;
	}

	.about-desc {
		width: 100%;
		text-align: left;
	}

	.about-desc p {
		margin: 0;
	}

	.donation-columns {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.donation-col {
		flex: 1;
		min-width: 180px;
		padding: 1rem;
	}

	.donation-col h3 {
		font-size: 1.1rem;
		margin: 0 0 0.5rem;
	}

	.contact-form {
		max-width: 28rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.contact-form label {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		text-align: left;
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
		width: fit-content;
	}

	.contact-form-submit:hover {
		background: #083a8c;
	}
</style>
