import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		flowbite.content(),
	],
	theme: {
		colors: {
			"bg-color": "#faece1",
			"b-text-color": "#393431",
		},

		container: {
			// you can configure the container to be centered
			center: true,

			// or have default horizontal padding
			// padding: "20px",

			// default breakpoints but with 40px removed
			screens: {
				sm: "600px",
				md: "728px",
				lg: "984px",
				xl: "1360px",
				"2xl": "1440px",
			},
		},
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
				// great: ["GreatVibes-Regular"],
				great: "var(--font-great-vibes-regular)",
				vollkorn: "var(--font-vollkorn)",
			},
			fontSize: {
				"18": "18px",
				"22": "22px",
				"26": "26px",
			},
		},
	},
	plugins: [flowbite.plugin()],
};
export default config;
