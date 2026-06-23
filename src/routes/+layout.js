import { browser } from "$app/environment";
import { loadTranslations, defaultLocale } from "$lib/translations";

/** @type {import('./$types').LayoutLoad} */
export async function load({ url }) {
  const selectedLocale = browser
    ? (localStorage.getItem("locale") ?? defaultLocale)
    : defaultLocale;
  await loadTranslations(selectedLocale, url.pathname);
  return { locale: selectedLocale };
}
