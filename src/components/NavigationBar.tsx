import React from 'react'
import {MdDarkMode , MdLightMode} from 'react-icons/md'
import { AnimatePresence, motion } from 'framer-motion'
import { MySocmed } from 'utility/Social'
import { handleScrollToId } from 'utility/scrollToId'
import { BiX } from 'react-icons/bi'

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
			href:'home'
		},
		{
			pathname : 'About',
			href:'about'
		},
		{
			pathname : 'Skills',
			href:'skills'
		},
		{
			pathname : 'Projects',
			href:'projects'
		},
		{
			pathname : 'Contact',
			href:'contact'
		},
	]
	


	return (
		<div className='fixed flex top-0 justify-between w-full z-[99999999] '>

			<nav className=' flex justify-between items-center w-full p-10'>
				<button onClick={()=> setOpen(!open)} className='flex flex-col gap-2'>
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
					className={'bg-white p-[3%] dark:bg-[#333] backdrop-blur-md dark:text-primary-white min-h-screen   h-full w-full shadow-xl fixed overflow-hidden leading-none flex  items-end'}>

					{/* <div className='absolute w-fit text-end text-[18vh] text-transparent top-0 right-0' style={{WebkitTextStroke: '2px #333'}}>MY PORTFOLIO</div>	 */}

					<div className='relative flex w-full flex-col lg:flex-row justify-between z-10 h-full'>
						<div className='flex flex-col  lg:justify-between'>
							<div className='flex  justify-end lg:justify-start'>
								<div className='text-6xl lg:text-8xl font-normal'>
									<button onClick={()=>{ setOpen(!open) }}>
										<BiX/>
									</button>
								</div>
							</div>


							<div className='my-[5%] flex flex-col'>
								{paths.map((path , index)=> 
									<button key={index} onClick={()=>{handleScrollToId(path.href)
										setOpen(!open)}} >
										<h1 className='w-fit uppercase my-4 font-poppins text-6xl lg:text-9xl  hover:scale-105 duration-300 hover:text-primary-orange  '>{path.pathname}</h1>
									</button>
								)}  
							</div>
						</div>

						<div className='flex  items-center justify-center'>
							<div className='flex flex-row lg:flex-col gap-10 text-[6vh] lg:text-[8vh]'>
								{MySocmed.map((social,index)=>
									<a href={social.link} className='hover:scale-105' target='_blank' key={index} rel="noreferrer">
										<button className='text-primary-orange'>{social.icon}</button>
									</a>)}
							</div>
						</div>
					</div>


				</motion.div> 
					: null}
			</AnimatePresence>
		</div>
	)
}
