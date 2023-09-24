import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import Test from "../../data/images/officers/duck.jpeg"

const Card = (props) => {
    console.log(props.image)
    return (
        <div name="Officer Container" className='flex flex-col bg-[#D3D3D3] rounded-2xl md:h-[40rem] md:w-[20rem] w-[90vw] h-[70vh] items-center justify-start gap-[.5rem] shadow-md text-center'>
            <img src={Test} alt="officer img" className="object-cover h-[70%] w-[100%] rounded-t-2xl" />
            <h1 className='2xl:text-[1.2rem] text-[1rem] font-semibold'>{props.officer}</h1>
            <h2 className='2xl:text-[1.2rem] text-[.975rem]'>{props.position}</h2>
            <h3 className='2xl:text-[1rem] text-[.9rem] px-[.5rem]'>{props.major}</h3>
            <a href={props.linkedin}>
                <FaLinkedin className="text-[2.8rem] hover:scale-[105%] duration-300" /> 
            </a>
        </div>
    )
}

export default Card