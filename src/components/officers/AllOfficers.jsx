import React from 'react'
import Card from './Card'
import {Officers} from '../../data/info/officers/officerInfo.js'

const AllOfficers = () => {
    const OfficerCards = Officers.map(data => {
        return <Card 
            officer={data.name} 
            position={data.position}
            major={data.major}
            linkedin={data.linkedin}
            img={"Placeholder.jpg"}
        />
    })

    return (
        <div className='flex flex-col justify-center items-center md:my-[5rem] my-[3vh] md:gap-[5rem] gap-[3vh]'>
            <h1 className='2xl:text-[3rem] text-[2.5rem]'>Meet the Officers</h1>
            <div name="Card Container" className='grid 2xl:grid-cols-[repeat(4,minmax(0,_20rem))] xl:grid-cols-[repeat(3,minmax(0,_20rem))] md:grid-cols-[repeat(2,minmax(0,_20rem))] grid-cols-1 gap-[3rem]'>
                {OfficerCards}
            </div>
        </div>
    )
}

export default AllOfficers