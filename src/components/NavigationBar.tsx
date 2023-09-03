import React from 'react'
import {MdDarkMode , MdLightMode} from 'react-icons/md'
import { BiExit, BiX } from 'react-icons/bi'
import { motion } from 'framer-motion'

export const NavigationBar = () => {
	const [open , setOpen] = React.useState<boolean>(false)
	const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false)

	

	React.useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
		localStorage.setItem('darkMode', isDarkMode.toString())
	}, [isDarkMode])




	// const animateNavigationBar = { 
	// 	open : { 
	// 		opacity: 1,
	// 		y:0,
	// 		display:'flex'
	// 	},
	// 	close:{
	// 		opacity: 0,
	// 		x:-1000,
	// 		transitionEnd:{
	// 			display:'none'
	// 		}
	// 	}
	// }

	// const paths = [
	// 	{
	// 		pathname : 'Home',
	// 		href:'#home'
	// 	},
	// 	{
	// 		pathname : 'About',
	// 		href:'#home'
	// 	},
	// 	{
	// 		pathname : 'Skills',
	// 		href:'#home'
	// 	},
	// 	{
	// 		pathname : 'Projects',
	// 		href:'#home'
	// 	},
	// 	{
	// 		pathname : 'Get in Touch',
	// 		href:'#home'
	// 	},
	// ]
	


	return (
		<div className='absolute flex top-0 justify-between w-full z-[99999999] '>

			<nav className=' flex justify-between items-center w-full p-10'>
				<button onClick={()=> setOpen(!open)} className='flex flex-col gap-4'>
					<span className='h-2 rounded-full w-[80px] bg-primary-orange '></span>
					<span className='h-2 rounded-full w-[60px] bg-primary-orange '></span>
					<span className='h-2 rounded-full w-[70px] bg-primary-orange '></span>
				</button>
				<div className=''>
					<button className='flex  text-[4rem] gap-6 uppercase  text-primary-black ' onClick={()=>setIsDarkMode(!isDarkMode)}>
						{ !isDarkMode ?
							<MdLightMode className="border-2  animate-spin border-primary-orange text-primary-orange p-3 m-2 duration-[50ms] rounded-full hover:bg-primary-orange hover:text-primary-white "/> :
							<MdDarkMode className="border-2  animate-spin text-primary-white duration-300 border-primary-white p-3 m-2 rounded-full hover:bg-primary-white hover:text-primary-black "/>}
					</button>
				</div> 
			</nav>


			{/* <motion.div 
				variants={animateNavigationBar}
				animate={open ? 'open' : 'close'}
				transition={{duration:1}}
				className={'bg-white dark:bg-primary-black dark:text-primary-white min-h-screen text-[12vh] font-bold  h-full w-full shadow-xl fixed overflow-hidden leading-none flex  items-end'}>

				<div className='w-[10%] h-full bg-black'>
	
				</div>
				<div>
					<div className='h-full flex  '>
						<div className=' top-0 left-0  my-2'>
							<button onClick={()=> setOpen(!open)}>
								<BiX/>
							</button>
						</div>
					</div>


					<div className=''>
						{paths.map((path , index)=> 
							<div key={index}>
								<h1 className='w-fit font-extrabold  hover:scale-105 duration-300 hover:text-primary-orange  '>{path.pathname}</h1>
							</div>
						)}  
					</div>
				</div>


			</motion.div> */}
		</div>
	)
}
