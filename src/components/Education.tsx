import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'

export const Education = () => {
	return (
		<div className='h-screen flex  flex-col sticky top-0 '>
			<div className='lg:max-w-[50%] flex  w-full'>
				<div className='p-[10%] pt-[15%] '>
					<div className='text-[2vh] flex  items-center gap-5 tracking-wide'><FaGraduationCap/> College Graduate at Bulacan State University </div>
					<div className='text-[2vh] font-bold tracking-wide dark:text-primary-blue'>Bachelor of Science in Information Technology</div>
					<div className='text-[2vh]'>Major in Web and Mobile Development</div>
				</div>
			</div>
		
		</div>	
	)
}
