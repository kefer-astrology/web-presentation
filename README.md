# Keferastrology.com

- pages are based on [SvelteKit](https://svelte.dev/docs/kit/introduction) compiled with [Vite](https://vite.dev/guide/).
- final touch is handled by `npm run build` (You can preview the production build with `npm run preview`).
- deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.


## Rest is on purpose in Czech language ;) 

- spustit si stránky u sebe

```bash
npm run dev
```

- celá logika se nachází v `./src/routes/+page.svelte`

- překlady jsou ve složce `./static/locales/*.json`

- časem si to tady zautomatizujeme - každá změna vygeneruje finální kod do složky `build`, odkud to pak musíme přenést na FTP (to nemůže být tady, protože jsou to senzitivní data).
