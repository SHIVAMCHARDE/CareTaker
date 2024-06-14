
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import '../components/auth.css';
import caretakerImage from '../components/CareTaker.jpg'; // Import the CareTaker image
import '../styles/auth.css';
// Auth.css Use
const Login = () => {
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
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Login</h2>
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
        <button type="submit" className="btn-login">Login</button>
        <p>Don't have an account? <Link to="/signup" className="link-signup">Sign Up</Link></p>
      </form>
    </div>
    </div>

  );
};

export default Login;
