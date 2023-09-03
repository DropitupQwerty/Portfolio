import React from 'react'
import { motion } from 'framer-motion'


type SplashScreenProps = { 
	children : React.ReactNode
}


export const SplashScreen = (props : SplashScreenProps) => {
	const icon = {
		hidden: {
			pathLength: 0,
			fill :  'rgba(10,0,10 , 0.1)'
		},
		visible: {
			pathLength: 1,
			fill :'#F97316',
		}
	}

	const svgContainer = {
		visible : {
			opacity : 1,
			z:9999,
		},
		hidden : {
			y:-10,
			opacity:0,
		}
	}

	
	const childrenContainer = {
		visible : {
			opacity : 1,
			y:0,
		},
		hidden : {
			y:10,
			opacity : 0,
		}
	}

	const duration = 3

	


	
	return (
		<motion.div  className='w-full h-screen overflow-hidden' >
			<motion.div variants={svgContainer} transition={{duration : 3 , delay:3}} initial="visible" animate="hidden" className=' w-full flex flex-col h-screen overflow-hidden justify-center items-center absolute'>
				<motion.svg className='drop-shadow-[0_0px_2px_rgba(138,43,226.2)] h-[10%]'  id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 526.29 54.13">
					<motion.path transition={{duration : duration}}  initial="hidden"
						animate="visible" variants={icon} d="m6.61,11.22h17.64v23.98c0,5.52-2.38,8.28-7.13,8.28-1.78,0-3.44-.46-5-1.37-1.56-.91-3.01-2.28-4.36-4.1l-6.48,7.7c1.82,2.4,4.16,4.24,7.02,5.51,2.85,1.27,5.99,1.91,9.4,1.91,5.95,0,10.48-1.54,13.57-4.61,3.1-3.07,4.64-7.73,4.64-13.97V1.86H6.61v9.36Z" fill='none'  stroke="#F97316" strokeWidth="1"/>
					<motion.path transition={{duration : duration}}  initial="hidden"
						animate="visible" variants={icon} d="m62.05,1.86l-22.39,50.4h11.95l4.49-10.8h23.35l4.49,10.8h12.24L73.57,1.86h-11.52Zm-2.27,30.74l7.99-19.21,7.99,19.21h-15.98Z" fill="none" stroke="#F97316" strokeMiterlimit="10" strokeWidth="1" radius="20"/>
					<motion.path transition={{duration : duration}}  initial="hidden"
						animate="visible" variants={icon} d="m113.89,15.4c1.44-1.44,3.14-2.56,5.11-3.35,1.97-.79,4.13-1.19,6.48-1.19,2.5,0,4.81.5,6.95,1.51,2.13,1.01,4.04,2.5,5.72,4.46l7.56-6.91c-2.4-2.93-5.38-5.15-8.93-6.66-3.55-1.51-7.51-2.27-11.88-2.27-3.89,0-7.5.64-10.84,1.91-3.34,1.27-6.24,3.08-8.71,5.44-2.47,2.35-4.39,5.11-5.76,8.28-1.37,3.17-2.05,6.65-2.05,10.44s.68,7.27,2.05,10.44c1.37,3.17,3.28,5.93,5.72,8.28,2.45,2.35,5.34,4.16,8.68,5.44,3.34,1.27,6.95,1.91,10.84,1.91,4.42,0,8.4-.77,11.95-2.3,3.55-1.54,6.53-3.77,8.93-6.7l-7.56-6.91c-1.68,1.97-3.59,3.47-5.72,4.5-2.14,1.03-4.45,1.55-6.95,1.55-2.35,0-4.51-.4-6.48-1.19-1.97-.79-3.67-1.91-5.11-3.35-1.44-1.44-2.56-3.14-3.35-5.11-.79-1.97-1.19-4.15-1.19-6.55s.4-4.58,1.19-6.55c.79-1.97,1.91-3.67,3.35-5.11Z" fill="none" stroke="#F97316" strokeMiterlimit="10" strokeWidth="1"/>
					<motion.path transition={{duration : duration}}  initial="hidden"
						animate="visible" variants={icon} d="m196.54,8.34c-2.5-2.35-5.41-4.16-8.75-5.44-3.34-1.27-7-1.91-10.98-1.91s-7.64.65-10.98,1.94c-3.34,1.3-6.25,3.12-8.75,5.47-2.5,2.35-4.43,5.1-5.8,8.24-1.37,3.14-2.05,6.61-2.05,10.4s.68,7.2,2.05,10.37c1.37,3.17,3.3,5.93,5.8,8.28,2.5,2.35,5.42,4.18,8.78,5.47,3.36,1.3,7.03,1.94,11.02,1.94s7.57-.64,10.91-1.91c3.33-1.27,6.25-3.08,8.75-5.44,2.5-2.35,4.43-5.12,5.8-8.32,1.37-3.19,2.05-6.66,2.05-10.4s-.68-7.27-2.05-10.44-3.3-5.93-5.8-8.28Zm-5.15,25.24c-.79,1.94-1.91,3.65-3.35,5.11-1.44,1.46-3.11,2.59-5,3.38-1.9.79-3.97,1.19-6.23,1.19s-4.34-.4-6.26-1.19c-1.92-.79-3.59-1.92-5-3.38-1.42-1.46-2.52-3.17-3.31-5.11s-1.19-4.12-1.19-6.52.4-4.57,1.19-6.52c.79-1.94,1.9-3.65,3.31-5.11,1.42-1.46,3.08-2.59,5-3.38,1.92-.79,4.01-1.19,6.26-1.19s4.33.4,6.23,1.19c1.9.79,3.56,1.92,5,3.38,1.44,1.46,2.56,3.17,3.35,5.11.79,1.94,1.19,4.12,1.19,6.52s-.4,4.57-1.19,6.52Z" fill="none" stroke="#F97316" strokeMiterlimit="10" strokeWidth="1"/>
					<motion.path transition={{duration : duration}}  initial="hidden"
						animate="visible" variants={icon} d="m251.59,26.49c-.44-.19-.9-.34-1.36-.5,1.96-1.03,3.54-2.4,4.71-4.15,1.3-1.94,1.94-4.24,1.94-6.88,0-3.94-1.6-7.1-4.79-9.5-3.19-2.4-7.96-3.6-14.29-3.6h-24.62v50.4h26.06c6.62,0,11.64-1.21,15.05-3.64,3.41-2.42,5.11-5.8,5.11-10.12,0-2.93-.7-5.4-2.09-7.42-1.39-2.02-3.3-3.55-5.72-4.61Zm-15.23-15.84c2.83,0,5,.48,6.52,1.44,1.51.96,2.27,2.45,2.27,4.46s-.76,3.52-2.27,4.5c-1.51.98-3.68,1.48-6.52,1.48h-11.59v-11.88h11.59Zm8.93,31.32c-1.58,1.01-3.86,1.51-6.84,1.51h-13.68v-12.46h13.68c2.98,0,5.26.5,6.84,1.51s2.38,2.59,2.38,4.75-.79,3.67-2.38,4.68Z" fill="none" stroke="#F97316" strokeMiterlimit="10" strokeWidth="1"/>
					<motion.path transition={{duration : duration}}  initial="hidden"
						animate="visible" variants={icon} d="m304.4,1.86l-22.39,50.4h11.95l4.49-10.8h23.35l4.49,10.8h12.24L315.92,1.86h-11.52Zm-2.27,30.74l7.99-19.21,7.99,19.21h-15.98Z" fill="none" stroke="#F97316" strokeMiterlimit="10" strokeWidth="1"/>
					<motion.path transition={{duration : duration}}  initial="hidden"
						animate="visible" variants={icon} d="M355.52,1.86 L343.78,1.86 L343.78,52.26 L380.64,52.26 L380.64,42.76 L355.52,42.76 L355.52,1.86" fill="none" stroke="#F97316" strokeMiterlimit="10" strokeWidth="1"/>
					<motion.path transition={{duration : duration}}  initial="hidden"
						animate="visible" variants={icon} d="M399,1.86 L387.27,1.86 L387.27,52.26 L424.13,52.26 L424.13,42.76 L399,42.76 L399,1.86" fill="none" stroke="#F97316" strokeMiterlimit="10" strokeWidth="1"/>
					<motion.path transition={{duration : duration}}  initial="hidden"
						animate="visible" variants={icon} d="M442.35,31.24 L465.75,31.24 L465.75,22.1 L442.35,22.1 L442.35,11.22 L468.84,11.22 L468.84,1.86 L430.75,1.86 L430.75,52.26 L469.78,52.26 L469.78,42.9 L442.35,42.9 L442.35,31.24" fill="none" stroke="#F97316" strokeMiterlimit="10" strokeWidth="1"/>
					<motion.path transition={{duration : duration}}  initial="hidden"
						animate="visible" variants={icon} d="M513.77,1.86 L513.77,32.44 L488.71,1.86 L479.06,1.86 L479.06,52.26 L490.59,52.26 L490.59,21.69 L515.64,52.26 L525.29,52.26 L525.29,1.86 L513.77,1.86" fill="none" stroke="#F97316" strokeMiterlimit="10" strokeWidth="1"/>
				</motion.svg>
			</motion.div>
			<motion.div transition={{duration : 1 , delay:4}}  initial="hidden" animate="visible" variants={childrenContainer}>
				{props.children}
			</motion.div>
		
		</motion.div>
	)
}
