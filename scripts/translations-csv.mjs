import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const translationsDir = path.join(rootDir, 'src', 'lib', 'translations');
const outPath = path.join(rootDir, 'translations.csv');
const args = new Set(process.argv.slice(2));
const checkOnly = args.has('--check');

function listLocaleDirs(dir) {
	return fs
		.readdirSync(dir, { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.map((entry) => entry.name)
		.sort();
}

function listJsonFiles(dir, base = dir) {
	const results = [];
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			results.push(...listJsonFiles(fullPath, base));
		} else if (entry.isFile() && entry.name.endsWith('.json')) {
			results.push(path.relative(base, fullPath).replaceAll(path.sep, '/'));
		}
	}
	return results.sort();
}

function flattenJson(value, prefix = '') {
	if (Array.isArray(value)) {
		return { [prefix]: JSON.stringify(value) };
	}

	if (value && typeof value === 'object') {
		return Object.entries(value).reduce((acc, [key, nestedValue]) => {
			const nestedPrefix = prefix ? `${prefix}.${key}` : key;
			return { ...acc, ...flattenJson(nestedValue, nestedPrefix) };
		}, {});
	}

	return { [prefix]: value == null ? '' : String(value) };
}

function readJson(filePath) {
	return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function csvEscape(value) {
	const stringValue = String(value ?? '');
	if (
		stringValue.includes('"') ||
		stringValue.includes(',') ||
		stringValue.includes('\n') ||
		stringValue.includes('\r')
	) {
		return `"${stringValue.replaceAll('"', '""')}"`;
	}
	return stringValue;
}

const locales = listLocaleDirs(translationsDir);
const localeFiles = Object.fromEntries(
	locales.map((locale) => [locale, listJsonFiles(path.join(translationsDir, locale))])
);
const allRelativeFiles = [...new Set(Object.values(localeFiles).flat())].sort();

const parityIssues = [];
const rows = [];

for (const relativeFile of allRelativeFiles) {
	const perLocaleFlat = {};

	for (const locale of locales) {
		const fullPath = path.join(translationsDir, locale, relativeFile);
		perLocaleFlat[locale] = fs.existsSync(fullPath) ? flattenJson(readJson(fullPath)) : {};
	}

	const allKeys = [
		...new Set(Object.values(perLocaleFlat).flatMap((record) => Object.keys(record)))
	].sort();

	for (const locale of locales) {
		const missing = allKeys.filter((key) => !(key in perLocaleFlat[locale]));
		if (missing.length > 0) {
			parityIssues.push({ file: relativeFile, locale, missing });
		}
	}

	for (const key of allKeys) {
		rows.push({
			file: relativeFile,
			namespace: relativeFile.replace(/\.json$/, '').replaceAll('/', '.'),
			key,
			...Object.fromEntries(locales.map((locale) => [locale, perLocaleFlat[locale][key] ?? '']))
		});
	}
}

if (!checkOnly) {
	const header = ['file', 'namespace', 'key', ...locales];
	const csv = [
		header.map(csvEscape).join(','),
		...rows.map((row) => header.map((column) => csvEscape(row[column] ?? '')).join(','))
	].join('\n');

	fs.writeFileSync(outPath, `${csv}\n`, 'utf8');
	console.log(
		`Wrote ${path.relative(rootDir, outPath)} with ${rows.length} rows from ${allRelativeFiles.length} JSON files.`
	);
}

if (parityIssues.length > 0) {
	console.error('Translation key parity issues found:');
	for (const issue of parityIssues) {
		console.error(`- ${issue.file} :: missing in ${issue.locale}: ${issue.missing.join(', ')}`);
	}
	process.exit(1);
}

console.log(`Translation key parity OK across locales: ${locales.join(', ')}`);
