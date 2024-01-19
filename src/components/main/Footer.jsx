import React from 'react'
import {FaInstagram,FaMailBulk, FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (

    <div name="Footer Container" className='flex lg:flex-row flex-col bg-gray-100 border-t-[2px] border-t-black'>

        <div name="Left Ideal Logic" className='p-2 flex-1'>
            <div name="Footer Ideal Logic" className='flex flex-col text-center justify-center items-center'>
                <h1 name="Join" className='sm:text-[40px] text-[30px]'>Join the Familia!</h1>
                <p name="Join Description" className='sm:text-[16px] text-[12px]'>Use Ideal Logic to become a member and get weekly email reminders!</p>
                <a href="https://apps.ideal-logic.com/osusee" target="_blank" rel="noopener noreferrer">
                    <button className='text-black mt-4 cursor-pointer bg-white border-[2px] border-black rounded-[10px] w-[120px] h-[50px] duration-300 hover:scale-105 hover:bg-[#F28C28]'>Ideal-Logic</button>
                </a>
            </div>
        </div>

        <div name="Center Social Media" className='p-2 flex-1'>
            <h1 name="Join" className='text-center sm:text-[40px] text-[30px]'>Follow Us!</h1>
            <div name="Social Media" className='pt-4 flex gap-8 justify-center'>
                <a href="https://www.instagram.com/oregonstateshpe/?hl=en" target="_blank" rel="noopener noreferrer">
                    <div name="Instagram" className="flex justify-center items-center w-[60px] h-[60px] bg-[#ED5D29] rounded-full border-[2px] border-black duration-300 hover:scale-110">
                        <FaInstagram className="text-[40px]"/>
                    </div>
                </a>
                <a href='https://www.facebook.com/SHPEOSU1/' target="_blank" rel="noopener noreferrer">
                    <div name="Facebook" className="flex justify-center items-center w-[60px] h-[60px] bg-[#ED5D29] rounded-full border-[2px] border-black duration-300 hover:scale-110">
                        <FaFacebook className="text-[40px]"/>
                    </div>
                </a>
                <a href="mailto:shpe@oregonstate.edu" target="_blank" rel="noopener noreferrer">
                    <div name="Email" className="flex justify-center items-center w-[60px] h-[60px] bg-[#ED5D29] rounded-full border-[2px] border-black duration-300 hover:scale-110">
                        <FaMailBulk className="text-[40px]"/>
                    </div>
                </a>
            </div>
        </div>

        <div name="Right Quote of the Month" className='p-2 flex-1 text-center'>
            <h1 name="Quote Title" className='sm:text-[40px] text-[30px]'>Quote of the Month!</h1>
            <p name="The Quote" className='mt-4 font-serif sm:text-[24px] text-[16px]'>"Change your mentallity and you'll change your reality"  -  AliG</p>
        </div>
    </div>
  )
}

export default Footer