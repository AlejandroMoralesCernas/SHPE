import React from 'react'
import AboutOSU from '../components/about/AboutOSU'
import AboutSHPE from '../components/about/AboutSHPE'


const About = () => {
  return (
    <div>
      <div className={`min-h-[40vh] opacity-80 bg-cover bg-center bg-fixed bg-no-repeat bg-bowling`}></div>
      <AboutOSU/>
      <div className={`min-h-[40vh] opacity-80 bg-cover bg-center bg-fixed bg-no-repeat bg-convention`}></div>
      <AboutSHPE/>
      <div className={`min-h-[40vh] opacity-80 bg-cover bg-top bg-fixed bg-no-repeat bg-professional`}></div>
    </div>
  )
}

export default About