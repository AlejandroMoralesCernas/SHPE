import React from 'react'
import SHPEtinas from '../../data/images/shpetinas/shpetina.png'
import Pumpkin from '../../data/images/shpetinas/pumpkin.jpg'
import Shack from '../../data/images/shpetinas/shack.jpg'
import Skate from '../../data/images/shpetinas/skating.jpg'
import Convention from '../../data/images/shpetinas/shpetinasconvention.png'

export const Intro = () => {
    return (
        <div>
            <div name='shptina logo' className='flex justify-center items-center'>
                <img alt="shpetinas logo" src={SHPEtinas}/>
            </div>

            <div name='text introduction' className='font-serif px-8 sm:px-24 text-center'>
                <p className='font-medium text-[10px] sm:text-[16px] lg:text-[20px]'>
                    SHPEtina stands for the Society of Hispanic Professional Engineers Latina chapter.
                    We are part of the bigger SHPE Region 1 Chapter here at OSU. We work to encourage
                    professional development through projects and community involvement through out
                    reach in STEM. Specifically we work to target Latina's who are in the STEM fields,
                    but we still welcome everyone to participate in our club. We also strive to bring
                    in guest speakers with whom we can have open and honest conversations with about
                    topics surround women in STEM. All while providing a fun and chill environment
                    where we can all create meaningful connections with each other through open
                    communication and honest conversations.
                </p>
            </div>

            <div name="picture gallery" className='p-4 bg-[#f8dada] flex flex-wrap justify-center items-center mt-8 gap-4 sm:gap-8 place-items-center border-gray-200 border-[2px]'>
                <img alt="shack img" className='object-cover w-[270px] sm:w-[450px] h-[175px] sm:h-[350px] rounded-lg border-gray-400 border-[3px]' src={Shack}/>
                <img alt="pumpkin img" className='object-cover w-[270px] sm:w-[450px] h-[175px] sm:h-[350px] rounded-lg border-gray-400 border-[3px]' src={Pumpkin}/>
                <img alt="skate img" className='object-cover w-[270px] sm:w-[450px] h-[175px] sm:h-[350px] rounded-lg border-gray-400 border-[3px]' src={Skate}/>
            </div>

            <div name="National Convention SHPEtinas" className='mt-4 font-serif flex flex-col justify-center items-center'>
                <img src={Convention} alt='convention img' className='w-[700px]'/>
            </div>

            <div name='text introduction' className='font-serif px-8 sm:px-24 text-center mb-4 '>
                <p className='font-medium text-[10px] sm:text-[16px] lg:text-[20px]'>
                    Like the SHPE National Conference, the SHPEtinas conference is dedicated to enhancing the representation of
                    Latinas in STEM fields, both at the corporate and educational levels. This event is open to both students
                    and professionals, offering them the opportunity to establish connections through networking, elevate their
                    career and leadership skills, and enhance their technical expertise.
                </p>
            </div>
        </div>
    )
}
