import React from 'react'
import { SideLabel } from 'components/AppSideLabel'
import { ProgrammingLanguages } from 'utility/programmingLanguages'
import { AnimationUpFade } from 'components/AnimationUpFade'
import Lottie from 'lottie-react'
import AnimationData from 'assets/animation_lm80jo93.json'
import { AppLabelWaterMark } from 'components/AppLabelWaterMark'


export const Skills = () => {

	return (
		<div id="skills" className='relative flex  items-center lg:my-40  min-h-[80vh] mx-[2%]'>
			<SideLabel label='SKILL SET' />
			<AppLabelWaterMark label='TECH STACKS' />
		
			<AnimationUpFade  className='container mx-auto relative flex flex-col-reverse lg:flex-row items-center lg:w-full w-[80%]  justify-center '>
				<AnimationUpFade hiddenY={30} className='flex flex-col overflow-hidden w-full p-[1%]' >

					<div className='text-6xl font-[600]  uppercase tracking-widest  font-poppins'><span className="text-primary-orange">What I&apos;m capable of?</span> </div>
					<div>
						<p className='text-3xl lg:text-4xl leading-relaxed text-justify lg:indent-10 text-primary-black dark:text-primary-white font-poppins'>
						I am proficient in a variety of programming languages and technologies. The following are some of the important languages and tools in which I am proficient:
						</p>
					</div>
					<div className='flex gap-12 flex-wrap w-full justify-center my-20'>
						{
							ProgrammingLanguages.map((language , index) => 
								<div key={index} className='flex flex-col items-center'>
									<div className='text-[7vh] text-primary-black dark:text-primary-white' >
										{language.icon}
									</div>
									<div className='text-xl text-primary-black dark:text-primary-white font-poppins'>{language.name}</div>
								</div>
							)
						}
					</div>

				</AnimationUpFade>
					
				<div className='h-[50vh]  w-full j'>
					<Lottie className='h-full' animationData={AnimationData}/>
				</div>
			</AnimationUpFade>
		</div>
	)
}
