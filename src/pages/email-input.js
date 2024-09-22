import React, { useState } from 'react';

export default function EmailInput() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);  // New state for email validity
  
    // Email validation function
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    // Handle email input change
    const handleEmailChange = (e) => {
      const inputEmail = e.target.value;
      setEmail(inputEmail);
  
      // Check if email is valid
      if (!validateEmail(inputEmail)) {
        setError('Please enter a valid email address.');
        setIsEmailValid(false);  // Set email as invalid
      } else {
        setError('');
        setIsEmailValid(true);   // Set email as valid
      }
    };
  
    // Handle form submission 
    const handleSubmit = (e) => {
      e.preventDefault();
      if (isEmailValid) {
        alert('Email is valid!');
      } else {
        alert('Please fix the errors before submitting.');
      }
    };
  
    return (
      <div
        className='email-container'
      >
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="user@example.com"
          />
          {/* Display error message */}
          {error && <p className='error-message'>{error}</p>} 

  
          {/* Disable button if email is invalid */}
          <button className='btn' type="submit" disabled={!isEmailValid}>Submit</button>
        </form>
      </div>
    );
  }


