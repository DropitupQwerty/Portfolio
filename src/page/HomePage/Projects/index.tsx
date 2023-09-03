import React from 'react'
import { projects } from 'utility/projects'
import  myImage  from 'assets/laptopImg.png'
import { SideLabel } from 'components/AppSideLabel'

export const Projects = () => {
	return (
		<div className=''>

			<div className='container mx-auto '>

				<div className=' flex items-center justify-between  my-40'>
					<span className='w-[30%] h-[2px] bg-primary-black'></span>
					<div className='text-[4vh] font-bold font-DotGothic whitespace-nowrap'>MY RECENT WORK</div>
					<span className='w-[30%] h-[2px] bg-primary-black'></span>
				</div>

				<div className=' flex flex-col gap-36'>
					{projects.map((project , index)=>
						<div key={index} className='min-h-[50vh] flex flex-col justify-center'>
							<SideLabel label={`PROJECT 0${index + 1}`}/>
							<div className='flex items-center'>
								<div className='text-[15vh] font-black text-transparent leading-none' style={{WebkitTextStroke: '2px #333'}}>0{index + 1}</div>
								<div>
									<div className='text-[8vh] font-black text-primary-orange leading-none uppercase'>{project.name}</div>
									<div className='text-[4vh] font-black text-primary-black leading-none uppercase'>{project.name}</div>
								</div>
							</div>
							<div className='h-[40vh] flex '>
								<div className='h-full w-full'>
									<img src={myImage} className='h-full w-auto '/>
								</div>
								<div className=' w-[80%] flex flex-col justify-between'>
									<div className='text-[3vh] font-DotGothic max-h-[30vh] scroll-smooth overflow-y-auto text-primary-orange text-justify'>{project.description}</div>
									
									<div className='flex gap-5 self-end'>{project.programminglanguagesIcons.map((languge , index)=>
										<div key={index} className='text-[5vh]'>{languge.icon}</div>)}
									</div>
								</div>
							</div>
							<a className='text-[2.5vh] my-5 mx-10  font-bold underline underline-offset-4 uppercase flex items-center gap-20'>Visit Project 
								<span className='w-[200px] h-[1px] bg-primary-black relative  flex items-center'>
									<span className='w-[15px] -right-1 bottom-2 h-[1px] bg-primary-black absolute rotate-45'></span>
									<span className='w-[15px] -right-1 top-2 h-[1px] bg-primary-black absolute -rotate-45'></span>
								</span>
							</a>
						</div>)}
				</div>



			</div>





		</div>
	)
}
