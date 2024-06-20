import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import caretakerImage from '../components/CareTaker.jpg';
import '../styles/auth.css';

// need to be filled this for login i will try it later part/
const clientId = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  const onGoogleSuccess = (response) => {
    console.log('Login Success: currentUser:', response.profileObj);
    alert(`Logged in successfully welcome ${response.profileObj.name}.`);
    navigate('/home');
  };

  const onGoogleFailure = (response) => {
    console.log('Login failed: res:', response);
    alert('Failed to login.');
  };

  return (
    <div className="auth-container-signup">
      <div className="caretaker-container">
        <img src={caretakerImage} alt="CareTaker" className="caretaker-image" />
      </div>
      <div className="auth-container flex flex-col">
      <h2>Welcome Back</h2>
        <p>Sign In With Google For
        Seamless Integration</p>
      <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onGoogleSuccess}
          onFailure={onGoogleFailure}
          cookiePolicy={'single_host_origin'}
          className="google-login-btn"
        />
        {/* <form onSubmit={handleSubmit} className="auth-form">
          
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
          <div className='google-login '>
        
        </div>
        </form>
         */}
      </div>
      
    </div>
  );
};

export default Login;
