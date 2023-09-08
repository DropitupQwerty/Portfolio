import React from 'react'


type SideLabelProps = { 
    label:string
}


export const SideLabel = (props : SideLabelProps) => {
	return (
		<div className='hidden xl:flex  font-semibold overflow-visible  text-[1.3rem] justify-center   -rotate-90  h-full w-[4%]  '>
			<div className='flex gap-5  items-center tracking-widest whitespace-nowrap  justify-center'>
				{props.label}
				<span className=' h-[1px] w-[100px] bg-primary-black  dark:bg-primary-white'></span>
			</div>
		</div>
	)
}
