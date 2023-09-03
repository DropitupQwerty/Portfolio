import React from 'react'

type AppLabelWaterMarkProps = {
    label: string
}

export const AppLabelWaterMark = (props : AppLabelWaterMarkProps) => {

	return (
		<div className='absolute -z-10 flex justify-center w-full '>
			<div className='text-[20vh] opacity-10 dark:opacity-100 font-black text-transparent uppercase '  style={{ WebkitTextStroke: '3px #333',}}>
				{props.label}
			</div>
		</div>
	)
}
