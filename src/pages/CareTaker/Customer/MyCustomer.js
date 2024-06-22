import React, { useState } from "react";
import { AllCustomer } from "./AllCustomer";
import { CurrentCustomers } from "./CurrentCustomers";
import { PastCustomers } from "./PastCustomers";

export const MyCustomer = () => {
  const [selectedData, setSelectedData] = useState(NavData[0]);

  const handleSelect = (data) => {
    setSelectedData(data);
  };

  const renderContent = () => {
    switch (selectedData) {
      case "All Customers":
        return <AllCustomer />;
      case "Current Customers":
        return <CurrentCustomers />;
      case "Past Customers":
        return <PastCustomers />;

      default:
        return <div>Select an option</div>;
    }
  };
  return (
    <>
      <div className="flex">
        {/* sidebar */}
        <div className="grid bg-gray-300 p-5 h-screen grid-cols-1 md:grid-cols-1 lg:grid-cols-1  mt-3 mx-4">
          {NavData.map((data, index) => (
            <SideBar key={index} data={data} onSelect={handleSelect} />
          ))}
        </div>
        <div className="w-full">
          {renderContent()}
        </div>
      </div>
    </>
  );
};

const NavData = ["All Customers",  "Current Customers",  "Past Customers"];

const SideBar = ({ data, onSelect }) => {
  return (
    <div
      className="flex items-center text-center  h-24 bg-white active:bg-green-300 gap-6 p-2 rounded-lg shadow-md cursor-pointer"
      onClick={() => onSelect(data)} 
    >
      <div>
        <h4 className="text-xl font-bold me-2 ">{data}</h4>
      </div>
    </div>
  );
};

