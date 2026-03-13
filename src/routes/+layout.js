import { loadTranslations } from '$lib/translations';

export async function load({ url }) {
	await loadTranslations('cs', url.pathname);
	return {};
}
