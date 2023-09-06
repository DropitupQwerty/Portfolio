import React  from 'react'
import { motion } from 'framer-motion'
import { AnimationUpFade } from 'components/AnimationUpFade'
import Lottie from 'lottie-react'
import ComputerAnimation from 'assets/animation_lm7ahqwu.json'
import { BsGithub } from 'react-icons/bs'

export const Header = () => {
	return (			
		<div className='min-h-screen  max-w-screen overflow-hidden  relative  flex flex-col justify-center items-center z-10 p-[5%]  ' >
		
	
			<div className='relative h-fit  flex items-center justify-center'>
				<div className=''>
					<Lottie className='h-[50vh]' animationData={ComputerAnimation}/>
				</div>

			</div>

			<div>
				<div className='uppercase text-[8vh] flex font-black  leading-none drop-shadow-lg '>
					<motion.div ><span className='tracking-wider whitespace-nowrap '>Jacob Allen</span> </motion.div>
					<motion.div ><span className='text-primary-orange tracking-widest ' style={{ WebkitTextStroke: '1px #333',}}>Valderama</span></motion.div >
				</div>
				<motion.div  className='w-fit  relative '>
					<p className='text-[3.5vh] text-end leading-none font-DotGothic  whitespace-nowrap text-primary-black  font-black tracking-wide uppercase  dark:text-primary-white flex gap-4'>YOUR ASPIRING<div className='relative'> <span className="text-primary-orange after:duration-300 after:bg-white after:dark:bg-[#333] after:animate-typing after:absolute after:h-full after:w-full after:border-l-4 after:left-0 after:border-primary-orange">Web Developer</span></div></p>
				</motion.div>
			</div>

			<div className='mt-14 flex flex-col -skew-x-12 gap-4 '>
				<a href='https://drive.google.com/file/d/1e9yyi60UF_SybvuHgRfyTUvc4Zq0i0dO/view' target='_blank' className='tracking-[8px]  text-primary-orange  text-[2.4vh] font-semibold uppercase hover:underline ' rel="noreferrer">
			DOWNLOAD RESUME
				</a>
			
			</div>
	
		</div>
		
		
	)
}

