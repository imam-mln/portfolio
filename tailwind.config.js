/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			width: {
				100: "400px",
				120: "500px",
			},
			fontFamily: {
				inter: "Inter",
			},
			keyframes: {
				"slow-bounce": {
					"0%": {transform: "translateY(0)", transform: "translateY(0)"},
					"100%": {transform: "translateY(-10px)", transform: "translateY(-10px)"},
				},
			},
			animation: {
				"slow-bounce": "slow-bounce 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite alternate both",
			},
		},
	},
	plugins: [require("daisyui")],
}
