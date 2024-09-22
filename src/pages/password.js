import React, { useState } from 'react';

export default function PasswordInput() {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Password validation function
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*[^A-Za-z0-9]).{6,}$/;
    return passwordRegex.test(password);
  };

  // Handle password input change
  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);

    // Check if password is valid
    if (!validatePassword(inputPassword)) {
      setPasswordError('Password must be at least 6 characters long, include one special character, and one alphabet.');
    } else {
      setPasswordError('');
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePassword(password)) {
      alert(`Password is valid!`);
    } else {
      alert('Please fix the errors before submitting.');
    }
  };

  // Disable the submit button if the password is invalid or empty
  const isSubmitDisabled = passwordError || !password;

  return (
    <div className='password-container'>
      <form onSubmit={handleSubmit}>
        
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        

        <button className='btn' type="submit" disabled={isSubmitDisabled}>Submit</button>
      </form>
    </div>
  );
}


