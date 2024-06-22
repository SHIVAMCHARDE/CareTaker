import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';

import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Registration from './pages/Auth/Registration';
import HomePage from './pages/HomePage';
import UserRegistration from './pages/Auth/UserRegistration';
import CareTakerRegistration from './pages/CareTakerRegistration';
import DashBoard from './pages/DashBoard';
import { HiredCareTaker } from './pages/Elderly/Profile/HiredCareTaker';
import { Profile } from './pages/Elderly/Profile/Profile';
import { AtteEvents } from './pages/Elderly/Profile/AtteEvents';
import { Dashboard } from './pages/Elderly/Hire_Caretaker/Dashboard';
import { MyCustomer } from './pages/CareTaker/Customer/MyCustomer';
import { ReviewPage } from './pages/CareTaker/Review/ReviewPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<DashBoard />} />
        <Route path="/homecaretaker" element={<DashBoard />} />
      </Routes>
    </Router>
  );
};

export default App;
