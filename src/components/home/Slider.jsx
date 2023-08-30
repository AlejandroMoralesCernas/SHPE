import React, {useState, useEffect, useCallback} from "react";
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import OSU from '../../data/images/home/osucampus.jpeg'
import Bowling from '../../data/images/home/bowling.jpg'
import Beavs from '../../data/images/home/beavs.png'
import Outreach from '../../data/images/home/outreach.jpg'
import "../../index.css";
import { Link } from "react-router-dom";

const Slider = () => {
    //arrow functionality
    const [slideIndex,setSlideIndex ] = useState(0);
    const handleClick = (direction) => {
        if(direction==="left") {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
            
        }
        console.log("slideIndex", slideIndex);
    };


    const [timerId, setTimerId] = useState(null);

    //autmatic slider
    const slider = useCallback(() => {
        if(slideIndex <  2) {
            setSlideIndex(slideIndex + 1)
        } else {
            setSlideIndex(0)
        }
        console.log(slideIndex);
    }, [slideIndex, setSlideIndex])

    //starts the timer
    const startTimer = useCallback(() => {
        if(!timerId){
            var mySlides = setTimeout(slider,6000);
            setTimerId(mySlides)
        }
    }, [slider,timerId])

    //stops and resets the timer
    const stopTimer = useCallback(() => {
        if (timerId) {
          clearTimeout(timerId);
          setTimerId(null);
        }
      }, [timerId]);

    useEffect(() => {
        startTimer();
        return () => {
          stopTimer();
        };
      }, [startTimer, stopTimer]);


    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    return (
    
        <div name="slider" className='relative h-[70vh] border-b-[2px] border-black'>

            <div name="left arrow" onClick={()=> {handleClick("left");stopTimer();}} className='z-[2] bg-white absolute cursor-pointer opacity-50 hover:opacity-100 hover:scale-105 w-[45px] h-[45px] top-0 bottom-0 m-auto left-[15px] rounded-full border-[1px] border-black flex justify-center items-center duration-300'>
                <FaChevronLeft/>
            </div>

            <div name="right arrow" onClick={()=> {handleClick("right");stopTimer();}} className='z-[2] bg-white absolute cursor-pointer opacity-50 hover:opacity-100 hover:scale-105 w-[45px] h-[45px] top-0 bottom-0 m-auto right-[15px] rounded-full border-[1px] border-black flex justify-center items-center duration-300'>
                <FaChevronRight/>
            </div>

            <div name="Slides" className="h-full flex overflow-hidden">

                <div name="slide 1" className="flex-none relative w-full h-full duration-1000 ease-in-out" style={{transform: `translateX(-${slideIndex * 100}vw)`}}>

                    <img src={OSU} alt="osu img" className="object-cover w-full h-full"/>

                    {/* <div name="text-container" className={`${slideIndex === 0 ? "animate-fade_in": ""} text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center`}> */}
                    {/* <div name="text-container" className={`${slideIndex === 0 ? "animate-fade_in": ""} absolute flex flex-col items-center left-[15%] text-white h-full top-[20%]`}> */}
                    <div name="text-container" className={`${slideIndex === 0 ? "animate-fade_in": ""} absolute text-center top-0 left-0 w-full h-full flex flex-col text-white items-center justify-center`}>
                        <h1 name="title" className="lg:text-[80px] sm:text-[40px] text-[20px] outline-dark">OREGON STATE UNIVERSITY</h1>
                        <img name="OSU Logo" alt="osu logo img" src={Beavs} className="sm:h-[250px] h-[150px] sm:w-[250px] w-[150px] sm:mt-[-40px] mt-[-20px] mb-[-20px]"/>
                        <p name="description" className="sm:text-[40px] text-[18px] outline-dark">GO BEAVS!</p>
                        <Link onClick={scrollToTop} to='/about'>
                            <button to='/about' name="navigation-button" className="mt-4 text-black bg-white rounded-sm text-[20px] h-[50px] w-[200px] hover:scale-105 hover:bg-[#F28C28] duration-300 border-black border-[2px]">GET STARTED</button>
                        </Link>
                    </div>
                </div>

                <div name="slide 2" className="flex-none relative w-full h-full duration-1000 ease-in-out" style={{transform: `translateX(-${slideIndex * 100}vw)`}}>

                    <img src={Bowling} alt="osu img" className="object-cover w-full h-full"/>

                    {/* <div name="text-container" className={`${slideIndex === 1 ? "animate-fade_in": ""} absolute flex flex-col items-center sm:left-[30%] left-[10%] text-white h-full sm:top-[35%] top-[28%]`}> */}
                    <div name="text-container" className={`${slideIndex === 1 ? "animate-fade_in": ""} absolute text-center top-0 left-0 w-full h-full flex flex-col text-white items-center justify-center`}>
                        <h1 name="title" className="lg:text-[80px] sm:text-[40px] text-[25px] outline-dark">Latest Events</h1>
                        <p name="description" className="sm:text-[40px] text-center text-[18px] outline-dark">Stay Involved and Keep Up With Us!</p>
                        <Link onClick={scrollToTop} to='/event'>
                            <button name="navigation-button" className="mt-4 text-black bg-white rounded-sm text-[20px] h-[50px] w-[200px] hover:scale-105 hover:bg-[#F28C28] duration-300 border-black border-[2px]">EVENTS</button>
                        </Link>
                    </div>
                </div>

                <div name="slide 3" className="flex-none relative w-full h-full duration-1000 ease-in-out" style={{transform: `translateX(-${slideIndex * 100}vw)`}}>

                    <img src={Outreach} alt="osu img" className="object-cover w-full h-full"/>

                    {/* <div name="text-container" className={`${slideIndex === 2 ? "animate-fade_in": ""} absolute flex flex-col items-center sm:left-[25%] left-[15%] text-white h-full sm:top-[35%] top-[28%]`}> */}
                    <div name="text-container" className={`${slideIndex === 2 ? "animate-fade_in": ""} absolute text-center top-0 left-0 w-full h-full flex flex-col text-white items-center justify-center`}>
                        <h1 name="title" className="lg:text-[80px] sm:text-[40px] text=[25px] outline-dark">Get To Know The Team</h1>
                        <p name="description" className="sm:text-[40px] text-center text-[18px] outline-dark">2023-2024 Shpe Board</p>
                        <Link onClick={scrollToTop} to='/officers'>
                            <button name="navigation-button" className="mt-4 text-black bg-white rounded-sm text-[20px] h-[50px] w-[200px] hover:scale-105 hover:bg-[#F28C28] duration-300 border-black border-[2px]">OFFICERS</button>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Slider