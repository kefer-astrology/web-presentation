<script>
  import { base } from '$app/paths';
  import { t, locales, locale, defaultLocale } from '$lib/translations';

  let aboutAppOpen = $state(false);
  let aboutUsOpen = $state(false);
  let langOpen = $state(false);
  let mobileMenuOpen = $state(false);

  const HOVER_CLOSE_DELAY_MS = 220;
  /** @type {ReturnType<typeof setTimeout> | null} */
  let aboutAppCloseId = null;
  /** @type {ReturnType<typeof setTimeout> | null} */
  let aboutUsCloseId = null;
  /** @type {ReturnType<typeof setTimeout> | null} */
  let langCloseId = null;

  function enterAboutApp() {
    if (aboutAppCloseId) { clearTimeout(aboutAppCloseId); aboutAppCloseId = null; }
    aboutAppOpen = true;
  }
  function leaveAboutApp() {
    aboutAppCloseId = setTimeout(() => { aboutAppOpen = false; aboutAppCloseId = null; }, HOVER_CLOSE_DELAY_MS);
  }
  function enterAboutUs() {
    if (aboutUsCloseId) { clearTimeout(aboutUsCloseId); aboutUsCloseId = null; }
    aboutUsOpen = true;
  }
  function leaveAboutUs() {
    aboutUsCloseId = setTimeout(() => { aboutUsOpen = false; aboutUsCloseId = null; }, HOVER_CLOSE_DELAY_MS);
  }
  function enterLang() {
    if (langCloseId) { clearTimeout(langCloseId); langCloseId = null; }
    langOpen = true;
  }
  function leaveLang() {
    langCloseId = setTimeout(() => { langOpen = false; langCloseId = null; }, HOVER_CLOSE_DELAY_MS);
  }

  /** @param {Event} e */
  function scrollIntoView(e) {
    const href = /** @type {HTMLAnchorElement} */ (e.currentTarget)?.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    e.preventDefault();
    mobileMenuOpen = false;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }

  /** @param {KeyboardEvent} e */
  function handleMobileMenuKeydown(e) {
    if (e.key === 'Escape') {
      mobileMenuOpen = false;
    } else if ((e.key === 'Enter' || e.key === ' ') && e.target === e.currentTarget) {
      e.preventDefault();
      mobileMenuOpen = false;
    }
  }

  /** @param {string} lang */
  function toggleLanguage(lang) {
    locale.set(lang);
    locale.forceSet(lang);
    langOpen = false;
  }

  /** @param {KeyboardEvent} event @param {string} lang */
  function handleKeyPress(event, lang) {
    if (event.key === 'Enter' || event.key === ' ') toggleLanguage(lang);
  }
</script>

