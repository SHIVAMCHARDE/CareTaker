import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import './careTakerList.css';

const CareTakerList = () => {
  const [careTakers, setCareTakers] = useState([]);

  useEffect(() => {
    
    axios.get('https:/')
      .then(response => setCareTakers(response.data))
      .catch(() => {
       
        setCareTakers([
          { id: 1, name: 'John Doe' },
          { id: 2, name: 'Jane Smith'},
          { id: 3, name: 'John Doe' },
          { id: 4, name: 'Jane Smith'},
          { id: 5, name: 'John Doe' },
          { id: 6, name: 'Jane Smith'},
          { id: 7, name: 'John Doe' },
          { id: 8, name: 'Jane Smith'},
          { id: 9, name: 'John Doe' },
          { id: 10, name: 'Jane Smith'}
        ]);
      });
  }, []);

  return (
    <div className="care-taker-list ">
      {careTakers.map(careTaker => (
        <Card key={careTaker.id} careTaker={careTaker}  />
      ))}
    </div>
  );
};

export default CareTakerList;
