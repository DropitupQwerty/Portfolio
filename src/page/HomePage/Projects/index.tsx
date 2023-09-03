import React from 'react'
import { projects } from 'utility/projects'
import { SideLabel } from 'components/AppSideLabel'
import { useScroll , motion } from 'framer-motion'

export const Projects = () => {

	const ref = React.useRef(null)

	
	return (
		<div className=''>
			<div className=''>
				<div className='container mx-auto flex items-center justify-between  my-40'>
					<span className='w-[30%] h-[2px] bg-primary-black dark:bg-primary-white'></span>
					<div className='text-[4vh] font-bold font-DotGothic whitespace-nowrap text-primary-orange'>MY RECENT WORK</div>
					<span className='w-[30%] h-[2px] bg-primary-black dark:bg-primary-white'></span>
				</div>

				<div className=' flex flex-col gap-36   duration-300  relative '>
					{projects.map((project , index)=>
						<div ref={ref}  key={index} className='flex flex-col h-screen justify-center '>
							<SideLabel label={`PROJECT 0${index + 1}`}/>
							
							{/* <div className='absolute text-[15vh] text-center font-black w-full flex justify-center -z-20 text-transparent opacity-20 uppercase leading-none' style={{WebkitTextStroke: '2px #333'}}>{project.name}</div> */}
							<div className='container mx-auto '>
								<div className='flex items-center mx-[5%]'>
									<div className='text-[15vh] font-black text-transparent leading-none' style={{WebkitTextStroke: '2px #F97316'}}>0{index + 1}</div>
									<div>
										<div className='text-[8vh] font-black text-primary-orange leading-none uppercase drop-shadow-lg'>{project.name}</div>
										<div className='text-[4vh] font-black text-primary-black leading-none uppercase dark:text-primary-white'>{project.nameDesc}</div>
									</div>
								</div>
								<div className='h-[50vh] flex my-10 justify-center w-full '>
									<div className='h-full w-full flex flex-col justify-center items-center'>
										<img src={project.img} className='h-full w-auto '/>
										<a className='text-[2.5vh] my-2  font-bold underline underline-offset-4 uppercase flex items-center gap-20'>Visit Project 
											<span className='w-[200px] h-[1px] bg-primary-black relative dark:bg-primary-white flex items-center'>
												<span className='w-[15px] -right-1 bottom-2 h-[1px] bg-primary-black dark:bg-primary-white absolute rotate-45'></span>
												<span className='w-[15px] -right-1 top-2 h-[1px] bg-primary-black dark:bg-primary-white absolute -rotate-45'></span>
											</span>
										</a>
									</div>
									<div className=' w-[70%] flex flex-col justify-between'>
										<div className='text-[3vh] font-DotGothic max-h-[40vh] scroll-smooth overflow-y-auto text-primary-orange text-justify'>{project.description}</div>
							
										<div className='flex gap-5 self-end'>{project.programminglanguagesIcons.map((languge , index)=>
											<div key={index} className='text-[5vh]'>{languge.icon}</div>)}
										</div>
								
									</div>
								</div>
							
							</div>
							
						</div>)}
				</div>
			</div>





		</div>
	)
}
