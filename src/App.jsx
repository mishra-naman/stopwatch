// App.jsx
import React, { useState, useEffect } from 'react';


import './App.css'; // Ensure to include App CSS if you have it
import DarkModeStopwatch from './components/DarkModeStopwatch';

export default function App() {
  return (
    <div className="App">
     <DarkModeStopwatch/>
     
    </div>
  );
}
