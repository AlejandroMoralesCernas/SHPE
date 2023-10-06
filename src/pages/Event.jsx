import React from 'react'
import ActivityContent from '../components/event/ActivityContent'
import { Link } from 'react-router-dom'

const Event = () => {
  const divStyle = {
    backgroundImage: 'url(' + require('../data/images/events/newish.jpeg') + ')',
    backgroundPosition: 'top',
    backgroundSize: 'cover'
}


  return (

    <div className=''> 
      <div style={divStyle} className='h-[93vh] lg:justify-around lg:flex-row flex flex-col justify-center lg:gap-[1rem] gap-[2rem] items-center shadow-lg px-[2rem]'>
        <div className='flex flex-col lg:items-start items-center gap-[1rem] lg:text-left text-center'>
          <h1 className='2xl:text-[2.5rem] lg:text-[2rem] md:text-[2rem] text-[1.5rem] font-[600]'>Events</h1>
          <p className='2xl:w-[35rem] lg:w-[20rem] md:w-[90vw] 2xl:text-[1.25rem] lg:text-[1rem] md:text-[1.25rem] text-[1rem]'>SHPE is all about togetherness through exciting events that promote learning, 
          connection, and celebrating diversity. Join us to build lasting connections and experience the sense of 
          belonging within our Familia!</p>
          <button className='w-[15rem] h-[3rem] bg-[#F26433] rounded-lg'><Link to="/calendar">Calendar of Events</Link></button>
        </div>
        <img src="https://res.cloudinary.com/dy3nrj03h/image/upload/v1696284020/about/convention_mfmyla.png" 
          alt="" 
          className='event-main 2xl:h-[30rem] xl:h-[25rem] lg:h-[22rem] h-[55vw] object-cover rounded-md shadow-md'/>
      </div>

      <ActivityContent/>
      
      
      <div className='flex flex-col justify-center items-center px-[2rem] py-[3rem] gap-[4rem]'>
        <h1 className='2xl:text-[2.5rem] lg:text-[2rem] md:text-[2rem] text-[1.5rem] font-[600]'>Past Events</h1>
        <div className='grid 2xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-[2rem]'>
          <img src="https://res.cloudinary.com/dy3nrj03h/image/upload/v1696306347/events/gala_1_uz97kw.png" 
          alt=""
          className='2xl:h-[30rem] 2xl:w-[23rem] md:h-[40rem] md:w-[30rem] h-[105vw] w-[80vw] shadow-2xl'/>
          <img src="https://res.cloudinary.com/dy3nrj03h/image/upload/v1696306352/events/bowlingEve_1_zdljg8.png" 
          alt=""
          className='2xl:h-[30rem] 2xl:w-[23rem] md:h-[40rem] md:w-[30rem] h-[105vw] w-[80vw] object-cover shadow-2xl'/>
          <img src="https://res.cloudinary.com/dy3nrj03h/image/upload/v1696306344/events/gradschool_1_jvftgd.png" 
          alt=""
          className='2xl:h-[30rem] 2xl:w-[23rem] md:h-[40rem] md:w-[30rem] h-[105vw] w-[80vw] object-cover shadow-2xl'/>
          <img src="https://res.cloudinary.com/dy3nrj03h/image/upload/v1696306340/events/studysesh_1_ofsu35.png" 
          alt=""
          className='2xl:h-[30rem] 2xl:w-[23rem] md:h-[40rem] md:w-[30rem] h-[105vw] w-[80vw] object-cover  shadow-2xl'/>
        </div>
      </div>

    </div>
  )
}

export default Event