import React from 'react'
import myImage  from 'assets/myImage3.webp'
import { MySocmed } from 'utility/Social'
import { AppLabelWaterMark } from 'components/AppLabelWaterMark'
import { SideLabel } from 'components/AppSideLabel'




export const About = () => {



	return (
		<div className=' relative flex  items-center'>
			<SideLabel label='ABOUT ME'/>
			<div className='container mx-auto'>
				<div className=' h-full  rounded-xl flex items-center justify-between relative p-[5%] w-full ' >
					<AppLabelWaterMark label='ABOUT ME'/>
					<div className='gap-10 flex flex-col'>
						{MySocmed.map((social , index)=>
							<div key={index} className='text-[5vh] dark:text-primary-white'>
								{social.icon}

							</div>)}
					</div>
					<div>
						<div className='rounded-full  max-h-[60vh] w-[60vh] overflow-hidden '>
							<img className='h-full w-full object-cover' src={myImage}/>
						</div>
					</div>

					<div className=' text-[3vh] text-justify w-1/2 indent-10'>
						<p className=' leading-1  font-DotGothic dark:text-primary-white'>Hello! I am a fresh graduate student that aspires to be a skilled web developer , capable of creating user-friendly online apps, knowledgable in<span className=' text-primary-orange font-bold'> Java, JavaScript, TypeScript</span>, and informed about
			popular frameworks such as <span className=' text-primary-orange font-bold'>React TS and JS</span>. outstanding debugging and issue-solving
			abilities, a keen eye for detail, and a passion for producing high-caliber code.
						</p>
					</div>
				</div>

			</div>
		</div>
	)
}
