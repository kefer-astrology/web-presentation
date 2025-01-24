# Keferastrology.com

Zdroj prezentace sestavené na https://keferastrology.com/
Náhled je dostupný na adrese https://kefer-astrology.github.io/keferastrology.com/

## Vývoj

- založeno na [SvelteKit](https://svelte.dev/docs/kit/introduction) kompilováno pomocí [Vite](https://vite.dev/guide/).
- celé se to generuje pomocí `npm run build` (nebo jen náhled `npm run dev` / `npm run preview`). 

- celá logika se nachází v [`./src/routes/+page.svelte`](./src/routes/+page.svelte)

- separátně je pak generovaná sekce novinek [`./src/routes/news/+page.svelte`](./src//routes//news/+page.svelte)

- překlady jsou ve složce [`./src/lib/translations/`](./src/lib/translations/)
    - [CZ texty / novinky](./src/lib/translations/cs/)
    - [EN texty / novinky](./src/lib/translations/en/)

- časem si to tady zautomatizujeme - každá změna vygeneruje finální kod do složky `build`, odkud to pak musíme přenést na FTP (to nemůže být tady, protože jsou to senzitivní data).


## To-Do

- CSS
    - trošku nějaký trasnition
- přepínač na překlady
- Donation
    - Paypal (nějaký jiný) acocunt vytvořit
    - [Free Donate Button - Donorbox Nonprofit Fundraising Software](https://donorbox.org/)
- Aktuality