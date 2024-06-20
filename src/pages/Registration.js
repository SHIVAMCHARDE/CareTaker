import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Registration.css';
export default function Registration() {
  return (
    <div className='Registration-Container'>

      <div className="Btn-As-Elderly">
        <Link to="/UserRegistration">
          <button>As Elderly</button>
        </Link>
      </div>
      <div className="Btn-CareTaker">
        <Link to="/CareTakerRegistration">
          <button>As Care Taker</button>
        </Link>
      </div>
    </div>
  );
}
