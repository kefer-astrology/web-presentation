<script>
	import { t, currentLanguage, toggleLanguage } from '$lib/stores/languageStore';

	// Reactive language subscription
	$: language = $currentLanguage;
</script>


<svelte:head>
	<title>Home</title>
	<meta name="description" content="Kefer Astrology presentation" />
</svelte:head>
  
<!-- Masthead -->
<header id="start" class="masthead">
	<h1>{t('welcome')}</h1>
	<p>{t('description')}</p>
	<button class="btn">{t('learnMore')}</button>
</header>
  
<!-- About Section -->
<section id="about" class="bg-primary">
	<h2>{t('whyItExists')}</h2>
	<div class="divider"></div>
	<p>{t('overview')}</p>
</section>
  
<!-- Functions Section -->
<section id="function">
	<h2>{t('functions')}</h2>
	<div class="divider"></div>
	<p>{t('overview')}</p>
</section>
  
  <!-- Download Section -->
<section id="page-top" class="bg-primary">
	<h2>{t('freeDownload')}</h2>
	<a class="btn" href="https://github.com/kubow/AstroSmrkRust/releases">{t('learnMore')}</a>
</section>
  
<!-- Contact Section -->
<section id="contact">
	<h2>{t('contactUs')}</h2>
	<p>{t('contactDescription')}</p>
</section>

<style>
  
	.masthead {
	  height: 100vh;
	  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)),
		url('$lib/images/screen_dark_small.jpeg') center/cover no-repeat;
	  color: white;
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	  text-align: center;
	}
  
	.masthead h1 {
	  font-size: 3rem;
	  margin-bottom: 1rem;
	}
  
	.masthead .btn {
	  padding: 1rem 2rem;
	  background: #007bff;
	  color: white;
	  border: none;
	  border-radius: 4px;
	  font-size: 1rem;
	  text-transform: uppercase;
	  cursor: pointer;
	}
  
	.masthead .btn:hover {
	  background: #0056b3;
	}
  
	section {
	  padding: 4rem 2rem;
	}
  
	section.bg-primary {
	  background: #007bff;
	  color: white;
	}

  
	.divider {
	  width: 100px;
	  height: 3px;
	  margin: 1.5rem auto;
	  background: white;
	}

  </style>
