import React, { useState } from "react";
import { CareTakerData } from "../../../Data/Data";
import { Modal } from 'antd';


export const Dashboard = () => {
  const [selectedData, setSelectedData] = useState(CareTakerData[0]);

  const handleSelect = (data) => {
    setSelectedData(data);
  };

  return (
    <>
      <div className="flex ">
        {/* sidebar */}
        <div className="grid bg-gray-300 p-5 h-screen grid-cols-1 md:grid-cols-1 lg:grid-cols-1  mt-3 mx-4">
          {CareTakerData.map((data, index) => (
            <SideBar key={index} data={data} onSelect={handleSelect} />
          ))}
        </div>
        {/*  */}
        <div className="w-full mx-5">
          {/* Above  */}
          <div>
            {selectedData && (
              <AboveSection
                img_src={selectedData.picture_url}
                user_data={selectedData}
              />
            )}
          </div>
          {/* ser exp price */}
          <div className="mt-5 ">
            {/* rate */}
            <div className="flex justify-between my-5">
              <div className="text-2xl">Rate per Month</div>
              <div className="bg-gray-300 p-2 w-96 rounded-lg text-2xl text-center">
                {selectedData && selectedData.price}
              </div>
            </div>
            {/* exp */}
            <div className="flex justify-between my-5">
              <div className="text-2xl">Experience</div>
              <div className="bg-gray-300 p-2 w-96 rounded-lg text-2xl text-center">
                {selectedData && selectedData.exp} Years
              </div>
            </div>
            {/* service */}
            <div className="flex justify-between my-5">
              <div className="text-2xl">Service</div>
              <div className="bg-gray-300 p-2 w-96 rounded-lg text-2xl text-center">
                {selectedData && selectedData.service}{" "}
              </div>
            </div>
          </div>

          {/* reviews */}
          <div>
            <div className="w-auto p-1 bg-gray-300 text-4xl text-center rounded-lg ">
              Reviews
            </div>
            <div className="mt-3 gap gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {selectedData &&
                selectedData.review.map((data, index) => (
                  <ReviewCard key={index} data={data} />
                ))}
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
      className="flex items-center h-24 bg-white gap-6 p-2 rounded-lg shadow-md cursor-pointer"
      onClick={() => onSelect(data)}
    >
      <div>
        <img
          src={data.picture_url}
          alt="CareTaker"
          className="ms-2 w-12 h-12 object-cover rounded-full"
        />
      </div>
      <div>
        <h4 className="text-xl font-bold me-2">
          {data.first_name} {data.last_name}
        </h4>
      </div>
    </div>
  );
};

const AboveSection = ({ user_data }) => {
  const [visible, setVisible] = useState(false);
  const [data,setData] = useState({
    date:"",
    time:""
  })
  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const openModal = () => {
    console.log("first")
    setVisible(true)
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(data)
  }
  return (
    <>
      <Modal
        onCancel={() => setVisible(false)}
        footer={null}
        open={visible}
      >
        <form className="p-3" onSubmit={onSubmitHandler} encType="multipart/form-data">
          <div className="flex justify-between my-3">
            <label className="text-xl">Date</label>
            <input className="bg-gray-200 p-3 w-32 me-2 rounded-lg" type="date" name="date" onChange={onChangeHandler}/>
          </div>
          <div className="flex justify-between">
            <label className="text-xl">Time</label>
            <input className="bg-gray-200 p-3 w-32 me-2 rounded-lg" type="time" name="time" onChange={onChangeHandler}/>
          </div>
          <button className="bg-[#FFE8A3]  hover:bg-[#FFE185] flex p-2  rounded-xl text-white w-48 justify-center item-center relative"  >
            <span className="ms-1">Submit Request</span>
          </button>
        </form>
      </Modal>


      <div className="flex justify-between m-4">
        {/* img and data */}
        <div className="flex items-center gap-3">
          {/* img */}
          <div className="">
            <img
              src={user_data.picture_url}
              alt="tourism 1"
              className=" w-36 h-36 object-cover"
            />
          </div>
          {/* data */}
          <div className="">
            <h4 className="my-3 text-2xl">
              {user_data.first_name} {user_data.last_name}
            </h4>
            <h4 className="my-3 text-2xl">{user_data.age} years</h4>
            <h4 className="my-3 text-2xl">{user_data.location}</h4>
          </div>
        </div>
        {/* two buttons */}
        <div className="me-20 ">
          <div className="my-5">
            <button className="bg-[#FFE8A3]  hover:bg-[#FFE185]  flex p-2  rounded-xl  w-28 justify-center relative"
              onClick={openModal}
            >
              <span className="ms-1">Hire Me</span>
            </button>
          </div>

          <div className="my-5">
            <button className="bg-[#FFE8A3]  hover:bg-[#FFE185]  flex p-2 rounded-xl  w-28 justify-center relative">
              <span className="ms-1">Call Me</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const ReviewCard = ({ data }) => {
  return (
    <>
      <div className="bg-gray-200 rounded-lg p-3 ">
        {/* img & text */}
        <div className="flex justify-between mb-3" >
          <div className="">
            <img
              src={data.picture_url}
              alt="tourism 1"
              className="w-16 h-16 object-cover rounded-full mx-auto mix-blend-color-burn items-center"
            />
          </div>
          <div>
            <h4 className="text-xl ms-5">{data.descp}</h4>
          </div>
        </div>
        {/* stars */}
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-6 h-6 ${index < data.stars ? 'text-yellow-400' : 'text-gray-400'}`}
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="none"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
      </div>
    </>
  );
};
