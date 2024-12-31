import { writable, get } from 'svelte/store';

// Reactive stores
const translations = writable({});
const currentLanguage = writable('cs'); // Default language

/**
 * Loads translations for the given language using fetch.
 * @param {string} language - The language code (e.g., 'en', 'cs').
 * @param {function} fetch - The fetch function provided by SvelteKit.
 */
const loadTranslations = async (language, fetch) => {
  try {
    const response = await fetch(`/locales/${language}.json`);
    if (!response.ok) {
      throw new Error(`Failed to load translations for language: ${language}`);
    }
    const data = await response.json();
    translations.set(data);
  } catch (error) {
    console.error('Error loading translations:', error);
  }
};

/**
 * Toggles the language between 'cs' and 'en'.
 * @param {function} fetch - The fetch function provided by SvelteKit.
 */
const toggleLanguage = async (fetch) => {
  const newLanguage = get(currentLanguage) === 'cs' ? 'en' : 'cs';
  currentLanguage.set(newLanguage);
  await loadTranslations(newLanguage, fetch);
};

/**
 * Gets the translated value for a given key.
 * @param {string} key - The translation key.
 * @returns {string} - The translated value or the key itself if not found.
 */
const t = (key) => {
  const trans = get(translations);
  return trans[key] || key;
};

export { translations, currentLanguage, loadTranslations, toggleLanguage, t };
