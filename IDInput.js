import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const IDInput = () => {
  const [userID, setUserID] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setError('');

    if (/^emp_\d{6}$/.test(userID)) {
      // Employee ID is valid, redirect to employee home page
      history.push('/employee-home');
    } else if (/^admin_\d{6}$/.test(userID)) {
      // Admin ID is valid, redirect to admin home page
      history.push('/admin-home');
    } else {
      // Show error if ID is invalid
      setError('Invalid ID. Employee ID must start with "emp_" and Admin ID must start with "admin_".');
    }
  };

  return (
    <div className="container">
      <h2>Enter Your ID</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userID">ID (e.g., emp_123456 or admin_123456):</label>
        <input 
          type="text" 
          id="userID" 
          value={userID} 
          onChange={(e) => setUserID(e.target.value)} 
          required 
        />
        <button type="submit">Submit</button>
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default IDInput;
