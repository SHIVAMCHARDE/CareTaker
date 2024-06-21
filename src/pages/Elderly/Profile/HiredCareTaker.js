import React from 'react'
import { Outlet } from 'react-router-dom'
import ProfilePic from '../../../assets/UserOne.jpg'
import { CareTakerData } from '../../../Data/Data'

export const HiredCareTaker = () => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 mt-3 mx-4'>
                {CareTakerData.map((data, index) => (
                    <CareTakerCard key={index} data={data} />
                ))}
            </div>
            <Outlet /></>
    )
}

const CareTakerCard = ({ data }) => {
    return (
        <div className='bg-gray-200 p-4 rounded-lg shadow-md'>
            <div className=''>
                <img src={ProfilePic} alt="tourism 1" className="w-24 h-24 object-cover rounded-full mx-auto" />
            </div>
            <h4 className='text-xl font-bold mb-2'>{data.first_name} {data.last_name}</h4>
            <h4 className='text-lg mb-1'>{data.location}</h4>
            <h4 className='text-lg'>{data.phone_number}</h4>
        </div>
    );
}