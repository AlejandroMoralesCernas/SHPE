import React from 'react'
import Noches from '../data/images/events/noches.png'


const Event = () => {
  return (
    <div className=''> 
      <div className='p-[2rem] flex justify-around items-center'>
      <div className='flex flex-col gap-[1rem]'>
      <h1 className='text-[2rem] font-[600] drop-shadow-md'>Events</h1>
        <p className='w-[30rem]'>SHPE is all about togetherness through exciting events that promote learning, 
          connection, and celebrating diversity. Join us to build lasting connections and experience the sense of 
          belonging within our Familia!</p>
      </div>
      <img src={Noches} alt="" className='h-[30rem] rounded-full shadow-md'/>
    </div>
      <div className='bg-[#f2f2f2] flex justify-around items-center py-[2rem]'>
          <div className='flex flex-col items-center justify-center gap-[1rem]'>
            <img src={Noches} alt="" className='h-[30rem] rounded-full shadow-md'/>
            <h1 className='text-[2rem] font-[600] drop-shadow-md'>General Meetings</h1>
          </div>
          <div className='flex flex-col gap-[1rem]'>
            <h2 className='text-[1.5rem]'>WorkShops</h2>
            <p className='w-[30rem]'>Workshops are given by engineering professionals around Oregon who give SHPE students advice to assess and 
              revise their resumes, interviewing abilities, and elevator pitch. SHPE students will learn the expectations 
              to obtain a intership or full-time career and their impact as a Hispanic in their field.</p>
            <h2 className='text-[1.5rem]'>Social Gatherings</h2>
            <p className='w-[30rem]'>Gatherings alllow us to create friendships and find a community at OSU. We know that being in STEM 
              and being a Hispanic is rare so getting together to express our cultural values and experiences allow us to create long-lasting 
              relationships.</p>
          </div>
      </div>
      <div className='flex justify-around items-center py-[2rem]'>
          <div className='flex flex-col gap-[1rem]'>
            <h2 className='text-[1.5rem]'>Why we do it?</h2>
            <p className='w-[30rem]'>Taking OSU students to SHPE's National Conference is one of the main goals of OSU SHPE. Many students don't 
            have the funds to attend the event, so we use fundraisers to help involved SHPE members with financial need.</p>
            <h2 className='text-[1.5rem]'>What we do?</h2>
            <p className='w-[30rem]'>We raise money by conducting fundraiser events at OSU. For example, salsa nights, raffle baskets, selling
             raspados, etc.</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-[1rem]'>
            <img src={Noches} alt="" className='h-[30rem] rounded-full shadow-md'/>
            <h1 className='text-[2rem] font-[600] drop-shadow-md'>Fundraisers</h1>
          </div>
      </div>
      <div className='bg-[#f2f2f2] flex justify-around items-center py-[2rem]'>
          <h1 className='text-[2rem] '>Outreach</h1>
          <div className='flex flex-col gap-[1rem]'>
            <h2 className='text-[1.5rem]'>Why we do it?</h2>
            <p className='w-[30rem]'>We understand that sparking interest in STEM for young Hispanic will create leaders of the future. By doing outreach 
            events, we will be able increase Hispanic STEM college undergraduates and provide them with the benefits and opportunites that STEM offers.</p>
            <h2 className='text-[1.5rem]'>What we do?</h2>
            <p className='w-[30rem]'>We conduct fun outreach events at elementary school and at OSU. For example, Noches de Ciencas, Juntos SHPE 
            stand, etc.</p>
          </div>
      </div>
      <div className='flex justify-center items-center py-[2rem]'>
        <h1 className='text-[2rem]'>Past Events</h1>
      </div>

    </div>
  )
}

export default Event