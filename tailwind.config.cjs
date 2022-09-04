/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				black: "var(--black)",
				dark: "var(--dark)",
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				white: "var(--white)",
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
			xl: "1600px",
		},
		transitionDuration: {
			DEFAULT: "250ms",
		},
	},
	plugins: [],
};
