import React from 'react'

export const CursorGlow = () => {
	const [position, setPosition] = React.useState({ x: 300, y: 300 })

	const handleMouseMove = (event: MouseEvent) => {
		setPosition({ x: event.clientX, y: event.clientY })
	}
  
	React.useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove)
  
		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])
    
  
	return <div className="hidden dark:block bg-white rounded-full overscroll-none -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-screen top-1/2 z-10 absolute bg-center h-[20vh] blur-[100px] opacity-20 w-[20vh] " style={{ left: position.x, top: position.y ,position:'fixed' }}></div>
}
