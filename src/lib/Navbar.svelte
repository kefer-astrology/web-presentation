<script>
    // Functionality for language selection
    import { t, currentLanguage, toggleLanguage } from '$lib/stores/languageStore';
    
</script>
  
<nav class="navbar navbar-expand-lg navbar-light fixed-top py-3">
    <div class="container px-4 px-lg-5">
      <a class="navbar-brand" href="#page-top">Kefer Astrology</a>
      <div id="navbarResponsive" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto my-2 my-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#about">{t('about')}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#function">{t('functions')}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#download">{t('download')}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">{t('contact')}</a>
          </li>
          <li>
            <button type="button" class="lang-switch" on:click={toggleLanguage}>
                {$currentLanguage === 'cs' ? 'en' : 'cs'}
              </button>
          </li>
        </ul>
      </div>
    </div>
</nav>
  
<style>
    /* Navbar */
    nav {
    background: white;
    border-bottom: 1px solid #ddd;
    position: fixed;
    width: 100%;
    z-index: 10;
    padding: 1rem 2rem;
  }

  nav ul {
    list-style: none;
    display: flex;
    justify-content: flex-end;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
  }

  nav a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
  }

  nav a:hover {
    color: #007bff;
  }


.lang-switch {
    background: none;
    border: none;
    color: #000;
    cursor: pointer;
    padding: 0.5rem 1rem;
    font-weight: bold;
    margin-left: 0.5rem;
    color: #007bff;
    text-decoration: underline;
  }

  .lang-switch:hover {
    color: #0056b3;
  }

</style>