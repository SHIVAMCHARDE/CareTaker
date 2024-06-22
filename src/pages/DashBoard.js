import React, { useState } from 'react';
import '../styles/SideBar.css';
import Userimagin from '../assets/UserImagin.png';
import AttendEvent from '../components/DashBoardCards/AttendEvent/AttendEvent';
import CreateEvent from '../components/DashBoardCards/CreateEvent';
import HireCaretaker from '../components/DashBoardCards/HireCaretaker';
import { Dashboard as HireCaretakerDashboard } from '../pages/Elderly/Hire_Caretaker/Dashboard';
import Medication from '../components/DashBoardCards/Medication';
import DashBoardCard from "../components/DashBoardCards/DashBoardCard";
import {Profile} from '../pages/Elderly/Profile/Profile'; // Import the new component to render on profile click

const profileData = {
  profileImg: Userimagin,
  name: 'John Doe'
};

export default function DashBoard() {
  const [activeOption, setActiveOption] = useState(null);

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const renderContent = () => {
    switch (activeOption) {
      case 'DASHBOARD':
        return <DashBoardCard />;
      case 'HIRE CARETAKER':
        return <HireCaretakerDashboard />;
      case 'ATTEND EVENT':
        return <AttendEvent />;
      case 'CREATE EVENT':
        return <CreateEvent />;
      case 'MEDICATION':
        return <Medication />;
      case 'PROFILE':
        return <Profile />; // Render the new component for profile
      default:
        return <div>Select an option</div>;
    }
  };

  return (
    <div className='MainSideBar-Container'>
      <div className="upper">
        <h1 className='Grammie'>GRAMMIE</h1>
      </div>
      <div className='SideBar-DisplayContent'>
        <div className="lower">
          <div className='SideBar-Options-Container'>
            {['DASHBOARD','HIRE CARETAKER', 'ATTEND EVENT', 'CREATE EVENT', 'MEDICATION'].map((option, index) => (
              <div
                key={index}
                className={activeOption === option ? 'active' : ''}
                onClick={() => handleOptionClick(option)}
              >
                <p>{option}</p>
              </div>
            ))}
          </div>
          <div className="Profile">
            <div className="ProfileImg">
              <img
                src={profileData.profileImg}
                alt="Profile"
                className='UserIMG mix-blend-color-burn cursor-pointer'
                onClick={() => handleOptionClick('PROFILE')} // Set activeOption to 'PROFILE' on click
              />
            </div>
            <div className="nameInfo">
              <div className="Name">{profileData.name}</div>
              <button className='Logout'>Log out</button>
            </div>
          </div>
        </div>
        <div className="content w-full">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
