/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"c-darkMagenta": "hsl(300, 43%, 22%)",
				"c-softPink": "hsl(333, 80%, 67%)",
				"c-dGMagenta": "hsl(303, 10%, 53%)",
				"c-lGMagenta": "hsl(300, 24%, 96%)",
			},
			fontFamily: {
				"c-spartan": ['League Spartan', 'sans-serif']
			},
		},
	},
	plugins: [],
}
