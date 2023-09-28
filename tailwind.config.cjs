/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: [],
	theme: {
		colors: {
			'white': '#F7F7F8',
			'light-blue': '#86C1EB',
			'purple': '#472F96',
			'blue': '#2D80ED',
			'violet': '#762BCC',
			'rose': '#D55672'
		},
		extend: {},
	},
	plugins: [],
}
