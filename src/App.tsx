import React from 'react'

import { HomePage } from 'page/HomePage'
import { ParticlesBackground } from 'components/ParticlesBackground'
import { CursorGlow } from 'components/CursorGlow'

function App() {


	return (
		<div className='dark:text-primary-white text-primary-black dark:bg-black/80 duration-300   no-scrollbar' >
			<CursorGlow/>
			<div className='z-10  no-scrollbar '>
				<HomePage/>
			</div>
			<div className='opacity-40 -z-10'>
				<ParticlesBackground/>
			</div>
		</div>
	)
}

export default App
