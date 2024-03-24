import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Register />} />
    </Routes>
  );
}

export default App;
