<script>
  // Functionality for language selection
  import { t, locales, locale} from '$lib/translations';
  
  // TO-DO: intelligent handling of a variable
  locale.forceSet('cs');
  // Log the current locale and test the translation key
  console.log('Current locale:', locale.get());
  // console.log('Translation for "about":', $t('about'));
</script>
  
<nav class="navbar navbar-expand-lg navbar-light fixed-top py-3">
    <div class="container px-4 px-lg-5">
      <a class="navbar-brand" href="#page-top">{$t('all.welcome')}</a>
      <div id="navbarResponsive" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto my-2 my-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#about">{$t('all.about')}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#function">{$t('all.functions')}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#astrolab">{$t('all.astrolab')}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#kefer">{$t('all.kefer')}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#download">{$t('all.download')}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">{$t('all.contact')}</a>
          </li>
          <li>
            <select 
              on:change={(event) => {
                const target = /** @type {HTMLSelectElement} */ (event.target);
                locale.set(target.value);
                document.querySelector('html')?.setAttribute('lang', target.value);
              }}
              class="lang-switch"
            >
              {#each $locales as lc}
                <option value={lc} selected={lc === $locale}>{$t(`lang.${lc}`)}</option>
              {/each}
            </select>
          </li>
        </ul>
      </div>
    </div>
</nav>
  
<style>
  /* Navbar */
  nav {
    position: fixed;
    width: 100%;
    background: white;
    border-bottom: 1px solid #ddd;
    z-index: 10;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x);
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