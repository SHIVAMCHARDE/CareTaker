import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Registration from './pages/Registration';
import HomePage from './pages/HomePage';
import UserRegistration from './pages/UserRegistration';
import CareTakerRegistration from './pages/CareTakerRegistration';
import DashBoard from './pages/DashBoard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="userRegistration" element={<UserRegistration/>} />
        <Route path="caretakerRegistration" element={<CareTakerRegistration/>} />
        <Route path="dashboard" element={<DashBoard/>} />

      </Routes>
    </Router>
  );
};

export default App;
