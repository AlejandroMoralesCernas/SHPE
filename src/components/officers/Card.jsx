import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import Test from "../../data/images/officers/Placeholder.jpg"

const Card = (props) => {
    console.log(props.image)
    return (
        <div name="Officer Container" className='w-[23rem] 2xl:h-[35rem] h-[29rem] bg-slate-100 rounded-2xl shadow-md duration-300  hover:scale-105 cursor-pointer '>
            <img src={Test} className="object-cover 2xl:h-[22rem] h-[20rem] w-full rounded-tl-2xl rounded-tr-2xl" />
            <div className='p-6 text-center'>
                <h1 className='2xl:text-[1.2rem] text-[1rem] font-semibold whitespace-nowrap'>{props.officer}</h1>
                <h2 className='2xl:text-[1.2rem] text-[.975rem] whitespace-nowrap'>{props.position}</h2>
                <h3 className='2xl:text-[1rem] text-[.9rem] whitespace-nowrap'>{props.major}</h3>
                <a href={props.linkedin} className='inline-block'>
                    <FaLinkedin className="text-[2.8rem]" /> 
                </a>
            </div>
            
        </div>
    )
}

export default Card