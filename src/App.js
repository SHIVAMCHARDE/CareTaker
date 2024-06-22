import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import Login from './pages/Login';
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

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/registration" element={<Registration />} />
        {/* <Route path="/" element={<Navigate to="/login" />} /> */}
        <Route path="userRegistration" element={<UserRegistration/>} />
        <Route path="caretakerRegistration" element={<CareTakerRegistration/>} />
        <Route path="dashboard" element={<DashBoard/>} />
        <Route path="profile/*" element={<Profile/>} >
          <Route path='caretaker' element={<HiredCareTaker/>}/>
          <Route path='events' element={<AtteEvents/>}/>
        </Route>
        <Route path="/hirecaretaker" element={<Dashboard/>} />
        <Route path="/customer" element={<MyCustomer/>} />
      </Routes>
    </Router>
  );
};

export default App;
