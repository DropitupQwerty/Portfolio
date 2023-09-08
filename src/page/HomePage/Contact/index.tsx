import React from 'react'
import { AnimationUpFade } from 'components/AnimationUpFade'
import { SideLabel } from 'components/AppSideLabel'
import { MySocmed } from 'utility/Social'
import  emailJs  from '@emailjs/browser'
import { BsCheckLg } from 'react-icons/bs'
import { AnimatePresence ,motion } from 'framer-motion'

const Service_ID = 'service_3d1soey'
const emailTemplate = 'template_w9ia62s'
const publicKey='_p02JMH-OM30WSzUh'

export const Contact = () => {
	const formRef =  React.useRef<HTMLFormElement | null>(null)
	const [isSend, setIsSent] = React.useState(false)

	const sendEmail  = (e : React.FormEvent) => { 
		e.preventDefault()
                  
        
		emailJs.sendForm(Service_ID , emailTemplate , formRef.current as HTMLFormElement , publicKey)
			.then((result)=> {
				console.log(result.text)
				setIsSent(true)
			}
			).catch((error)=>{
				console.log(error)
			}
			)
	}



	return (
		<div id="contact" className='relative items-center flex my-[40%] lg:my-[10%] mx-[2%]'>
			<SideLabel label='CONTACT'/>
			<AnimationUpFade className='container mx-auto flex flex-col items-center justify-center w-[80%] lg:w-full'>
				<div className='my-10'>
					<div className='text-center text-7xl font-bold'>GET IN TOUCH</div>
					<div className='text-center text-4xl uppercase font-poppins opacity- text-primary-orange'>write, email, connect, talk</div>
				</div>


				<div className='min-h-[20vh]  w-full lg:w-1/2'>
					<AnimatePresence initial={false}>
						{!isSend ?
							<form ref={formRef} onSubmit={sendEmail} className=' flex flex-col gap-10 '>
								<div className=' text-[2vh] w-full '>
									<label className='block font-semibold uppercase tracking-widest'>Email</label>
									<input id="email" type='email' required name='email' className='p-4 w-full outline-primary-orange dark:text-primary-black bg-white  border rounded-lg shadow-md'/>
								</div>
								<div className=' text-[2vh] w-full'>
									<label className='block font-semibold uppercase tracking-widest '>Message</label>
									<textarea name='message' required  rows={5} className='p-4 dark:text-primary-black outline-primary-orange w-full bg-white max-h-[400px] border min-h-[200px] rounded-lg shadow-md'/>
								</div>
								<div>
									<button type='submit' className='text-[2vh] bg-primary-orange p-4 px-6 font-bold rounded-lg text-primary-white'>SUBMIT</button>
								</div>
							</form>
							:
							<div className=' font-poppins flex items-center justify-center h-full'>

								<motion.div 
									initial={{ opacity: 0}}
									animate={{ opacity: 1}}
									transition={{duration:1}}
									className='w-full  flex justify-center items-center flex-col gap-8'>
									<div className='text-5xl'>
									Email Sent
									</div>
									<motion.div
										initial={{ opacity: 0 , rotate: -360  , scale:1.1}}
										animate={{ opacity: 1 ,rotate:0, scale:1 }}
										// transition={{duration:}}	
										className='rounded-full text-8xl bg-green-600 w-fit text-white flex items-end justify-center'>
										<BsCheckLg className='p-2'/>
									</motion.div>
								</motion.div>
							</div>
						}
					</AnimatePresence>
				</div>
				<div className='my-10'>
					<div className='text-4xl text-center font-poppins  tracking-widest text-primary-orange'>YOU CAN VISIT ME OR MESSAGE ME VIA:</div>
					<div className='flex gap-10 justify-center mt-12'>
						{MySocmed.map((social,index)=>
							<a href={social.link} target='_blank' key={index} className='text-[4vh] ' rel="noreferrer">
								{social.icon}
							</a>)}
					</div>
				</div>
			</AnimationUpFade>
		</div>
	)
}
