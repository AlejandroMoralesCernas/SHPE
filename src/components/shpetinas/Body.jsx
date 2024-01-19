import React from 'react'

const Body = () => {
  return (
    <div name="LatestMeeting Container" className='w-full bg-[#f8dada] py-8 px-16'>
        <div name="Title" className='text-center text-[30px] sm:text-[40px] border-b-black border-b-[2px]'>
            <h1>Upcoming Events!</h1>
        </div>

        <div name="Meeting Container" className='w-full flex sm:flex-row flex-col mt-4 bg-white'>
            <div name="Left Meeting Container" className='flex justify-center w-full items-center h-full flex-1 bg-white'>
                <img src={"https://res.cloudinary.com/dy3nrj03h/image/upload/q_auto:good/v1701450623/shpetinas/Cafe_w_SHPEtinas_-_Insta_amptas.png"} alt="meeting img" className="animate-slide_left p-4 object-cover h-full"/>
            </div>
            <div name="Right Meeting Container" className='p-4 animate-slide_right flex-1 w-full font-serif bg-gray-200'>
                <div name="Text Container" className='flex flex-col text-center h-full items-center justify-center'>
                    <h1 name="Meeting Title" className='2xl:text-[70px] md:text-[40px] text-[20px]'>Cafecito Con SHPEtinas!</h1>
                    <h2 name="Meeting Time" className='2xl:text-[50px] md:text-[25px] text-[14px] italic'>9:00am - 11am, December 5, Johnston 220A</h2>
                    <p name="Meeting Description" className='2xl:text-[30px] md:text-[18px] text-[10px] mt-2'>Join us to meet other SHPEtinas members! Va aver Conchas!</p>
                </div>
            </div>
        </div>

        <div name="Future Events Container" className='mt-8 text-center'>
        <div name="Title" className='text-center text-[30px] sm:text-[40px] border-b-black border-b-[2px]'>
            <h1>Future Events!</h1>
        </div>
{/*             <h1 name="Title" className='text-[30px] sm:text-[40px]'>Future Events!</h1> */}
            <h2 name="Title Descripiton" className='2xl:text-[26px] sm:text-[18px] text-[14px] mt-4'>Check out this list of upcoming events you won't want to miss.</h2>
            <div className='mt-4 bg-white sm:mx-13 md:mx-30 lg:mx-40 xl:mx-60 2xl:mx-80 text-[10px] sm:text-[16px] md:text-[22px] rounded-[5%]'>
              <p>Cafecito with SHPEtinas Fall Term TBD</p>
              <p>Cafecito with SHPEtinas Winter Term TBD</p>
              <p>Ice Skating with SHPEtinas Spring Term TBD</p>
            </div>
        </div>
    </div>
)
}

export default Body