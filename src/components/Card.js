import React, { useState } from 'react';
// import './Card.css';
import "../styles/Card.css"

const Card = ({ careTaker }) => {
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  const handleDateChange = (e) => {
    setAppointmentDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setAppointmentTime(e.target.value);
  };

  const handleSelect = () => {
    alert(`Selected appointment with ${careTaker.name} on ${appointmentDate} at ${appointmentTime}`);
  };

  return (
    <div className="card">
      <h3 className="card-title">{careTaker.name}</h3>
      <div className="input-group">
        <label htmlFor="date">Select Date</label>
        <input
          type="date"
          id="date"
          value={appointmentDate}
          onChange={handleDateChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="time">Select Time</label>
        <input
          type="time"
          id="time"
          value={appointmentTime}
          onChange={handleTimeChange}
        />
      </div>
      <button className="select-button" onClick={handleSelect}>
        Submit
      </button>
    </div>
  );
};

export default Card;
