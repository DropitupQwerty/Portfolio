import React  from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimationUpFade } from 'components/AnimationUpFade'
import  myImage  from 'assets/myImage4.webp'
import  myImage2  from 'assets/bgImage.webp'


export const Header = () => {

	const container = React.useRef(null)
	const {scrollYProgress} = useScroll({
		target : container,
		offset: ['start end' , 'end start']
	})



	const imageY = useTransform(scrollYProgress , [0,1] , [-200,200])



	return (			
		<div id="home" ref={container} className='min-h-[80vh] lg:min-h-screen  max-w-screen overflow-hidden container mx-auto gap-10  relative  flex flex-col justify-center items-center z-10 ' >	
			<div className='relative h-fit  w-full  flex items-center justify-center rounded-full '>
				{/* <div className=" bg-primary-orange rounded-full overscroll-none  pointer-events-none mix-blend-screen  -z-10 absolute bg-center h-[40vh]  w-[50vh]" ></div> */}
				<div className=' shadow-sm relative overflow-hidden rounded-full h-[30vh] w-[30vh]  lg:h-[50vh] lg:w-[50vh] flex justify-center '>
					<motion.div className='shadow-xl rounded-full bg-primary-orange dark:bg-primary-white h-full w-full flex items-center absolute ' >
						<motion.img className='h-[150%]  object-cover  w-full' src={myImage2} />
					</motion.div>
					<AnimationUpFade >
						<div className='h-full w-full z-20 flex justify-center overflow-hidden rounded-full'>
							<div className='relative h-[200%]   drop-shadow-md' >
								<motion.img style={{y:imageY}} className='h-full w-auto object-cover' src={myImage}/>
							</div>
						</div>
					</AnimationUpFade>
				</div>
			</div>

			<div className=''>
				<div>
					<div className='overflow h-fit'>
						<div className='uppercase text-7xl text-center  font-poppins  lg:text-[7vh] lg:flex   font-black  leading-none '>
							<motion.div ><span className='tracking-wider whitespace-nowrap '>Jacob Allen</span> </motion.div>
							<motion.div ><span className='text-primary-orange tracking-widest '>Valderama</span></motion.div >
						</div>
					</div>
					<motion.div  className='w-fit  relative '>
						<p className=' text-4xl lg:text-6xl text-end leading-none font-DotGothic  whitespace-nowrap text-primary-black  font-black tracking-wide uppercase  dark:text-primary-white flex gap-4'>YOUR ASPIRING<div className='relative'> <span className="text-primary-orange after:duration-300 after:bg-white after:dark:bg-[#333] after:animate-typing after:absolute after:h-full after:w-full after:border-l-4 after:left-0 after:border-primary-orange">Web Developer</span></div></p>
					</motion.div>
				</div>

				<div className='mt-14 flex flex-col  gap-4 text-center'>
					<a href='https://drive.google.com/file/d/1e9yyi60UF_SybvuHgRfyTUvc4Zq0i0dO/view' target='_blank' className='tracking-[8px]  text-primary-orange  text-[2.4vh] font-poppins uppercase hover:underline ' rel="noreferrer">
			DOWNLOAD RESUME
					</a>
			
				</div>
	
			</div>
		</div>
		
		
	)
}

