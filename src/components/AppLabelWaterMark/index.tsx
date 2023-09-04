import React from 'react'
import { MotionValue, motion } from 'framer-motion'

type AppLabelWaterMarkProps = {
    label: string
	y?:MotionValue
	x?:MotionValue
}

export const AppLabelWaterMark = (props : AppLabelWaterMarkProps) => {

	return (
		<div className='absolute -z-10 flex justify-center w-full '>
			<motion.div className='text-[25vh] opacity-20 dark:opacity-100 font-black text-transparent uppercase'  style={{ WebkitTextStroke: '3px #333', y:props.y , x:props.x}}>
				{props.label}
			</motion.div>
		</div>
	)
}
