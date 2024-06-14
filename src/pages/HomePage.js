import React from 'react';
import { useNavigate } from 'react-router-dom';
import CareTakerList from '../components/CareTakerList';
import './Home.css';
const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/caretakers');
  };

  return (
    <div className="home-container">
      <CareTakerList />
    </div>
  );
};

export default HomePage;
