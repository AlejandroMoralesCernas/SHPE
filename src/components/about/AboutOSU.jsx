import React from 'react'

const AboutOSU = () => {
    return (
        <div name="About OSU SHPE" className='z-[0] sm:p-10 flex flex-col xl:flex-row overflow-hidden relative w-full min-h-[55vh] bg-[#1A2B52] border-t-[2px] border-b-[2px] border-black'>
            <div name="Circle" className='z-[-1] absolute rounded-full top-[-20%] left-[1%] w-[1000px] h-[1000px] bg-[#ED5D29]'></div>

            <div name='LEFT' className='flex-1 font-serif text-center bg-white border-black border-[5px] m-2 sm:m-8 px-2 sm:px-8 py-2 sm:py-4 rounded-[10%]'>
                <h1 className='text-[18px] sm:text-[24px] 2xl:text-[30px] font-bold underline p-4'>Oregon State University SHPE</h1>
                <p className='text-[10px] sm:text-[14px] 2xl:text-[18px]'> Oregon State University SHPE Chapter began in 2010 with a few eager, driven
                    engineering students that wanted to develop a community. Regardless of the
                    size of the chapter; community engagement, professional development, networking
                    and building a familia have all been important aspects and incorporated into the
                    club's events. Although membership has oscillated throughout the years there have
                    always been a committed few who have engaged with the community at the university
                    and over a decade of commitment and networking the chapter has over 20 active
                    members and we keep on rising!
                    </p>
                <a href="https://apps.ideal-logic.com/files/ver20161107090427/public/be65f8854a429c48_F3T9-25VWY/orig/SHPE_Bylaws.pdf" target="_blank" rel="noopener noreferrer">
                    <button className='m-2 border-[2px] border-black px-4 sm:px-8 py-2 sm:py-4 rounded-md duration-300 hover:scale-105 hover:bg-[#F28C28]'>Bylaws</button>
                </a>
            </div>

            <div name='RIGHT' className='flex-1 flex flex-col md:flex-row bg-white m-2 sm:m-12 px-2 sm:px-8 py-2 sm:py-4 rounded-[10%] border-[5px] border-black font-serif text-center'>
                <div name="Left Mission" className='flex-1 mx-2 sm:mx-4 my-1 lg:my-12 bg-gray-200 rounded-md border-[2px] border-black p-2'>
                    <h1 className='text-[18px] sm:text-[24px] 2xl:text-[30px] font-bold underline p-0 sm:p-4'>Our Mission</h1>
                    <p className='text-[10px] sm:text-[14px] 2xl:text-[18px]'>We want to provide opportunities for Hispanic students at
                    Oregon State University in terms thier professional career devlopment, strengthen
                    students perspectives on their abilities, and build a friendly community.
                    </p>
                </div>

                <div name="Right Vision" className='flex-1 mx-2 sm:mx-4 my-1 lg:my-12 bg-gray-200 rounded-md border-[2px] border-black p-2'>
                    <h1 className='text-[18px] sm:text-[24px] 2xl:text-[30px] font-bold underline p-0 sm:p-4'>Our Vision</h1>
                    <p className='text-[10px] sm:text-[14px] 2xl:text-[18px]'>We want to create a Hispanic community that will lead
                    and create a purpose in the professional careers.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutOSU