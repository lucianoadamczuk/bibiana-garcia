/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '8rem',
				'2xl': '12rem',
			},
		},
		colors: {
			light: '#FFFFFF',
			gray: '#F0F0F0',
			dark: '#473752',
			primary: '#CEC1D6',
			'primary-dark': '#82708D',

			highlight: '#9B4882',
		},
		extend: {},
	},
	plugins: [],
};
