/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	darkMode : 'class',
	theme: {
		extend: {
			colors : {
				'primary-black' : '#393E46',
				'primary-white' : '#ffffff',
				'primary-purple' : '#662d91',
				'primary-blue' : '#3f83f8',
				'primary-orange' : '#F97316'
			},
			dropShadow: {
				'custom': '20px 35px 1px #f5f5f5',
			},
			fontFamily: { 
				'DotGothic' :  ['DotGothic16', 'sans-serif']
			}
		},
	},
	plugins: [],
}