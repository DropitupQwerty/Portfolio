import React from 'react'
import { projects } from 'utility/projects'
import { ProjectCard } from 'page/HomePage/Projects/ProjectCard'
import { AnimationUpFade } from 'components/AnimationUpFade'

export const Projects = () => {


	return (
		<div id="projects" className=' dark:bg-transparent '>
			<div className=' '>
				<div className='container gap-20  mx-auto flex items-center justify-center  '>
				
					<div className='text-5xl lg:text-7xl font-[600] mb-[5%] font-poppins whitespace-nowrap text-primary-orange'>MY RECENT WORKS</div>
				
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
