/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
				  "Inter var, sans-serif",
				  { fontFeatureSettings: '"cv11", "ss01"' },
				],
			  },
		},
		keyframes: {
			shimmer: {
			  '100%': {
				transform: 'translateX(100%)',
			  },
			},
		  },
	},
	plugins: [],
}
