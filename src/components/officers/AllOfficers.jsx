import React from 'react'
import Card from './Card'
import OfficerInfo from '../../data/info/officers/officerInfo.js'

const AllOfficers = () => {
    const OfficerCards = OfficerInfo.map(data => {
        return <Card 
            officer={data.name} 
            position={data.position}
            major={data.major}
            linkedin={data.linkedin}
            img={"Placeholder.jpg"}
            />
    })

    return (
        <div className='2xl:mb-20 m:mb-12 mb-8'>
            <h1 className='text-center 2xl:text-5xl m:text-4xl text-3xl 2xl:m-10 m:mt-6 mt-4 '>Meet the Officers!</h1>
            <div name="Card Container" className='flex flex-wrap justify-center gap-20 2xl:m-15 m:m-10 m-8'>
                {OfficerCards}
            </div>
        </div>
    )
}

export default AllOfficers