/**
 * Blog posts from keferastrology.com/aktuality (HTTrack copy).
 * Used by /news listing and /news/[slug] detail.
 */
export const blogPosts = [
	{
		slug: 'uvedeni-knihy-prakticka-astrologie',
		title: 'Uvedení knihy Praktická astrologie',
		date: '02.03.2025',
		perex: 'Vystoupí autorův syn Reginald Kefer, Lukáš Loužecký a redaktoři knihy Pavel Turnovský a Zuzana Zadrobílková. Těšíme se na viděnou v pátek 4. dubna 2025 od 17 hodin v kavárně Za sklem, Olomouc, 1. máje 16',
		image: '/KFR01_tab_Light.jpg',
		body: null
	},
	{
		slug: 'prvni-opravene-vydani-prakticka-astrologie',
		title: 'První opravené vydání Praktické astrologie Jana Kefera SKLADEM',
		date: '01.03.2025',
		perex: 'První opravené vydání Praktické astrologie Jana Kefera, zásadní astrologické příručky, jež vyšla poprvé roku 1939 nákladem společnosti Universalia. Doslov Reginald Kefer. Redakce Zuzana Zadrobílková a Pavel Turnovský, grafická úprava a sazba Tomáš Nedoma. 464 stran. 8°, pevná vazba. První opravené, v pořadí 5. vydání.',
		image: '/KFR01_tab_Light.jpg',
		body: null
	},
	{
		slug: 'spoustime-web',
		title: 'Spouštíme web',
		date: '28.02.2025',
		perex: 'S radostí vám oznamujeme spuštění našeho nového webu věnovaného astrologickému softwaru Kefer. Jsme tým čtyř nadšených lidí, kteří se rozhodli vytvořit nástroj, který sloužit astrologům a nadšencům do astrologie.',
		image: '/KFR01_tab_Light.jpg',
		body: `S radostí vám oznamujeme spuštění našeho nového webu věnovaného astrologickému softwaru Kefer. Jsme tým čtyř nadšených lidí, kteří se rozhodli vytvořit nástroj, který sloužit astrologům a nadšencům do astrologie.

Naše cesta začala před již před nějakou dobou. Rozhodli jsme se spojit naše síly a vytvořit něco jedinečného. Každý z nás přináší do projektu své vlastní zkušenosti a dovednosti, což nám umožňuje pracovat efektivně a inovativně.

Chceme zajistit, že náš program bude co nejvíce odpovídat potřebám uživatelů. Díky tomu, že vyvíjíme software s otevřeným kódem, budeme ho schopni neustále zlepšovat a přizpůsobovat tak, aby byl co nejvíce uživatelsky přívětivý a funkční.

V jaké jsme aktuálně fázi vývoje? Aktuálně se grafici Jaro a Mirek seznamují s programem Figma, který nám umožní jimi vytvořenou grafiku exportovat v CSS kódu, se kterým bude pracovat Kuba. Kuba nyní pracuje na funkční stránce programu a programuje nezávisle jednotlivé funkce. Já spolu s Mirkem plánujeme nyní shrnout navrhnuté funkce a vše projít a vytvořit myšlenkovou mapu funkcí programu, se kterou se bude dále pracovat.

Na našem novém webu najdete veškeré informace o vývoji programu Kefer. Sledujte náš blog a náš facebook.

Děkujeme vám za vaši podporu a těšíme se na vaši zpětnou vazbu. Společně můžeme vytvořit nástroj, který bude skutečně užitečný pro všechny astrology.

Radomír`
	}
];

/** @param {string} slug */
export function getPostBySlug(slug) {
	return blogPosts.find((p) => p.slug === slug) ?? null;
}

export function getAllSlugs() {
	return blogPosts.map((p) => p.slug);
}
