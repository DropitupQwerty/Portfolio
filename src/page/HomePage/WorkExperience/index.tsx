import { AnimationUpFade } from 'components/AnimationUpFade'
import { AppLabelWaterMark } from 'components/AppLabelWaterMark'
import { SideLabel } from 'components/AppSideLabel'




export const WorkExperience = () => {
    return (
        <div className='relative flex  items-center lg:my-40  min-h-[40vh] mx-[2%]'>
            <SideLabel label='WORK EXPERIENCE' />
            <AppLabelWaterMark label='EXPERIENCE' />



            <AnimationUpFade className='container mx-auto relative flex flex-col-reverse lg:flex-row items-center lg:w-full w-[80%]  justify-center '>
                <div className='flex flex-col  md:justify-center md:items-center w-full'>
                    <div className='container gap-20  mx-auto flex items-center justify-center  '>
                        <div className='text-6xl font-[600]  text-primary-orange md:text-start font-poppins uppercase tracking-wide'>EXPLORE MY JOURNEY?</div>
                    </div>
                    <div className='grid xl:grid-cols-2 md:grid-cols-1  gap-20 mt-10'>
                        <div className=''>
                            <a href='https://nexbridgetech.com/' target='_blank'>
                                <h1 className='text-4xl md:text-7xl font-extrabold'>
                                    <span className='text-[#0071BC]'>
                                        NEX
                                    </span>
                                    <span className='text-[#8DC640] mr-5'>BRIDGE</span>
                                    TECHNOLOGY
                                </h1>
                            </a>
                            <div className='text-3xl flex items-center gap-5 font-bold'>SOFTWARE ENGINEER</div>
                            <div className='text-2xl flex items-center gap-5'>2023 - PRESENT
                                <span className=' h-[1px] w-[100px] bg-primary-black  dark:bg-primary-white'></span>
                            </div>
                        </div>

                        <div className=''>
                            <a href='https://hoolisoftware.com/' target='_blank'>
                                <h1 className='text-4xl md:text-7xl font-extrabold'>
                                    HOOLI SOFTWARE
                                </h1>
                            </a>
                            <div className='text-3xl flex items-center gap-5 font-bold'>INTERN</div>
                            <div className='text-2xl flex items-center gap-5'>2023 - 2023
                                <span className=' h-[1px] w-[100px] bg-primary-black  dark:bg-primary-white'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimationUpFade>
        </div>
    )



}