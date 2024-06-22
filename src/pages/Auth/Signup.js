import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import '../components/auth.css';
import caretakerImage from '../../components/CareTaker.jpg';
import '../../styles/auth.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="auth-container-signup">
         <div className="caretaker-container">
          
          <img src={caretakerImage} alt="CareTaker" className="caretaker-image" />
        </div>
      <div className="auth-content">
        <form onSubmit={handleSubmit} className="auth-form">
          <h2>Sign Up</h2>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit" className="btn-signup">Sign Up</button>
        </form>
        </div>
       
      
    </div>
  );
};

export default Signup;
