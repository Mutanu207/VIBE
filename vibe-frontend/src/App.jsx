import React from 'react';
import LandingPage from './Pages/LandingPage';
import "./App.css";
import Navbar from './Component/Navbar';
import Box from '@mui/material/Box';
function App() {
  return (
    <div>
      <Navbar />
      <Box id={'Home'}>
      <LandingPage />
      </Box>
    </div>
      
  );
}
export default App; 
