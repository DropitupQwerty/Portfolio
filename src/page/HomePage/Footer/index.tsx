import React from 'react'

export const Footer = () => {
	return (
		<div className=' flex flex-col items-center'>
			<div className='my-40 text-[3.5vh]  flex justify-center'>
				<div>
					<div className='font-semibold italic uppercase'>
            &quot;Mistakes are the seeds from which trees of knowledge grow&quot;
					</div>
					<div className='text-[3vh] text-center text-primary-orange'>Anonymous</div>
				</div>
			</div>

			<div className='text-[2vh] p-4 opacity-60'>
                ©2022 Jacob Allen Valderama, Created from React , Framer Motion      
			</div>
		</div>
	)
}
