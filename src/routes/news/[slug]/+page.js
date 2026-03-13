import { error } from '@sveltejs/kit';
import { getPostBySlug, getAllSlugs } from '$lib/data/blogPosts.js';

export function load({ params }) {
	const post = getPostBySlug(params.slug);
	if (!post) {
		throw error(404, 'Post not found');
	}
	return { post };
}

export function entries() {
	return getAllSlugs().map((slug) => ({ slug }));
}

export const prerender = true;
