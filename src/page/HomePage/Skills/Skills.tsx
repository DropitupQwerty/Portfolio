import { AppLabelWaterMark } from 'components/AppLabelWaterMark'
import { SideLabel } from 'components/AppSideLabel'
import React from 'react'
import { ProgrammingLanguages } from 'utility/programmingLanguages'


export const Skills = () => {

	
	return (
		<div className='relative flex  items-center my-40'>
			<SideLabel label='SKILL SET'/>

			<div className='container mx-auto relative flex items-center justify-center'>
				<AppLabelWaterMark label='Tech Stack'/>
				<div className=' flex gap-10 flex-wrap w-[80%] justify-center'>
					{
						ProgrammingLanguages.map((language , index) => 
							<div key={index}>
								<div className='text-[7vh] ' style={{color:language.color}}>
									{language.icon}
								</div>
							</div>
						)
					}
				</div>
			</div>
		</div>
	)
}
