/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			"backgound-primary": "#151515",
			"backgound-secondary": "#242424",
			"backgound-body": "#F2F2F2",
			"text-primary": "#FFFFFF",
			"text-secondary": "#D9D9D9",
			"text-placeholder": "#979797",
			"text-underline": "#4EE1A0",
		},
		fontFamily: {
			"font-primary": ["Space Grotesk", "sans-serif"],
		},
		screens: {
			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1440px",
			// => @media (min-width: 1440px) { ... }
		},
		extend: {},
	},
	plugins: [],
};
