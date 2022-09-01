/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				black: "#1d1d1d",
				dark: "#2d2d2d",
				primary: "#ffd24e",
				secondary: "#a9a9a9",
			},
			fontFamily: {
				rubik: ["Rubik", "sans-serif"],
			},
		},
		screens: {
			xs: "480px",
			ss: "620px",
			sm: "768px",
			md: "1060px",
			lg: "1200px",
			xl: "1700px",
		},
	},
	plugins: [],
};
