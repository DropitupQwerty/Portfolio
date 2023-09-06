import React from 'react'
import myImage  from 'assets/myImage4.png'
import { MySocmed } from 'utility/Social'
import { AppLabelWaterMark } from 'components/AppLabelWaterMark'
import { SideLabel } from 'components/AppSideLabel'
import { useScroll, useTransform , motion} from 'framer-motion'
import { AnimationUpFade } from 'components/AnimationUpFade'




export const About = () => {

	const container = React.useRef(null)
	const { scrollYProgress } = useScroll({
		target:container,
		offset:['start end' , 'end start']
	})

	const y = useTransform(scrollYProgress,[0,1] , [-100,100])


	return (
		<div ref={container} className=' relative flex overflow-hidden items-center '>
			<SideLabel label='ABOUT ME' />
			<div className='container mx-auto'>
	
				<AnimationUpFade>
					<div className=' h-full z-10  rounded-xl flex items-center justify-between relative w-full ' >
						<AppLabelWaterMark  label='ABOUT ME'  y={y}/>				
						<div className='gap-10 flex flex-col'>
							{MySocmed.map((social , index)=>
								<a href={social.link} target='_blank' key={index} className='text-[5vh] hover:scale-105 dark:text-primary-white' rel="noreferrer">
									{social.icon}
								</a>)}
						</div>
						<div>
							<div className='rounded-full shadow-sm relative  max-h-[60vh] w-[60vh] overflow-hidden '>
					
								<motion.div className='  dark:bg-primary-white h-full w-full absolute -z-[20]'>
								</motion.div>
								<motion.div className='relative z-20 drop-shadow-md'>
									<img className='h-full w-full  object-cover' src={myImage}/>
								</motion.div>
							</div>
						</div>

						<div className=' text-[2.3vh] text-justify w-1/2 '>
							<div className='text-[4vh] tracking-widest font-bold font-DotGothic'><span className="text-primary-orange">WHO AM I?</span> </div>

							<p className='indent-10 leading-1  font-DotGothic dark:text-primary-white'>Hello! I am a fresh graduate student that aspires to be a skilled web developer , capable of creating user-friendly online apps, knowledgable in<span className=' text-primary-orange font-bold'> Java, JavaScript, TypeScript</span>, and informed about
			popular frameworks such as <span className=' text-primary-orange font-bold'>React TS and JS</span>. outstanding debugging and issue-solving
			abilities, a keen eye for detail, and a passion for producing high-caliber code.
							</p>
						</div>
					</div>

				</AnimationUpFade>
			</div>
		</div>
	)
}
