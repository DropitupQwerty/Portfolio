import React from 'react'
import { motion } from 'framer-motion'


type AnimationUpFadeProps = {
    children : React.ReactNode
    className ?:  string 
	hiddenY?:number
	showY?:number
}




export const AnimationUpFade = (props : AnimationUpFadeProps) => {
	
    
	const variants = { 
		hidden : {
			y:props.hiddenY ? props.hiddenY :200,
		},
		show: { 
			opacity : 100,
			y: 0 ?? props.showY
		}
	}

    
    
	return (
		<motion.div  variants={variants} className={props.className} initial="hidden" viewport={{once: true}} whileInView="show" transition={{duration: .5}}>{props.children}</motion.div>
	)
}
