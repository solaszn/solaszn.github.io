/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				black: "#0A0A0A",
				offwhite: "#ECECEC",
				surface: "var(--bg-surface)",
				primary: "var(--fg-primary)",
				secondary: "var(--fg-secondary)",
				tertiary: "var(--fg-tertiary)",
			},
			fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Bowlby One", ...defaultTheme.fontFamily.serif],
      },
		},
	},
	plugins: [],
}
