import React from 'react'
import { MotionValue, motion } from 'framer-motion'

type AppLabelWaterMarkProps = {
    label: string
	y?:MotionValue
	x?:MotionValue
	className?: string
}

export const AppLabelWaterMark = (props : AppLabelWaterMarkProps) => {

	return (
		<div className='absolute -z-10 flex justify-center w-full '>
			<motion.div className={`text-[25vh] opacity-10 hidden lg:block  font-black text-transparent uppercase  ${props.className}`}  style={{ WebkitTextStroke: '3px #333', y:props.y , x:props.x}}>
				{props.label}
			</motion.div>
		</div>
	)
}
