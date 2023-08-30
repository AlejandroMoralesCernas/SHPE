import React from 'react'
import LatestMeeting from '../components/home/LatestMeeting'
import Slider from '../components/home/Slider'

const Home = () => {
  return (
    <div>
      <Slider/>
      <LatestMeeting/>
    </div>
  )
}

export default Home