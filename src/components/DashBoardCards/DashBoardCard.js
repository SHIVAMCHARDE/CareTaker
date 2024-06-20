import React from "react";
import "../../styles/DashBoardCardsCSS/DashBoardCard.css";
import Userimagin from '../../assets/UserImagin.png';
import UserOne from '../../assets/UserOne.jpg';
import celender from '../../assets/celender.png';


const hiredCaretakers = [
  {
    name: "Sania Paro",
    imgSrc: Userimagin
  },
  {
    name: "Neha Garg",
    imgSrc: UserOne
  },
  // Add more caretakers as needed
];

const upcomingEvents = [
  {
    name: "Yoga Session",
    imgSrc: Userimagin
  },
  {
    name: "21st June 2024 | 8 am",
    imgSrc: UserOne
  },
  // Add more events as needed
];

export default function DashBoardCard() {
  return (
    <div className="DashBoardContainer">
      <div className="DashBoardContainerOne">
        <div className="HIRED-CARETAKERS">
          <div className="Heading-Dashboard-Cards">
            <h2>HIRED CARETAKERS</h2>
          </div>
          <div className="DashBoard-Contains-Container">
            {hiredCaretakers.map((caretaker, index) => (
              <div className="CardsDashboard" key={index}>
                <div>
                  <img src={caretaker.imgSrc} alt={caretaker.name} className="ImgDashboard"  />
                </div>
                <div className="Names-Hired-Caretakers">
                  {caretaker.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="UPCOMING-EVENTS">
          <div className="Heading-Dashboard-Cards">
            <h2>UPCOMING EVENTS</h2>
          </div>
          <div className="DashBoard-Contains-Container">
            {upcomingEvents.map((event, index) => (
              <div className="CardsDashboard" key={index}>
                <div>
                  <img src={event.imgSrc} alt={event.name} className="ImgDashboard" />
                </div>
                <div className="Names-Hired-Caretakers">
                  {event.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="DashBoardContainerTwo">
        <div className="Heading-Dashboard-Cards">
          <h2>CALENDAR</h2>
        </div>
        <div className="CelenderIMG">
        <img src={celender} alt="" />
        </div>
      </div>
    </div>
  );
}
