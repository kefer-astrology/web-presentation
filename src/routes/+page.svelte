<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import screen_light from '$lib/images/screen_light_small.jpeg';
	import screen_dark from '$lib/images/screen_dark_small.jpeg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		Kefer Astrology software
	</h1>

	<h2>
		You can find below some screens from the app!
	</h2>

	<span class="light_screen">
		<picture>
			<source srcset={screen_light} type="image/webp" />
			<img src={screen_light} alt="screen_light" />
		</picture>
	</span>

	<span class="dark_screen">
		<picture>
			<source srcset={screen_dark} type="image/webp" />
			<img src={screen_dark} alt="screen_dark" />
		</picture>
	</span>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
