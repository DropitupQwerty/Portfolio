import React from 'react'
import { SideLabel } from 'components/AppSideLabel'
import { motion } from 'framer-motion'
import { ProgrammingLanguages } from 'utility/programmingLanguages'


export const Skills = () => {

	const variants = {
		hidden : {
			y:100,
		},
		show: {
			y: 0
		}
	}


	return (
		<div  className='relative flex  items-center my-40 h-fit  overflow-hidden'>
			<SideLabel label='SKILL SET' />

			<motion.div variants={variants} initial="hidden"  whileInView="show" transition={{duration: 1}} className='container mx-auto relative flex items-center justify-center '>
				<div className=' flex gap-10 flex-wrap w-[80%] justify-center'>
					{
						ProgrammingLanguages.map((language , index) => 
							<div key={index} className='flex flex-col items-center'>
								<div className='text-[7vh] text-primary-black dark:text-primary-orange ' >
									{language.icon}
								</div>
								<div className='text-[1.5vh] text-primary-black dark:text-primary-white font-DotGothic'>{language.name}</div>
							</div>
						)
					}
				</div>
			</motion.div>
		</div>
	)
}
