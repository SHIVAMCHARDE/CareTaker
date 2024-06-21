
import React, { useState } from 'react';
import '../styles/SideBar.css';
import Userimagin from '../assets/UserImagin.png';
import AttendEvent from '../components/DashBoardCards/AttendEvent/AttendEvent';
import CreateEvent from '../components/DashBoardCards/CreateEvent';
import HireCaretaker from '../components/DashBoardCards/HireCaretaker';
import HiredCaretaker from '../components/DashBoardCards/HiredCaretaker';
import Medication from '../components/DashBoardCards/Medication';
import DashBoardCard from "../components/DashBoardCards/DashBoardCard";

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
        return <HireCaretaker />;
      case 'HIRED CARETAKER':
        return <HiredCaretaker />;
      case 'ATTEND EVENT':
        return <AttendEvent />;
      case 'CREATE EVENT':
        return <CreateEvent />;
      case 'MEDICATION':
        return <Medication />;
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
          {['DASHBOARD','HIRE CARETAKER', 'HIRED CARETAKER', 'ATTEND EVENT', 'CREATE EVENT', 'MEDICATION'].map((option, index) => (
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
              <img src={profileData.profileImg} alt="Profile"
              className='UserIMG' />
            </div>
            <div className="nameInfo">
              <div className="Name">{profileData.name}</div>
              <button className='Logout'>Log out</button>
            </div>
        </div>
        
      </div>
      <div className="content">
        {renderContent()}
      </div>
      </div>
      
    </div>
  );
}
