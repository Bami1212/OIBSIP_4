// src/App.js

import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import SecuredPage from './components/SecuredPage';

function App() {
  return (
   
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/secured" element={<SecuredPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
   
  );
}

export default App;
