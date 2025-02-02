<script>
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  // Functionality for language selection
  import { t, locales, locale} from '$lib/translations';
  
  let isMobile = false;
  let showMenu = false;

  // Check screen size on mount and on resize
  const checkScreenSize = () => {
    isMobile = window.innerWidth <= 1000;
  };

  // Check screen size on mount and on resize
  const getLocale = () => {
    if (locale.get()) {
      locale.forceSet('cs');
      console.log('Current locale:', locale.get());
    } else {
      locale.forceSet('cs');
    }
  };

  onMount(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  });

  /**
   * Catches keyboard strokes.
   * @param {KeyboardEvent} event - The keyboard event triggered by user input.
   */
  function handleKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleMenu();
    }
  }

  const toggleMenu = () => {
    showMenu = !showMenu;
  };

  /**
   * Switches language.
   * TO-DO: check forceSet needed
   * @param {string} lang - language code (en, cs)
   */
  const toggleLanguage = (lang) => {
    locale.set(lang);
    locale.forceSet(lang);
  };

  /**
   * Catches keyboard strokes.
   * @param {KeyboardEvent} event - The keyboard event triggered by user input.
   * @param {string} lang - The keyboard event triggered by user input.
   */
  function handleKeyPress(event, lang) {
    if (event.key === "Enter" || event.key === " ") {
      toggleLanguage(lang);
    }
  }

  getLocale();
</script>
  
