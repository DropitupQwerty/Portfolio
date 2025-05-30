import React from 'react'
import { MySocmed } from 'utility/Social'
import { SideLabel } from 'components/AppSideLabel'
import { AnimationUpFade } from 'components/AnimationUpFade'
import Lottie from 'lottie-react'
import ComputerAnimation from 'assets/animation_lm7ahqwu.json'
import { AppLabelWaterMark } from 'components/AppLabelWaterMark'

export const About = () => {
	return (
		<div
			id="about"
			className=" relative flex min-h-[70vh] overflow-hidden  justify-center items-center mx-[2%] my-[3%]"
		>
			<SideLabel label="ABOUT ME" />
			<div className="container mx-auto ">
				<AnimationUpFade>
					<div className=" h-full z-10  rounded-xl flex flex-col lg:flex-row items-center justify-between relative w-full ">
						<AppLabelWaterMark label="ABOUT ME" />
						<div className="gap-10 flex lg:flex-col">
							{MySocmed.map((social, index) => (
								<a
									href={social.link}
									target="_blank"
									key={index}
									className="text-7xl hover:scale-105 dark:text-primary-white"
									rel="noreferrer"
								>
									{social.icon}
								</a>
							))}
						</div>
						<div className="w-[80%] lg:w-[40%] p-[2%]">
							<div className="">
								<Lottie
									className=" lg:h-[50vh]"
									animationData={ComputerAnimation}
								/>
							</div>
						</div>

						<div className="font-poppins text-justify w-[80%] lg:w-[40%]">
							<div className="text-6xl tracking-widest font-[600] ">
								<span className="text-primary-orange">WHO AM I?</span>{' '}
							</div>
							<div className="indent-10  text-3xl lg:text-4xl  dark:text-primary-white">
								<p className="mb-10 leading-relaxed">
                  Hello! I am a Software Engineer that aspires to be a
                  skilled Senior Software Engineer, capable of creating user-friendly
                  online apps, proficient in{' '}
									<span className="text-primary-orange">
                    Java, JavaScript, TypeScript, PHP{' '}
									</span>{' '}
                  and informed about popular frameworks such as{' '}
									<span className="text-primary-orange">
                    NextJs, Laravel, SpringBoot
									</span>
                  . outstanding debugging and issue-solving abilities, a keen
                  eye for detail, and a passion for producing high-caliber code.
								</p>
							</div>
						</div>
					</div>
				</AnimationUpFade>
			</div>
		</div>
	)
}
