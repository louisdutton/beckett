const colors = require('tailwindcss/colors')

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				mono: ["Courier", "monospace"],
			},
      colors: {
        primary: colors.blue;
      }
		},
	},
	plugins: [],
};
