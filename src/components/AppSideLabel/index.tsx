import React from 'react'


type SideLabelProps = { 
    label:string
}


export const SideLabel = (props : SideLabelProps) => {
	return (
		<div className=' absolute left-5  font-semibold  text-[2vh]  -rotate-90'>
			<div className='flex gap-5 items-center'>
				{props.label}
				<span className='w-[100px] h-[1px] bg-black'></span>
			</div>
		</div>
	)
}
