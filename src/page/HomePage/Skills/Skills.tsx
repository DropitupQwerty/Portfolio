import React from 'react'
import { SideLabel } from 'components/AppSideLabel'
import { ProgrammingLanguages } from 'utility/programmingLanguages'
import { AnimationUpFade } from 'components/AnimationUpFade'
import Lottie from 'lottie-react'
import AnimationData from 'assets/animation_lm80jo93.json'


export const Skills = () => {




	return (
		<div  className='relative flex  items-center my-40  '>
			<SideLabel label='SKILL SET' />
		
			<AnimationUpFade  className='container mx-auto relative flex items-center  justify-center '>
				<AnimationUpFade hiddenY={30} className='flex flex-col overflow-hidden w-full p-[1%]' >

					<div className='text-5xl   uppercase tracking-widest font-bold font-DotGothic'><span className="text-primary-orange">What I&apos;m capable of?</span> </div>
					<div>
						<p className='text-4xl leading-relaxed text-center indent-10 text-primary-black dark:text-primary-white font-DotGothic'>
        I have a versatile skill set in various programming languages and technologies. Below are some of the key languages and tools I am proficient in:
						</p>
					</div>
					<div className='flex gap-12 flex-wrap w-full justify-center my-20'>
						{
							ProgrammingLanguages.map((language , index) => 
								<div key={index} className='flex flex-col items-center'>
									<div className='text-[7vh] text-primary-black dark:text-primary-white' style={{color: language.color}} >
										{language.icon}
									</div>
									<div className='text-xl text-primary-black dark:text-primary-white font-DotGothic'>{language.name}</div>
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
