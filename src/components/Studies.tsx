import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'

export const Location = () => {
	return (
		<div className='h-screen w-[45%] flex justify-end items-end sticky top-0 '>
			<div className='text-[2rem] p-[10%] text-end'>
				<div className='text-[3rem] flex items-center gap-4'><FaGraduationCap/> Bulacan State State University</div>
				<div className='text-[2rem] font-bold'>Bachelor of Science in Information Technology</div>
				<div className='text-[1.5rem]'>Major in Web and Mobile Development</div>
			</div>
		</div>
	)
}
