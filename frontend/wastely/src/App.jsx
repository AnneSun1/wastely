import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes } from 'react-router';
import './App.css';
import Wastely from './Wastely';
import Find from './Find';
import Navbar from './Navbar';
import NoPage from './NoPage';
import Map from './Map';
function App() {
  return (
    <div>
      <Navbar/>
      {/* <Map/> */}
      <Routes>
        <Route path="/" element={<Wastely />} />
        <Route path="/map" element={<Find/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  )
}

export default App
