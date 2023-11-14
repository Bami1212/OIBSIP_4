// src/components/SecuredPage.js

import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function SecuredPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated
    const token = localStorage.getItem('token');
    if (!token) {
      // If not authenticated, redirect to the login page
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); // Redirect to the login page after logout
  };

  return (
    <div className="container">
      <h2>Secured Page</h2>
      <p>This is a secured page. Only authenticated users can access it.</p>
      <button onClick={handleLogout}>Logout</button>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default SecuredPage;
