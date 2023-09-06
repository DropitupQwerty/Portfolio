import React  from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimationUpFade } from 'components/AnimationUpFade'
import  myImage  from 'assets/myImage4.png'
import { AppLabelWaterMark } from 'components/AppLabelWaterMark'


export const Header = () => {

	const container = React.useRef(null)
	const {scrollYProgress} = useScroll({
		target : container,
		offset: ['start end' , 'end start']
	})



	const imageY = useTransform(scrollYProgress , [0,1] , [-200,200])
	const bgY = useTransform(scrollYProgress , [1,0] , [100,100])



	return (			
		<div ref={container} className='min-h-screen  max-w-screen overflow-hidden  relative  flex flex-col justify-center items-center z-10 ' >	
			<div className='relative h-fit  flex items-center justify-center rounded-full '>
				{/* <div className=" bg-primary-orange rounded-full overscroll-none  pointer-events-none mix-blend-screen  -z-10 absolute bg-center h-[40vh]  w-[50vh]" ></div> */}
				<AnimationUpFade >
			

					<div className=' shadow-sm relative rounded-full h-[60vh] w-[60vh] flex justify-center '>
						<motion.div className='rounded-full bg-primary-orange  h-full w-full flex items-center absolute -z-[20]' >
							<AppLabelWaterMark label='PORTFOLIO' className="" y={bgY}/>
							{/* <motion.img className='h-[150%]  object-cover  w-full' src={myImage2} /> */}
						</motion.div>
						<div className='h-full w-full  overflow-hidden rounded-full'>
							<div className='relative h-[200%]  z-20 drop-shadow-md' >
								<motion.img style={{y:imageY}} className='h-full w-auto object-cover' src={myImage}/>
							</div>
						</div>
					</div>
				</AnimationUpFade>
			</div>

			<div>
				<div className='overflow h-fit'>
					<div className='uppercase text-9xl flex font-black  leading-none drop-shadow-lg '>
						<motion.div ><span className='tracking-wider whitespace-nowrap '>Jacob Allen</span> </motion.div>
						<motion.div ><span className='text-primary-orange tracking-widest ' style={{ WebkitTextStroke: '1px #333',}}>Valderama</span></motion.div >
					</div>
				</div>
				<motion.div  className='w-fit  relative '>
					<p className='text-5xl text-end leading-none font-DotGothic  whitespace-nowrap text-primary-black  font-black tracking-wide uppercase  dark:text-primary-white flex gap-4'>YOUR ASPIRING<div className='relative'> <span className="text-primary-orange after:duration-300 after:bg-white after:dark:bg-[#333] after:animate-typing after:absolute after:h-full after:w-full after:border-l-4 after:left-0 after:border-primary-orange">Web Developer</span></div></p>
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

