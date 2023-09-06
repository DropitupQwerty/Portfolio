import { SideLabel } from 'components/AppSideLabel'
import React from 'react'
import { MySocmed } from 'utility/Social'

export const Contact = () => {
	return (
		<div className='relative items-center flex my-20 '>
			<SideLabel label='CONTACT'/>
			<div className='container mx-auto flex flex-col items-center justify-center'>
				<div className='my-10'>
					<div className='text-center text-6xl font-bold'>GET IN TOUCH</div>
					{/* <div className='text-center text-4xl font-bold font-DotGothic opacity- text-primary-orange'>write, email, connect, talk</div> */}
				</div>

				{/* 
				<div className='w-1/2 flex flex-col gap-10'>
					<div className=' text-[2vh] w-full '>
						<label className='block font-semibold uppercase tracking-widest'>Email</label>
						<input className='p-4 w-full dark:text-primary-black bg-white  border rounded-lg shadow-md'/>
					</div>
					<div className=' text-[2vh] w-full'>
						<label className='block font-semibold uppercase tracking-widest '>Message</label>
						<textarea rows={5} className='p-4 dark:text-primary-black w-full bg-white max-h-[400px] border min-h-[200px] rounded-lg shadow-md'/>
					</div>
					<div>
						<button className='text-[2vh] bg-primary-orange p-4 px-6 font-bold rounded-lg text-primary-white'>SUBMIT</button>
					</div>
				</div> */}

				<div className='my-10'>
					<div className='text-4xl font-DotGothic font-bold tracking-widest text-primary-orange'>YOU CAN VISIT ME OR MESSAGE ME VIA:</div>
					<div className='flex gap-10 justify-center mt-12'>
						{MySocmed.map((social,index)=>
							<div key={index} className='text-[4vh] '>
								{social.icon}
							</div>)}
					</div>
				</div>
			</div>
		</div>
	)
}
