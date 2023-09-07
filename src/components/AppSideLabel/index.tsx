import React from 'react'


type SideLabelProps = { 
    label:string
}


export const SideLabel = (props : SideLabelProps) => {
	return (
		<div className='hidden lg:block absolute max-w-screen overflow-hidden -left-[4%] font-semibold  text-[1.3rem]  -rotate-90'>
			<div className='flex gap-5 items-center tracking-widest'>
				{props.label}
				<span className='w-[100px] h-[1px] bg-primary-black  dark:bg-primary-white'></span>
			</div>
		</div>
	)
}
