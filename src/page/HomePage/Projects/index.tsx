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

				<AnimationUpFade>
					<div className='gap-20 flex items-center justify-center'>
						<div className="container w-[90%]  text-2xl italic justify-center text-primary-black text-justify dark:text-primary-white font-poppins">
					While I have worked on several other impactful projects in a professional capacity, they are protected under {' '}
							<span className='text-primary-orange font-semibold'>
					non-disclosure agreements
							</span>  and cannot be showcased here. I&apos;m happy to discuss my experience and contributions in more detail during a conversation.
						</div>
					</div>
				</AnimationUpFade>
			</div>
		</div>
	)
}
