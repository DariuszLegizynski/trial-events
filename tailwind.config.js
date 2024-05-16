/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "rgb(121,148,126)",
				secondary: "rgb(244,240,234)",
				contrast: "rgb(209,190,185)",
				warning: "rgb(253, 224, 71)",
				black: "hsl(5, 0%, 0%)",
				white: "hsl(5, 0%, 100%)",
				grey: "hsl(0, 5%, 50%)",
			},
			screens: {
				xxs: "375px",
				xs: "425px",
				"3xl": "1920px",
			},
		},
	},
	plugins: [],
}

