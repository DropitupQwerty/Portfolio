import React from 'react'
import { SideLabel } from 'components/AppSideLabel'
import { ProgrammingLanguages } from 'utility/programmingLanguages'
import { AnimationUpFade } from 'components/AnimationUpFade'
import { AppLabelWaterMark } from 'components/AppLabelWaterMark'
import { useScroll, useTransform } from 'framer-motion'


export const Skills = () => {

	const container = React.useRef(null)
	const { scrollYProgress } = useScroll({
		target:container,
		offset:['start end' , 'end start']
	})

	const y = useTransform(scrollYProgress,[0,1] , [-100,100])



	return (
		<div  ref={container} className='relative flex  items-center my-40  h-[60vh] overflow-hidden '>
			<SideLabel label='SKILL SET' />
			<AppLabelWaterMark label='TECH STACKS' y={y}/>
			<AnimationUpFade  className='container mx-auto relative flex flex-col items-center justify-center '>
				<div className='overflow-hidden '>
					<AnimationUpFade hiddenY={30} >
						<div className='text-[5vh] my-20  uppercase tracking-widest font-bold font-DotGothic'><span className="text-primary-orange">What I&apos;m capable of?</span> </div>
					</AnimationUpFade>
				</div>
				<div className=' flex gap-10 flex-wrap w-[80%] justify-center'>
					{
						ProgrammingLanguages.map((language , index) => 
							<div key={index} className='flex flex-col items-center'>
								<div className='text-[7vh] text-primary-black dark:text-primary-white' style={{color: language.color}} >
									{language.icon}
								</div>
								<div className='text-[1.8vh] text-primary-black dark:text-primary-white font-DotGothic'>{language.name}</div>
							</div>
						)
					}
				</div>
			</AnimationUpFade>
		</div>
	)
}
