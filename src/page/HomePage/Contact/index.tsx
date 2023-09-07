import { AnimationUpFade } from 'components/AnimationUpFade'
import { SideLabel } from 'components/AppSideLabel'
import React from 'react'
import { MySocmed } from 'utility/Social'

export const Contact = () => {
	return (
		<div id="contact" className='relative items-center flex my-[40%] lg:my-[10%] '>
			<SideLabel label='CONTACT'/>
			<AnimationUpFade className='container mx-auto flex flex-col items-center justify-center w-[80%] lg:w-full'>
				<div className='my-10'>
					<div className='text-center text-7xl font-bold'>GET IN TOUCH</div>
					<div className='text-center text-4xl uppercase font-poppins opacity- text-primary-orange'>write, email, connect, talk</div>
				</div>

				
				<div className='w-1/2 flex flex-col gap-10'>
					<div className=' text-[2vh] w-full '>
						<label className='block font-semibold uppercase tracking-widest'>Email</label>
						<input className='p-4 w-full outline-primary-orange dark:text-primary-black bg-white  border rounded-lg shadow-md'/>
					</div>
					<div className=' text-[2vh] w-full'>
						<label className='block font-semibold uppercase tracking-widest '>Message</label>
						<textarea rows={5} className='p-4 dark:text-primary-black outline-primary-orange w-full bg-white max-h-[400px] border min-h-[200px] rounded-lg shadow-md'/>
					</div>
					<div>
						<button className='text-[2vh] bg-primary-orange p-4 px-6 font-bold rounded-lg text-primary-white'>SUBMIT</button>
					</div>
				</div>

				<div className='my-10'>
					<div className='text-4xl text-center font-poppins  tracking-widest text-primary-orange'>YOU CAN VISIT ME OR MESSAGE ME VIA:</div>
					<div className='flex gap-10 justify-center mt-12'>
						{MySocmed.map((social,index)=>
							<a href={social.link} target='_blank' key={index} className='text-[4vh] ' rel="noreferrer">
								{social.icon}
							</a>)}
					</div>
				</div>
			</AnimationUpFade>
		</div>
	)
}
