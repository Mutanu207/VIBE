import React from 'react';
import LandingPage from './Pages/LandingPage';
import "./App.css";
import Navbar from './Component/Navbar';
import AboutPage from './Pages/AboutPage';
import MoodPage from './Pages/MoodPage';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
        <>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/mood" element={<MoodPage />} />
        </Routes>
        </>
  );
}
export default App; 

