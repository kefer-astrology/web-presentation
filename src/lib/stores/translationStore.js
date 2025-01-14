import { derived, get, writable } from 'svelte/store';

// Reactive stores
/** @type {import('svelte/store').Writable<Record<string, string>>} */
const translations = writable({});
const currentLanguage = writable('cs'); // Default language

// Array of supported languages (if extending ensure also file with same_name.json present)
const availLanguages = ['cs', 'en'];

/**
 * Loads translations for the given language using fetch.
  * @param {string} language - The language code (e.g., 'en', 'cs').
  * @param {function} fetch - The fetch function provided by SvelteKit.
  * @returns {Promise<void>}
 */
async function loadTranslations(language, fetch) {
  try {
    // input string sanition 
    if (!availLanguages.includes(language)) {
      console.error(`Unsupported language: ${language}`);
      return;
    }
    console.log(`Loading translations for ${language}`);
    const response = await fetch(`/locales/${language}.json`);
    if (!response.ok) {
      throw new Error(`Failed to load translations for language: ${language}`);
    }
    const data = await response.json();
    translations.set(data);
  } catch (error) {
    console.error('Error loading translations:', error);
    if (language !== 'en') {
      console.log('Falling back to default language: en');
      await loadTranslations('en', fetch);
    }
  }
};

 /**
   * Toggles the language between available languages.
   * @param {function} fetch - The fetch function provided by SvelteKit.
   */
 async function toggleLanguage(fetch) {
  // Extract the current language value from the store
  const currentLang = get(currentLanguage); // Use `get` to get the current value

  const currentIndex = availLanguages.indexOf(currentLang);
  const nextIndex = (currentIndex + 1) % availLanguages.length;
  const newLanguage = availLanguages[nextIndex];

  currentLanguage.set(newLanguage);
  await loadTranslations(newLanguage, fetch);
}

/**
   * Gets the translated value for a given key.
   * @param {string} key - The translation key.
   * @returns {string} - The translated value or the key itself if not found.
   */
const t = derived(translations, ($translations) => {
  return (/** @type {string | number} */ key) => {
    if (!$translations[key]) console.log($translations);
    if (!$translations[key]) console.log(`Missing translation for key: ${key}`);
    return $translations[key] || key;
  }
});

export { translations, currentLanguage, loadTranslations, toggleLanguage, t };
