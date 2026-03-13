<script>
  import { t } from '$lib/translations';
</script>

<footer class="bg-light py-5">
    <div class="container px-4 px-lg-5">
        <small class="text-center text-muted">{$t('all.footerCopyright')}</small>
        <span class="footer-sep"> · </span>
        <a href="#cookiebar" class="footer-link">{$t('all.footerCookies')}</a>
    </div>
</footer>

<style>
    footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	.footer-sep {
		opacity: 0.7;
	}

	.footer-link {
		color: inherit;
		text-decoration: none;
	}

	.footer-link:hover {
		text-decoration: underline;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>