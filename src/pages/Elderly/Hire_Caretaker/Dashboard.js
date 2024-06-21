import React, { useState } from 'react';
import { CareTakerData } from '../../../Data/Data';
// import ProfilePic from '../../assets/UserImagin.png';

export const Dashboard = () => {
  const [selectedData, setSelectedData] = useState(CareTakerData[0]);

  const handleSelect = (data) => {
    setSelectedData(data);
  };

  return (
    <>
      <div className='flex '>
        {/*  */}
        <div className='grid bg-gray-300 p-5 h-screen grid-cols-1 md:grid-cols-1 lg:grid-cols-1  mt-3 mx-4'>
          {CareTakerData.map((data, index) => (
            <SideBar key={index} data={data} onSelect={handleSelect} />
          ))}
        </div>
        {/*  */}
        <div className='w-full mx-5'>
          {/* Above  */}
          <div>
          {selectedData && <AboveSection img_src={selectedData.picture_url} user_data={selectedData} />}
          </div>
          {/* ser exp price */}
        <div className='mt-5 '>
          {/* rate */}
          <div className='flex justify-between my-5' >
            <div className='text-2xl'>Rate per Month</div>
            <div className='bg-gray-300 p-2 w-96 rounded-lg text-2xl text-center'>{selectedData && selectedData.price}</div>
          </div>
          {/* exp */}
          <div className='flex justify-between my-5' >
            <div className='text-2xl'>Experience</div>
            <div className='bg-gray-300 p-2 w-96 rounded-lg text-2xl text-center'>{selectedData && selectedData.exp} Years</div>
          </div>
          {/* service */}
          <div className='flex justify-between my-5' >
            <div className='text-2xl'>Service</div>
            <div className='bg-gray-300 p-2 w-96 rounded-lg text-2xl text-center'>{selectedData && selectedData.service} </div>
          </div>
        </div>

          {/* reviews */}
          <div>
            <div className='w-auto p-1 bg-gray-300 text-4xl text-center rounded-lg '>
              Reviews
            </div>

          </div>
        </div>
        
      </div>
    </>
  );
};

const SideBar = ({ data, onSelect }) => {
  return (
    <div
      className='flex items-center h-24 bg-white gap-6 p-2 rounded-lg shadow-md cursor-pointer'
      onClick={() => onSelect(data)}
    >
      <div>
        <img src={data.picture_url} alt="CareTaker" className="ms-2 w-12 h-12 object-cover rounded-full" />
      </div>
      <div>
        <h4 className='text-xl font-bold me-2'>{data.first_name} {data.last_name}</h4>
      </div>
    </div>
  );
};

const AboveSection = ({ user_data }) => {
  return (
      <>
          <div className='flex justify-between m-4'>
              {/* img and data */}
              <div className='flex items-center gap-3'>
                  {/* img */}
                  <div className=''>
                      <img src={user_data.picture_url } alt="tourism 1" className=" w-36 h-36 object-cover" />
                  </div>
                  {/* data */}
                  <div className=''>
                      <h4 className='my-3 text-2xl'>{user_data.first_name} {user_data.last_name}</h4>
                      <h4 className='my-3 text-2xl'>{user_data.age} years</h4>
                      <h4 className='my-3 text-2xl'>{user_data.location}</h4>
                  </div>
              </div>
              {/* two buttons */}
              <div className='me-20 '>
                  <div className='my-5'>
                      <button className="bg-yellow-400  hover:bg-yellow-500 flex p-2  rounded-xl text-white w-28 justify-center relative">
                          <span className='ms-1'>Hire Me</span>
                      </button>
                  </div>

                  <div className='my-5'>
                      <button className="bg-yellow-400 hover:bg-yellow-500 flex p-2 rounded-xl text-white w-28 justify-center relative">
                          <span className='ms-1'>Call Me</span>
                      </button>
                  </div>
              </div>
          </div>
      </>
  )
}

const ReviewCard = ({}) =>{
  return(
    <>
    
    </>
  );

}

