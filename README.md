# Keferastrology.com

Zdroj prezentace sestavené na https://keferastrology.com/

## Vývoj

- založeno na [SvelteKit](https://svelte.dev/docs/kit/introduction) kompilováno pomocí [Vite](https://vite.dev/guide/).
- final touch is handled by `npm run build` (You can preview the production build with `npm run preview`).
- deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

```bash
npm run dev
```

- celá logika se nachází v [`./src/routes/+page.svelte`](./src/routes/+page.svelte)

- překlady jsou ve složce [`./static/locales/`](./static/locales/)

- časem si to tady zautomatizujeme - každá změna vygeneruje finální kod do složky `build`, odkud to pak musíme přenést na FTP (to nemůže být tady, protože jsou to senzitivní data).


## To-Do

- přepínač na překlady
- Donation
    - Paypal (nějaký jiný) acocunt vytvořit
    - [Free Donate Button - Donorbox Nonprofit Fundraising Software](https://donorbox.org/)
- Aktuality