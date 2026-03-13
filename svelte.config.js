import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(readFileSync(join(__dirname, 'package.json'), 'utf8'));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: true,
	},
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({pages: "docs", assets: "docs", fallback: "404.html"}),
		appDir: "scripts",
		paths: {
			base: process.argv.includes('dev') ? '' : "/keferastrology.com",
		},
		// Deterministic builds: use package version instead of Date.now() so identical source produces identical output
		version: {
			name: process.env.SVELTEKIT_VERSION ?? pkg.version,
		},
	}
};

export default config;
