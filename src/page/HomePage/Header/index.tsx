import React  from 'react'




export const Header = () => {
	return (			
		<div className='min-h-screen w-full  relative  flex flex-col justify-center items-center z-10  rounded-2xl p-[5%]  ' >
			<div className="">
				<div className='uppercase text-[12vh] font-black  leading-none drop-shadow-lg italic'>
					<div className=' '><span className='tracking-wider whitespace-nowrap '>Jacob Allen</span> </div>
					<div><span className='text-primary-orange tracking-widest ' style={{ WebkitTextStroke: '2px #333',}}>Valderama</span></div>
				</div>
				<div className='w-fit  relative '>
					<p className='text-[3.5vh] text-end leading-none font-DotGothic  whitespace-nowrap text-primary-black  font-black tracking-wide uppercase dark:text-primary-orange '>YOUR ASPIRING Front End Developer</p>
				</div>
			</div>

			<div className='mt-14'>
				<button className='text-primary-orange text-[3vh] font-black uppercase hover:underline'>
			Get My Resume
				</button>
			</div>

	

		</div>
		
		
	)
}


{/* <motion.div variants={fadeOut}
className=' flex flex-row-reverse h-full  border-b   items-center'
>

<div className=' h-fit  rounded-xl  relative p-[5%] w-full' >
	<div className='text-primary-orange text-[4vh] dark:text-primary-blue font-black uppercase tracking-widest flex items-center whitespace-nowrap gap-4'>About Me  <span className='w-full h-[1px] bg-orange'></span></div>
	<div className=' text-[3vh] text-justify  indent-10'>
		<p className=' leading-2 tracking-widest italic '>Hello! I am a fresh graduate student that aspires to be a skilled web developer , capable of creating user-friendly online apps, knowledgable in<span className='dark:text-primary-blue text-primary-orange font-bold'> Java, JavaScript, TypeScript</span>, and informed about
			popular frameworks such as <span className='dark:text-primary-blue text-primary-orange font-bold'>React TS and JS</span>. outstanding debugging and issue-solving
			abilities, a keen eye for detail, and a passion for producing high-caliber code.
		</p>
	</div>
</div>


</motion.div> */}