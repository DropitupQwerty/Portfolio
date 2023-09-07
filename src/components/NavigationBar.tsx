import React from 'react'
import {MdDarkMode , MdLightMode} from 'react-icons/md'
import { AnimatePresence, motion } from 'framer-motion'
import { MySocmed } from 'utility/Social'
import { BiArrowToLeft } from 'react-icons/bi'

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


	const paths = [
		{
			pathname : 'Home',
			href:'#home'
		},
		{
			pathname : 'About',
			href:'#home'
		},
		{
			pathname : 'Skills',
			href:'#home'
		},
		{
			pathname : 'Projects',
			href:'#home'
		},
		{
			pathname : 'Contact',
			href:'#home'
		},
	]
	


	return (
		<div className='fixed flex top-0 justify-between w-full z-[99999999] '>

			<nav className=' flex justify-between items-center w-full p-10'>
				<button onClick={()=> setOpen(!open)} className='flex flex-col gap-4'>
					<span className='h-2 rounded-full w-[80px] bg-primary-orange dark:bg-primary-white'></span>
					<span className='h-2 rounded-full w-[60px] bg-primary-orange dark:bg-primary-white'></span>
					<span className='h-2 rounded-full w-[70px] bg-primary-orange dark:bg-primary-white'></span>
				</button>
				<div className=''>
					<button className='flex  text-[4rem] gap-6 uppercase  text-primary-black ' onClick={()=>setIsDarkMode(!isDarkMode)}>
						{ !isDarkMode ?
							<MdLightMode className="border-2  animate-spin border-primary-orange text-primary-orange p-3 m-2 duration-[50ms] rounded-full hover:bg-primary-orange hover:text-primary-white "/> :
							<MdDarkMode className="border-2  animate-spin text-primary-white duration-300 border-primary-white p-3 m-2 rounded-full hover:bg-primary-white hover:text-primary-black "/>}
					</button>
				</div> 
			</nav>


			<AnimatePresence initial={false}>
				{open ?	<motion.div 
					initial={{ opacity: 0 , x: -1000 }}
					animate={{ opacity: 1 ,x:0 }}
					exit={{ opacity: 0 , x: -1000 }}
					transition={{duration:1}}
					className={'bg-white p-[3%] dark:bg-black/80 backdrop-blur-md dark:text-primary-white min-h-screen   h-full w-full shadow-xl fixed overflow-hidden leading-none flex  items-end'}>

					{/* <div className='absolute w-fit text-end text-[18vh] text-transparent top-0 right-0' style={{WebkitTextStroke: '2px #333'}}>MY PORTFOLIO</div>	 */}

					<div className='relative flex w-full flex-col lg:flex-row justify-between z-10 h-full'>
						<div className='flex flex-col  lg:justify-between'>
							<div className='flex  justify-end lg:justify-start'>
								<div className='text-4xl lg:text-6xl font-normal'>
									<button onClick={()=> setOpen(!open)}>
									Return 
									</button>
								</div>
							</div>


							<div className='my-[5%] '>
								{paths.map((path , index)=> 
									<div key={index}>
										<h1 className='w-fit uppercase my-4 font-poppins text-6xl lg:text-9xl  hover:scale-105 duration-300 hover:text-primary-orange  '>{path.pathname}</h1>
									</div>
								)}  
							</div>
						</div>

						<div className='flex  items-center justify-center'>
							<div className='flex flex-row lg:flex-col gap-10 text-[6vh] lg:text-[8vh]'>
								{MySocmed.map((social,index)=>
									<div key={index}>
										<button className='text-primary-orange'>{social.icon}</button>
									</div>)}
							</div>
						</div>
					</div>


				</motion.div> 
					: null}
			</AnimatePresence>
		</div>
	)
}
