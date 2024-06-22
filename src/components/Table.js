import React from 'react'

export const Table = ({data,title}) => {
    return (
        <div className="min-h-screen p-4">
          <h1 className='text-6xl mb-14'>{title}</h1>
          <div className='items-center justify-center w-full'>
          <table className="w-full text-justify items-center justify-center  text-3xl">
            <thead>
              <tr className='space-x-8 text-center'>
                <th className="bg-gray-300 px-8 py-4">Name</th>
                <th className="bg-gray-300 px-8 py-4">Location</th>
                <th className="bg-gray-300 px-8 py-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((customer, index) => (
                <tr key={index} className="border-none text-center">
                  <td className="px-8 py-4">{customer.name}</td>
                  <td className="px-8 py-4">{customer.location}</td>
                  <td className="px-8 py-4">{customer.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      );
}
