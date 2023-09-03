import React from 'react'
import { SplashScreen } from 'page/SplashScreen'
import { NavigationBar } from 'components/NavigationBar'
import { BsArrowDown, BsMouseFill } from 'react-icons/bs'





type LayoutProps = {
    children : React.ReactNode
}



export const Layout = (props : LayoutProps) => {

	
	return (
		<div className='z-[99] relative select-none h-screen w-screen overflow-auto no-scrollbar   scroll-smooth '>
			<NavigationBar/>
			<div className='flex flex-col gap-4 rounded-xl'>
				{props.children}
			</div>
			<div className='fixed bottom-0 opacity-40 animate-bounce flex justify-center w-full'>
				<div className='flex-col flex items-center gap-4'>
					<BsMouseFill className="text-6xl rotate-180 "/>
					<BsArrowDown className="text-4xl"/>
				</div>
			</div>

		</div>
		
	)
}
