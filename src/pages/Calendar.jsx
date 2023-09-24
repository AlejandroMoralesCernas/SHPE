import React from 'react'

const Calendar = () => {
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  return (
    <div name='Calendar Container' className='flex flex-col justify-center items-center py-[5rem]'>
      <h1 name='Calendar Title' className='2xl:text-[3rem] text-[2.5rem]'>{month[new Date().getMonth()]} Calendar</h1>
      <iframe name='Calendar' title="SHPE Events" src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FLos_Angeles" className='h-[80vh] w-[80vw]'></iframe>
    </div>
  )
}

export default Calendar