import React  from 'react'
import { motion } from 'framer-motion'


const animateLeft = {
	initial : { 
		opacity:100,
		x:0,
	},
	hidden: { 
		opacity:0,
		x:400,
	},

}

const animateRight = {
	initial : { 
		opacity:100,
		x:0,
	},
	hidden: { 
		opacity:0,
		x:-400,
	},

}

const animateFadeIn ={
	initial : { 

		opacity:100
	},
	hidden: { 
	
		opacity:0
	},

}



export const Header = () => {
	return (			
		<div className='min-h-screen w-full  relative  flex flex-col justify-center items-center z-10  rounded-2xl p-[5%]  ' >
			<div className="hidden dark:block bg-white rounded-full overscroll-none  pointer-events-none mix-blend-screen  -z-1 absolute bg-center h-[60vh] blur-3xl opacity-10 w-[60vh]" ></div>
			
			<div className="">
				<div className='uppercase text-[12vh] font-black  leading-none drop-shadow-lg italic'>
					<motion.div variants={animateLeft} initial="hidden" whileInView="initial" transition={{duration:1}}><span className='tracking-wider whitespace-nowrap '>Jacob Allen</span> </motion.div>
					<motion.div variants={animateRight} initial="hidden" whileInView="initial" transition={{duration:1}}><span className='text-primary-orange tracking-widest ' style={{ WebkitTextStroke: '2px #333',}}>Valderama</span></motion.div >
				</div>
				<motion.div variants={animateFadeIn} initial="hidden" whileInView="initial" className='w-fit  relative '>
					<p className='text-[3.5vh] text-end leading-none font-DotGothic  whitespace-nowrap text-primary-black  font-black tracking-wide uppercase  dark:text-primary-white'>YOUR ASPIRING Front End Developer</p>
				</motion.div>
			</div>

			<div className='mt-14 flex flex-col'>
				<button className='text-primary-orange text-[3vh] font-black uppercase hover:underline'>
			DOWNLOAD RESUME
				</button>
			
			</div>

	

		</div>
		
		
	)
}