<nav class="navbar" id="mainNav">
  <a class="logo" href="{base}/#start" aria-label="Kefer Astrology – domů">
    <img src="{base}/Kefer_logo.webp" alt="Kefer Astrology" class="logo-img" width="180" height="56" />
  </a>

  <button
    type="button"
    class="burger-btn"
    aria-label="Menu"
    aria-expanded={mobileMenuOpen}
    onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
  >
    <span class="burger-bar"></span>
    <span class="burger-bar"></span>
    <span class="burger-bar"></span>
  </button>

  <div class="nav-right">
    <div class="nav-group">
      <div
        class="nav-dropdown"
        role="group"
        aria-label="O aplikaci"
        onmouseenter={enterAboutApp}
        onmouseleave={leaveAboutApp}
      >
        <a class="nav-link" href="{base}/#about" onclick={scrollIntoView}>
          {$t('all.navAbout')}
        </a>
        <span class="nav-arrow" aria-hidden="true">▾</span>
        {#if aboutAppOpen}
          <ul class="dropdown-menu" role="menu">
            <li><a href="{base}/#oss" onclick={scrollIntoView} role="menuitem">{$t('all.openSource')}</a></li>
            <li><a href="{base}/#download" onclick={scrollIntoView} role="menuitem">{$t('all.download')}</a></li>
          </ul>
        {/if}
      </div>
      <a class="nav-link" href="{base}/news">{$t('all.navBlog')}</a>
      <div
        class="nav-dropdown"
        role="group"
        aria-label="O nás"
        onmouseenter={enterAboutUs}
        onmouseleave={leaveAboutUs}
      >
        <a class="nav-link" href="{base}/o-nas">{$t('all.navAboutUs')}</a>
        <span class="nav-arrow" aria-hidden="true">▾</span>
        {#if aboutUsOpen}
          <ul class="dropdown-menu" role="menu">
            <li><a href="{base}/#donation" onclick={scrollIntoView} role="menuitem">{$t('all.donate')}</a></li>
            <li><a href="{base}/#form" onclick={scrollIntoView} role="menuitem">{$t('all.contactUs')}</a></li>
          </ul>
        {/if}
      </div>
    </div>

    <div
      class="lang-dropdown"
      role="group"
      aria-label="Jazyk / Language"
      onmouseenter={enterLang}
      onmouseleave={leaveLang}
    >
      <button
        type="button"
        class="lang-toggle"
        aria-haspopup="true"
        aria-expanded={langOpen}
        onclick={() => (langOpen = !langOpen)}
      >
        <img src="{base}/{$locale ?? defaultLocale}.svg" alt="" width="20" height="20" />
        <span>{$t(`lang.${$locale ?? defaultLocale}`)}</span>
        <span class="nav-arrow" aria-hidden="true">▾</span>
      </button>
      {#if langOpen}
        <ul class="dropdown-menu lang-menu" role="menu">
          {#each $locales as lang}
            <li role="none">
              <button
                type="button"
                class="dropdown-item"
                role="menuitem"
                onclick={() => toggleLanguage(lang)}
                onkeydown={(e) => handleKeyPress(e, lang)}
              >
                <img src="{base}/{lang}.svg" alt="" width="20" height="20" />
                {$t(`lang.${lang}`)}
              </button>
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  </div>

  {#if mobileMenuOpen}
    <div
      class="mobile-menu"
      role="dialog"
      aria-label="Navigace"
      tabindex="-1"
      onclick={(e) => e.target === e.currentTarget && (mobileMenuOpen = false)}
      onkeydown={handleMobileMenuKeydown}
    >
      <div class="mobile-menu-inner">
        <a class="mobile-link" href="{base}/#about" onclick={scrollIntoView}>{$t('all.navAbout')}</a>
        <a class="mobile-link" href="{base}/#oss" onclick={scrollIntoView}>{$t('all.openSource')}</a>
        <a class="mobile-link" href="{base}/#download" onclick={scrollIntoView}>{$t('all.download')}</a>
        <a class="mobile-link" href="{base}/news" onclick={closeMobileMenu}>{$t('all.navBlog')}</a>
        <a class="mobile-link" href="{base}/o-nas" onclick={closeMobileMenu}>{$t('all.navAboutUs')}</a>
        <a class="mobile-link" href="{base}/#donation" onclick={scrollIntoView}>{$t('all.donate')}</a>
        <a class="mobile-link" href="{base}/#form" onclick={scrollIntoView}>{$t('all.contactUs')}</a>
        <div class="mobile-lang">
          {#each $locales as lang}
            <button
              type="button"
              class="mobile-lang-btn"
              onclick={() => { toggleLanguage(lang); closeMobileMenu(); }}
            >
              <img src="{base}/{lang}.svg" alt="" width="20" height="20" />
              {$t(`lang.${lang}`)}
            </button>
          {/each}
        </div>
      </div>
    </div>
  {/if}
</nav>

<style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    max-width: 100vw;
    box-sizing: border-box;
    background: #fff;
    color: #212529;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    z-index: 1000;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    flex-wrap: wrap;
    gap: 0.5rem;
    overflow-x: hidden;
  }

  .logo {
    position: relative;
    z-index: 1001;
    flex-shrink: 1;
    min-width: 0;
    display: block;
    line-height: 0;
  }

  .logo-img {
    display: block;
    height: 2.25rem;
    width: auto;
    max-width: 160px;
    object-fit: contain;
  }

  .logo:hover .logo-img,
  .logo:focus .logo-img {
    opacity: 0.85;
  }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: auto;
    flex-wrap: wrap;
  }

  .nav-group {
    display: flex;
    align-items: center;
    gap: 0.15rem;
    flex-wrap: wrap;
  }

  .nav-link {
    display: block;
    padding: 0.45rem 0.6rem;
    color: #6c757d;
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 4px;
  }

  .nav-link:hover {
    color: #212529;
  }

  .nav-dropdown {
    position: relative;
    display: flex;
    align-items: center;
  }

  .nav-dropdown > .nav-link {
    padding-right: 0.2rem;
  }

  .nav-arrow {
    font-size: 0.6em;
    color: #6c757d;
    pointer-events: none;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 160px;
    margin: 0.25rem 0 0 0;
    padding: 0.35rem 0;
    list-style: none;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    z-index: 100;
  }

  .dropdown-menu a {
    display: block;
    padding: 0.45rem 1rem;
    color: #212529;
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none;
  }

  .dropdown-menu a:hover {
    background: #f8f9fa;
    color: #0d6efd;
  }

  .lang-dropdown {
    position: relative;
    margin-left: 0.25rem;
    padding-left: 0.5rem;
    border-left: 1px solid #dee2e6;
  }

  .lang-toggle {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0.35rem 0.5rem;
    background: none;
    border: none;
    color: #6c757d;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    border-radius: 4px;
  }

  .lang-toggle:hover {
    color: #212529;
  }

  .lang-menu {
    right: 0;
    left: auto;
  }

  .dropdown-item {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 0.45rem 1rem;
    background: none;
    border: none;
    color: #212529;
    font-size: 0.875rem;
    font-weight: 500;
    text-align: left;
    cursor: pointer;
  }

  .dropdown-item:hover {
    background: #f8f9fa;
  }

  .burger-btn {
    display: none;
    flex-shrink: 0;
    position: relative;
    z-index: 1001;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 0.5rem;
    margin-left: auto;
    background: none;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    color: #212529;
  }

  .burger-btn:hover {
    background: #f1f3f5;
  }

  .burger-bar {
    display: block;
    width: 22px;
    height: 2px;
    background: currentColor;
    border-radius: 1px;
  }

  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 999;
    padding-top: 3.5rem;
    overflow: auto;
  }

  .mobile-menu-inner {
    background: #fff;
    padding: 1rem;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }

  .mobile-link {
    display: block;
    padding: 0.75rem 1rem;
    color: #212529;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 6px;
  }

  .mobile-link:hover {
    background: #f8f9fa;
    color: #0d6efd;
  }

  .mobile-lang {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #dee2e6;
  }

  .mobile-lang-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0.5rem 0.75rem;
    background: #f1f3f5;
    border: none;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
  }

  .mobile-lang-btn:hover {
    background: #e9ecef;
  }

  @media (max-width: 600px) {
    .burger-btn {
      display: flex;
    }

    .nav-right {
      display: none;
    }
  }

  @media (min-width: 601px) {
    .mobile-menu {
      display: none !important;
    }
  }

  @media (max-width: 480px) {
    .navbar {
      padding: 0.4rem 0.75rem;
    }
    .logo-img {
      height: 1.9rem;
      max-width: 130px;
    }
    .mobile-link {
      padding: 0.6rem 1rem;
      font-size: 0.95rem;
    }
  }
</style>
