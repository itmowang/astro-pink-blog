/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1350px",
			"2xl": "1536px",
		},
		extend: {
			colors: {
				customPrimary: "rgb(141,39,64)",
				customSecondary: "rgb(161, 163, 247)",
				customDarkBg1: "rgb(254,227,225)",
				customDarkBg2: "rgb(253,201,200)",
				customDarkBg3: "rgb(255,242,238)",
				customDarkBg3Hover: "rgb(214,88,108)",
				customContent: "rgb(255,242,238)",
				customGrayBorder: "rgb(219,163,166)",
				customGrayText: "rgb(141,39,64)",
			},
			fontFamily: {
				Inter: "Inter",
			},
			
		},
	},
	plugins: [],
}
