/** @type {import('tailwindcss').Config} */
/* eslint-disable comma-dangle */
const plugin = require("tailwindcss/plugin")

module.exports = {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	mode: "jit",
	theme: {
      /*
      -------------------------------------
      TRANSITIONS
      -------------------------------------
      */
      transitionDuration: {
         DEFAULT: "1000ms"
      },
      transitionTimingFunction: {
         DEFAULT: "cubic-bezier(.62,.05,.29,1)",
         bounce: "cubic-bezier(.79,2.25,.65,.5)"
      },
      /*
      -------------------------------------
      FONTS FAMILY
      -------------------------------------
      */
      fontFamily: {
         title: ["Hatton", "sans-serif"],
         body: ["Rubik", "sans-serif"]
      },
		extend: {
			colors: {
				pitchBlack: "var(--pitchBlack)",
				black: "var(--black)",
				dark: "var(--dark)",
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				white: "var(--white)",
			},
			fontFamily: {
				rubik: ["Rubik", "sans-serif"],
			},
			spacing: {
				"mobile-sidebar": "50px",
				sidebar: "200px",
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
	},
	plugins: [
      plugin(function ({ addVariant }) {
         // Document
         addVariant("is-loaded", ".is-loaded &")
         addVariant("parent-aos", ".aos-init.aos-animate &")
		})
	],
};
