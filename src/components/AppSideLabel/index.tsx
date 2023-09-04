import React from 'react'


type SideLabelProps = { 
    label:string
}


export const SideLabel = (props : SideLabelProps) => {
	return (
		<div className=' absolute max-w-screen overflow-hidden -left-0 font-semibold  text-[2vh]  -rotate-90'>
			<div className='flex gap-5 items-center'>
				{props.label}
				<span className='w-[100px] h-[1px] bg-primary-black dark:bg-primary-white'></span>
			</div>
		</div>
	)
}
