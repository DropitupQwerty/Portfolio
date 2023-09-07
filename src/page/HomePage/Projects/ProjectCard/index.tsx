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



	const imageY = useTransform(scrollYProgress , [0,1] , [-200,200])

	return (
		<motion.div ref={container} className='flex flex-col justify-center min-h-screen my-[10%]  lg:my-[2%]'>
			<SideLabel label={`PROJECT 0${index + 1}`}/>
							
			{/* <motion.div className='absolute text-[10vh] z-10 text-center font-black w-full overflow-hidden flex justify-center  text-transparent opacity-20 dark:opacity-100 uppercase leading-none' style={{WebkitTextStroke: '2px #333', y:imageY}}>{project.name}</motion.div> */}
			<div className='container mx-auto w-[90%] lg:w-full '>
				<div className='max-h-[15vh] overflow  relative'>
					<motion.div className='flex flex-col lg:flex-row  items-start lg:items-center lg:mx-[5%] ' >
						<div className='text-[7vh] lg:text-[15vh] self-start dark:block hidden  font-black text-transparent leading-none' style={{WebkitTextStroke: '2px #fff'}}>0{index + 1}</div>
						<div className='text-[7vh] lg:text-[15vh] self-start dark:hidden block  font-black text-transparent leading-none' style={{WebkitTextStroke: '2px #333'}}>0{index + 1}</div>
						<a className='' href={project.links} target='_blank' rel="noreferrer">
							<div className='text-[4vh] lg:text-[8vh] font-black text-primary-orange leading-none uppercase drop-shadow-lg'>{project.name}</div>
							<div className='text-[2vh] lg:text-[4vh] font-black text-primary-black  leading-none uppercase dark:text-primary-white'>{project.nameDesc}</div>
						</a>
					</motion.div>
				</div>
				<div className=' flex flex-col lg:flex-row my-[5%] justify-center w-full '>
					<div className='h-full w-full flex flex-col justify-center items-center  '>
						<a href={project.links} target='_blank' rel="noreferrer" className=' '>
							<img src={project.img} className='h-[90%] w-auto hover:scale-105  duration-200'/>
						</a>
						{/* <div className="hidden dark:block bg-white rounded-full mix-blend-screen  -z-10 absolute bg-center h-[60vh] blur-3xl opacity-10 w-[60vh]" ></div> */}

						{/* <a className='text-[2.5vh] my-2  font-bold  uppercase flex items-center gap-20'>Visit Project 
							<span className='w-[200px] h-[1px] bg-primary-black relative dark:bg-primary-white flex items-center'>
								<span className='w-[15px] -right-1 bottom-2 h-[1px] bg-primary-black dark:bg-primary-white absolute rotate-45'></span>
								<span className='w-[15px] -right-1 top-2 h-[1px] bg-primary-black dark:bg-primary-white absolute -rotate-45'></span>
							</span>
						</a> */}
					</div>
					<div className=' w-full flex flex-col justify-between my-10'>
						
						<motion.div  className='text-3xl leading-relaxed p-5 font-poppins max-h-[40vh] scroll-smooth   overflow-y-auto text-primary-black dark:text-primary-white text-justify  indent-[50px]'>
							{project.description}
						</motion.div>
						

						<motion.div  className='flex justify-between items-center my-4'>
							<div className='flex gap-5 self-end text-primary-orange dark:text-primary-white'>{project.programminglanguagesIcons.map((languge , index)=>
								<div key={index} className='text-[5vh]'>{languge.icon}</div>)}
							</div>
						</motion.div>
								
					</div>
				</div>
							
			</div>
							
		</motion.div>
	)
}