<nav class="navbar" id="mainNav">
  <div class="logo">
    <a class="navbar-brand" href="{base}/#start">{$t('all.welcome')}</a>
  </div>
  {#if isMobile}
    <div 
      class="burger-menu" 
      on:click={toggleMenu} 
      on:keydown={handleKeydown} 
      tabindex="0" 
      role="button" 
      aria-label="PANIC!"
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="mobile-menu" class:show={showMenu}>
      <a class="nav-link" href="{base}/#about" on:click={() => (showMenu = false)}>{$t('all.about')}</a>
      <a class="nav-link" href="{base}/#oss" on:click={() => (showMenu = false)}>{$t('all.openSource')}</a>
      <a class="nav-link" href="{base}/#donation" on:click={() => (showMenu = false)}>{$t('all.donate')}</a>
      <a class="nav-link" href="{base}/#download" on:click={() => (showMenu = false)}>{$t('all.download')}</a>
      <a class="nav-link" href="{base}/#contact" on:click={() => (showMenu = false)}>{$t('all.contact')}</a>
      <a class="nav-link" href="{base}/#form" on:click={() => (showMenu = false)}>{$t('all.contactUs')}</a>
      <a class="nav-link" href="{base}/news" on:click={() => (showMenu = false)}>{$t('news.heading')}</a>
    </div>
  {:else}
    <div class="desktop-menu">
      <a class="nav-link" href="{base}/#about">{$t('all.about')}</a>
      <a class="nav-link" href="{base}/#oss">{$t('all.openSource')}</a>
      <a class="nav-link" href="{base}/#donation">{$t('all.donate')}</a>
      <a class="nav-link" href="{base}/#download">{$t('all.download')}</a>
      <a class="nav-link" href="{base}/#contact">{$t('all.contact')}</a> 
      <a class="nav-link" href="{base}/#form">{$t('all.contactUs')}</a> 
      <a class="nav-link" href="{base}/news">{$t('news.heading')}</a> 
    </div>
  {/if}
  <div class="dropdown"> <!-- https://github.com/hampusborgos/country-flags -->
    <div class="dropdown-toggle">
      {#each $locales as lang}
        {#if lang === $locale}
          <img src="{base}{lang}.svg" alt={lang} />
          {lang}
        {/if}
      {/each}
    </div>
    <ul class="dropdown-menu">
      {#each $locales as lang}
      <li>
        <button class="dropdown-item" on:click={() => toggleLanguage(lang)} on:keydown={(event) => handleKeyPress(event, lang)}>
          {#if lang} <!-- Prevents errors if lang is undefined -->
            <img src="{base ? `${base}${lang}.svg` : `${base}${lang}.svg`}" alt={$t(`lang.${lang}`)} />
          {/if}
          {$t(`lang.${lang}`)}
        </button>
      </li>
      {/each}
    </ul>
  </div>  
</nav>
  
<style>
  nav {
    --bs-nav-link-padding-x: 1rem;
    --bs-nav-link-padding-y: 0.5rem;
    --bs-nav-link-font-weight: ;
    --bs-nav-link-color: var(--bs-link-color);
    --bs-nav-link-hover-color: var(--bs-link-hover-color);
    --bs-nav-link-disabled-color: #6c757d;
    align-items: center;
    background: white;
    border-bottom: 1px solid #ddd;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x);
    position: fixed;
    width: 100%;
    z-index: 10;
  }

  /* Navbar */
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    animation: gradientAnimation 5s ease-in-out infinite alternate;
    background: linear-gradient(45deg, #1e3a8a, #3b82f6);
    background-size: 200% 200%;
    color: white;
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    z-index: 1000;
  }
  /* Keyframes for the transition */
  @keyframes gradientAnimation {
      0% {
          background-position: 0% 50%;
      }
      50% {
          background-position: 100% 50%;
      }
      100% {
          background-position: 0% 50%;
      }
  }
  .desktop-menu {
    display: flex;
    gap: 1.5rem;
  }
  .navbar > .desktop-menu {
    display: flex;
    flex-wrap: inherit;
    align-items: center;
    justify-content: space-between;
  }
  .desktop-menu a {
    text-decoration: none;
    color: #000;
    font-size: 1.2rem;
  }

  .desktop-menu a:hover {
    color: #007bff;
  }

  .mobile-menu {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: #222;
    flex-direction: column;
    display: none;
    gap: 1rem;
    padding: 1rem;
  }

  .mobile-menu a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
  }

  .burger-menu {
    display: none;
    flex-direction: column;
    cursor: pointer;
  }

  .burger-menu div {
    width: 30px;
    height: 3px;
    background: white;
    margin: 5px 0;
  }
  .nav-link {
    display: block;
    padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
    font-size: var(--bs-nav-link-font-size);
    font-weight: var(--bs-nav-link-font-weight);
    color: var(--bs-nav-link-color);
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  }
  @media (max-width: 1000px) {
    .burger-menu {
      display: flex;
    }
    .mobile-menu.show {
      display: flex;
    }
  }
  .nav-link:hover, .nav-link:focus {
    color: var(--bs-nav-link-hover-color);
  }
  
  .navbar-brand {
    padding-top: var(--bs-navbar-brand-padding-y);
    padding-bottom: var(--bs-navbar-brand-padding-y);
    margin-right: var(--bs-navbar-brand-margin-end);
    font-size: var(--bs-navbar-brand-font-size);
    color: var(--bs-navbar-brand-color);
    text-decoration: none;
    white-space: nowrap;
  }
  .navbar-brand:hover, .navbar-brand:focus {
    color: var(--bs-navbar-brand-hover-color);
  }
  #mainNav {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    background-color: #fff;
    transition: background-color 0.2s ease;
  }
  #mainNav .navbar-brand {
    font-family: "Merriweather Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 700;
    color: #212529;
  }
  #mainNav .navbar-nav .nav-item .nav-link {
    color: #6c757d;
    font-family: "Merriweather Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 700;
    font-size: 0.9rem;
    padding: 0.75rem 0;
  }
  #mainNav .navbar-nav .nav-item .nav-link:hover, #mainNav .navbar-nav .nav-item .nav-link:active {
    color: #f4623a;
  }
  @media (min-width: 992px) {
    #mainNav {
      box-shadow: none;
      background-color: transparent;
    }
    #mainNav .navbar-brand {
      color: rgba(255, 255, 255, 0.7);
    }
    #mainNav .navbar-brand:hover {
      color: #fff;
    }
    #mainNav .navbar-nav .nav-item .nav-link {
      color: rgba(255, 255, 255, 0.7);
      padding: 0 1rem;
    }
    #mainNav .navbar-nav .nav-item .nav-link:hover {
      color: #fff;
    }
    #mainNav .navbar-nav .nav-item:last-child .nav-link {
      padding-right: 0;
    }
  }

  .dropdown {
    background: none;    
    position: relative;
    display: inline-block;
  }

  .dropdown-toggle {
    display: flex;
    align-items: center;
    background: none;    
    gap: 8px;
    padding: 5px 10px;
    cursor: pointer;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background: none;
    list-style: none;
    padding: 5px;
    margin: 0;
    display: none;
  }

  .dropdown:hover .dropdown-menu {
    display: block;
  }

  .dropdown-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 5px 5% 10px 0;
    cursor: pointer;
    flex-direction: row-reverse; /* Flips the order: text → flag */
    justify-content: flex-start; /* Align items to the left */
  }

  .dropdown-item:hover {
    background: #f0f0f0;
  }

  img {
    width: 20px;
    height: 20px;
  }

</style>