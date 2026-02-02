import React from 'react';
import LandingPage from './Pages/LandingPage';
import "./App.css";
import Navbar from './Component/Navbar';
import Box from '@mui/material/Box';
import AboutPage from './Pages/AboutPage';
function App() {
  return (
    <div>
      <Navbar />
      <Box id={'Home'}>
      <LandingPage />
      </Box>
      <Box id={'About'}>
        <AboutPage />
      </Box>
    </div>
      
  );
}
export default App; 
