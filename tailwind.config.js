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
		keyframes: {
			typing: {
				to: {
					left: '107%'
				}  
			},
			blink: {
				'50%': {
					borderColor: 'transparent'
				},
				'100%': {
					borderColor: 'white'
				}  
			}
		},
		animation: {
			typing: 'typing 2s steps(14) infinite alternate, blink .7s infinite'
		}
	},
	plugins: [],
}