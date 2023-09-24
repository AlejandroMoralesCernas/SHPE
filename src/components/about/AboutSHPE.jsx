import React from 'react'
import SHPELogo from '../../data/images/about/shpe.png'
import NationalLogo from '../../data/images/about/nationallogo.png'

const AboutSHPE = () => {
    return (
        <div name="About SHPE National" className='z-[0] sm:p-10 flex flex-col xl:flex-row overflow-hidden relative w-full min-h-[55vh] bg-[#1A2B52] border-t-[2px] border-b-[2px] border-black'>
    
            <div name='LEFT' className='flex-1 font-serif text-center bg-white border-black rounded-[15%] m-2 sm:m-8 px-2 sm:px-8 py-2 sm:py-4 border-[5px] '>
                <div name="Logos" className='flex justify-center items-center'>
                    <img className='w-[200px] sm:w-[300px] mr-8' src={SHPELogo} alt="shpelogo"/>
                    <img className='w-[100px] sm:w-[150px]' src={NationalLogo} alt="nationallogo"/>
                </div>
                <div name="Text for SHPE National" className='w-full'>
                    <h1 className='text-[18px] sm:text-[24px] 2xl:text-[30px] font-bold underline'>SHPE National</h1>
                    <p className='text-[10px] sm:text-[14px] 2xl:text-[18px]'> Oregon State University SHPE Chapter began in 2010 with a few eager, driven
                        engineering students that wanted to develop a community. Regardless of the
                        size of the chapter; community engagement, professional development, networking
                        and building a familia have all been important aspects and incorporated into the
                        club's events. Although membership has oscillated throughout the years there have
                        always been a committed few who have engaged with the community at the university
                        and over a decade of commitment and networking the chapter has over 20 active
                        members and we keep on rising!
                    </p>
                </div>
            </div>

            <div name='RIGHT' className='flex-1 relative overflow-hidden flex flex-col md:flex-row m-2 sm:m-12 px-2 sm:px-8 py-2 sm:py-4 rounded-[10%] font-serif text-center'>
                {/* <div class="relative overflow-hidden bg-white h-48 w-64"> */}
                    <div className="absolute z-[-1] h-full w-full bg-[#ED5D29] transform -rotate-45 origin-bottom-left"></div>
                    <div className="absolute z-[-1] h-full w-full bg-[#ED5D29] transform -rotate-45 origin-top-right"></div>
               {/*  </div> */}
                <div name="Left Mission" className='flex-1 mx-2 sm:mx-4 my-1 lg:my-12 bg-white rounded-md border-[2px] border-black p-2'>
                    <h1 className='text-[18px] sm:text-[24px] 2xl:text-[30px] font-bold underline p-0 sm:p-4'>Mission Statement</h1>
                    <p className='text-[10px] sm:text-[14px] 2xl:text-[18px]'>SHPE changes lives by empowering the Hispanic community to
                    realize its fullest potential and to impact the world through STEM awareness, access,
                    support and development.
                    </p>
                </div>

                <div name="Right Vision" className='flex-1 mx-2 sm:mx-4 my-1 lg:my-12 bg-white rounded-md border-[2px] border-black p-2'>
                    <h1 className='text-[18px] sm:text-[24px] 2xl:text-[30px] font-bold underline p-0 sm:p-4'>Vision Statement</h1>
                    <p className='text-[10px] sm:text-[14px] 2xl:text-[18px]'>SHPE's vision is a world where Hispanics are highly valued
                    and influential as the leading innovators, scientists, mathematicians, and engineers.
                    To learn more about SHPE at the national level, visit&nbsp;
                    <a href="https://shpe.org" target="_blank" rel="noopener noreferrer">here</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutSHPE