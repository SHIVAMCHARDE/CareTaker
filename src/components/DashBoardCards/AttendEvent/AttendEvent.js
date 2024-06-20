// import React from 'react'
import React, { useState } from 'react';
import TempleVisit from './TempleVisit';
import '../../../styles/DashBoardCardsCSS/AttendEventsSideBar.css'

export default function AttendEvent() {
  const [activeOption, setActiveOption] = useState(null);
  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const renderContent = () => {
    switch (activeOption) {
      case 'Temple Visit':
        return <TempleVisit/>;
    }}
  return (
    <div className='Main-AttendEvents'>
      <div className="AttendEventOptions">
      <div className='UpcomingEvents'> Upcoming Events </div>
       <div className='SideBar-Options-Containerss'>
       
          {['Yoga Session',' Short Picnic', 'Temple Visit', 'Laughing Club'].map((option, index) => (
            <div
              key={index}
              className={activeOption === option ? 'active' : ''}
              onClick={() => handleOptionClick(option)}
            >
              <p>{option}</p>
            </div>
          ))}
        </div>
        </div>
        <div className="RenderContainer">
        {renderContent()}
      </div>
    
    </div>
  )
}
