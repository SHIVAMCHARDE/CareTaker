import React from 'react'
import { EventsData } from '../../../Data/Data'

export const AtteEvents = () => {
  return (
    <>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3 mx-4'>
            {EventsData.map((event, index) => (
                <EventCard key={index} data={event} />
            ))}
        </div>
    </>
  )
}

const EventCard = ({ data }) => {
    return (
        <div className='bg-gray-300 p-4 rounded-lg shadow-md'>
            <h4 className='text-xl font-bold mb-2'>{data.title}</h4>
            <h4 className='text-lg  mb-1'>{data.date}</h4>
            <h4 className='text-lg '>{data.address}</h4>
        </div>
    );
}