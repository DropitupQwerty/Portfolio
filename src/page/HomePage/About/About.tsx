import React from 'react'
import { MySocmed } from 'utility/Social'
import { SideLabel } from 'components/AppSideLabel'
import { AnimationUpFade } from 'components/AnimationUpFade'
import Lottie from 'lottie-react'
import  ComputerAnimation  from 'assets/animation_lm7ahqwu.json'





export const About = () => {


	return (
		<div className=' relative flex overflow-hidden items-center ' >
			<SideLabel label='ABOUT ME' />
			<div className='container mx-auto'>
	
				<AnimationUpFade>
					<div className=' h-full z-10  rounded-xl flex flex-c items-center justify-between relative w-full ' >
						<div className='gap-10 flex flex-col'>
							{MySocmed.map((social , index)=>
								<a href={social.link} target='_blank' key={index} className='text-[5vh] hover:scale-105 dark:text-primary-white' rel="noreferrer">
									{social.icon}
								</a>)}
						</div>
						<div className='w-[40%] p-[2%]'>
							<div className=''>
								<Lottie className='h-[50vh]' animationData={ComputerAnimation}/>
							</div>
						</div>

						<div className=' text-justify w-[40%]'>
							<div className='text-5xl tracking-widest font-bold font-DotGothic'><span className="text-primary-orange">WHO AM I?</span> </div>
							<div className='indent-10 leading-relaxed text-4xl font-DotGothic dark:text-primary-white'>
								<p className='mb-10'>Hello! I am a fresh graduate student that aspires to be a skilled web developer , capable of creating user-friendly online apps, proficient in <span className='text-primary-orange'>Java, JavaScript, TypeScript </span> and informed about popular frameworks such as React . outstanding debugging and issue-solving abilities, a keen eye for detail, and a passion for producing high-caliber code.
								</p>
								
							</div>
						</div>
					</div>

				</AnimationUpFade>
			</div>
		</div>
	)
}
