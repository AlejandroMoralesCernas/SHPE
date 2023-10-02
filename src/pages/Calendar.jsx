import React from 'react'

const Calendar = () => {
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  return (
    <div name='Calendar Container' className='flex flex-col justify-center items-center py-[5rem]'>
      {<h1 name='Calendar Title' className='2xl:text-[3rem] text-[2.5rem]'>{month[new Date().getMonth()]} Calendar</h1>}
      <iframe name='Calendar' title="SHPE Events" src="https://calendar.google.com/calendar/embed?src=37eb6b9be38fe0b5f6bb157356345b9b80c133d0291666d74da376ea5ef1a20b%40group.calendar.google.com&ctz=America%2FLos_Angeles" loading='lazy' className='h-[80vh] w-[80vw] border-gray-300 border-[3px]' scrolling="no"></iframe>
    </div>
  )
}

export default Calendar