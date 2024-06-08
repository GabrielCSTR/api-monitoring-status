/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: "media",
	theme: {
		extend: {},
		container: {
			center: true,
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1320px",
			},
		},
	},
	plugins: [],
};
