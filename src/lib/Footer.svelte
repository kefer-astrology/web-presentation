<script>
  import { t } from '$lib/translations';
  import { onMount } from 'svelte';

  const year = new Date().getFullYear();
  let cookieModalOpen = $state(false);

  onMount(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#cookiebar') {
      cookieModalOpen = true;
    }
  });

  function openCookieModal(e) {
    e?.preventDefault();
    cookieModalOpen = true;
  }

  function closeCookieModal() {
    cookieModalOpen = false;
  }

  /** @param {KeyboardEvent} e */
  function onCookieModalKeydown(e) {
    if (e.key === 'Escape') closeCookieModal();
  }
</script>

<footer class="bg-light py-5">
  <div class="container px-4 px-lg-5">
    <small class="text-center text-muted">© {year} {$t('all.footerCopyrightSuffix')}</small>
    <span class="footer-sep"> · </span>
    <button type="button" class="footer-link footer-link-btn" onclick={openCookieModal}>
      {$t('all.footerCookies')}
    </button>
  </div>
</footer>

{#if cookieModalOpen}
  <div
    class="cookie-modal-backdrop"
    role="dialog"
    aria-labelledby="cookie-modal-title"
    aria-modal="true"
    tabindex="-1"
    onclick={(e) => e.target === e.currentTarget && closeCookieModal()}
    onkeydown={onCookieModalKeydown}
  >
    <div class="cookie-modal-panel" id="cookiebar">
      <div class="cookie-modal-header">
        <h2 id="cookie-modal-title">{$t('all.cookieModalTitle')}</h2>
        <button type="button" class="cookie-modal-close" onclick={closeCookieModal} aria-label={$t('all.cookieModalClose')}>
          ×
        </button>
      </div>
      <div class="cookie-modal-body">
        <p>{$t('all.cookieModalNoCookies')}</p>
        <p>{$t('all.cookieModalFormInfo')}</p>
      </div>
    </div>
  </div>
{/if}

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

  .footer-link,
  .footer-link-btn {
    color: inherit;
    text-decoration: none;
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
  }

  .footer-link:hover,
  .footer-link-btn:hover {
    text-decoration: underline;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }

  /* Cookie modal */
  .cookie-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    box-sizing: border-box;
  }

  .cookie-modal-panel {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    max-width: 28rem;
    width: 100%;
    max-height: 90vh;
    overflow: auto;
  }

  .cookie-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.25rem;
    border-bottom: 1px solid #dee2e6;
  }

  .cookie-modal-header h2 {
    margin: 0;
    font-size: 1.25rem;
  }

  .cookie-modal-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    line-height: 1;
    padding: 0.25rem;
    cursor: pointer;
    color: #6c757d;
  }

  .cookie-modal-close:hover {
    color: #212529;
  }

  .cookie-modal-body {
    padding: 1.25rem;
  }

  .cookie-modal-body p {
    margin: 0 0 0.75rem 0;
    font-size: 0.95rem;
    line-height: 1.5;
    color: #495057;
  }
</style>
