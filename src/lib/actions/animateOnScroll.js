/**
 * Svelte action: add .visible when the node enters the viewport.
 * Use with section.animate-on-scroll and the CSS in app.css.
 * @param {HTMLElement} node
 * @param {{ rootMargin?: string, threshold?: number }} [options]
 */
export function animateOnScroll(node, options = {}) {
	const { rootMargin = '0px 0px -40px 0px', threshold = 0.05 } = options;
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) e.target.classList.add('visible');
			});
		},
		{ rootMargin, threshold }
	);
	observer.observe(node);
	return {
		destroy() {
			observer.unobserve(node);
		}
	};
}
