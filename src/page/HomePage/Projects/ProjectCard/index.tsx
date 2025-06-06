import { SideLabel } from 'components/AppSideLabel'
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ProjectType } from 'utility/projects'

type ProjectCardProps = { 
	index: number,
	project : ProjectType
}


export const ProjectCard = ({index , project} : ProjectCardProps) => {
	const container = React.useRef(null)
	const {scrollYProgress} = useScroll({
		target : container,
		offset: ['start end' , 'end start']
	})



	const imageY = useTransform(scrollYProgress , [0,1] , [-0,50])
	return (
		<motion.div ref={container} className='flex items-center justify-center h-full my-[10%]  lg:my-[2%] mx-[2%]'>
			<SideLabel label={`PROJECT 0${index + 1}`}/>
			<div className='container mx-auto w-[90%] lg:w-full '>
				<div className=' overflow  relative '>
					<motion.div className={'flex flex-col lg:flex-row font-poppins items-start lg:items-center  '} >
						<div className='text-[5rem] lg:text-[10rem] self-start dark:block hidden  font-black text-transparent leading-none' style={{WebkitTextStroke: '1px #fff'}}>0{index + 1}</div>
						<div className='text-[5rem] lg:text-[10rem] self-start dark:hidden block  font-black text-transparent leading-none' style={{WebkitTextStroke: '1px #333'}}>0{index + 1}</div>
						<a className='' href={project.links} target='_blank' rel="noreferrer" >
							<div className='text-7xl lg:text-8xl font-black text-primary-orange leading-none uppercase '>{project.name}</div>
							<div className='text-5xl lg:text-6xl font-black text-primary-black  leading-none uppercase dark:text-primary-white'>{project.nameDesc}</div>
						</a>
					</motion.div>
				</div>
				<div className={` flex flex-col  ${index  % 2 == 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} my-[2%] justify-center w-full `}>
					<div className='h-full w-full flex flex-col justify-center items-center  '>
						<a href={project.links} target='_blank' rel="noreferrer" className='my-[6%] lg:my-0'>
							<motion.img src={project.img} className='max-h-[90%] w-auto hover:scale-105  duration-200'  style={{y:imageY}}/>
						</a>
					</div>
					<div className=' w-full flex flex-col justify-between my-10'>
						
						<motion.div  className='text-3xl leading-relaxed p-3 font-poppins max-h-[40vh] scroll-smooth   overflow-y-auto text-primary-black dark:text-primary-white text-justify  indent-[50px]'>
							{project.description}
						</motion.div>
						<motion.div  className='text-3xl p-4 leading-relaxed  font-poppins scroll-smooth  overflow-y-auto text-primary-black dark:text-primary-white text-justify  '>
							<div className='mt-4 text-3xl font-semibold font-poppins text-primary-black dark:text-primary-white'>Roles and Responsibilities</div>
							<ul className='list-disc list-inside p-4'>
								{project.rolesAndResponsibilities.map((desc, index)=> 
									<li key={index}>{desc}</li>
								)}
							</ul>
						</motion.div>

						<motion.div  className='flex justify-between items-center my-4'>
							<div className='flex flex-wrap gap-5 self-end text-primary-orange dark:text-primary-white'>{project.programminglanguagesIcons.map((languge , index)=>
								<div key={index} className='text-[5vh]'>{languge.icon}</div>)}
							</div>
						</motion.div>
					</div>
				</div>
			</div>
						
		</motion.div>
	)
}
