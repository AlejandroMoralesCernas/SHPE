import React from 'react'
import LatestMeeting from '../components/home/LatestMeeting'
import Slider from '../components/home/Slider'
import Fundraiser from '../components/home/Fundraiser'

const Home = () => {
  return (
    <div>
      <Slider/>
      <Fundraiser/>
      <LatestMeeting/>
    </div>
  )
}

export default Home