/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			darkBlue: '#1a2b33',
			squareColor: '#1E3640',
			primary: '#31c6be',
			secondary: '#f2b136',
			gray: '#aabfca',
		},
		boxShadow: {
			2: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
		},
		extend: {},
	},
	plugins: [],
}
