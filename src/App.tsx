import React from 'react'

import { HomePage } from 'page/HomePage'
import { ParticlesBackground } from 'components/ParticlesBackground'
import { CursorGlow } from 'components/CursorGlow'

function App() {


	return (
		<div className='dark:text-primary-white text-primary-black dark:bg-[#111827] duration-300' >
			<div className='opacity-40 '>
				<ParticlesBackground/>
			</div>
			<CursorGlow/>
			<HomePage/>
		</div>
	)
}

export default App
