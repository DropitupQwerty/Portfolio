import React from 'react'
import { projects } from 'utility/projects'
import { ProjectCard } from 'page/HomePage/Projects/ProjectCard'
import { AnimationUpFade } from 'components/AnimationUpFade'

export const Projects = () => {


	return (
		<div className=' dark:bg-transparent '>
			<div className=' '>
				<div className='container  mx-auto flex items-center justify-center  my-[10%]'>
					{/* <span className='w-[30%] h-[2px] bg-primary-black dark:bg-primary-white'></span> */}
					<div className='text-7xl font-bold font-DotGothic whitespace-nowrap text-primary-orange'>MY RECENT WORK</div>
					{/* <span className='w-[30%] h-[2px] bg-primary-black dark:bg-primary-white'></span> */}
				</div>

				<div className=' flex flex-col gap-20   duration-300  relative '>
					{projects.map((project , index)=>
						<AnimationUpFade key={index} >
							<ProjectCard  project={project} index={index}/>
						</AnimationUpFade>
					)}
				</div>
			</div>
		</div>
	)
}
