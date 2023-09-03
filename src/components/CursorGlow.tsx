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

	console.log(position)
    
  
	return <div className="hidden dark:block bg-blue-500 rounded-full overscroll-none -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-screen top-1/2 -z-1 absolute bg-center h-[50vh] blur-3xl opacity-10 w-[50vh]" style={{ left: position.x, top: position.y ,position:'fixed' }}></div>
}
