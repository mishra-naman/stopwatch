// src/components/DarkModeStopwatch.jsx
import React, { useState, useRef } from 'react';
import { FaMoon } from 'react-icons/fa';
import { IoSunnyOutline } from 'react-icons/io5';
import { FaPlay, FaStop } from 'react-icons/fa';
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';
import './Stopwatch.css';

export default function DarkModeStopwatch() {
  const [darkMode, setDarkMode] = useState(false);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  };

  const toggleStartStop = () => {
    if (isRunning) {
      stop();
    } else {
      start();
    }
  };

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => setTime((prev) => prev + 1), 1000);
    }
  };

  const stop = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const reset = () => {
    setTime(0);
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className={`dark-mode-stopwatch ${darkMode ? 'dark' : 'light'}`}>
      <div className="stopwatch-container">
        <p className="stopwatch-time">{new Date(time * 1000).toISOString().substr(11, 8)}</p>
        <div className="stopwatch-buttons">
          <button onClick={toggleMode} className="small-button">
            {darkMode ? <IoSunnyOutline size={20} /> : <FaMoon size={20} />}
          </button>
          <button onClick={toggleStartStop} className="small-button">
            {isRunning ? <FaStop size={20} /> : <FaPlay size={20} />}
          </button>
          <button onClick={reset} className="small-button">Reset</button>
          <button onClick={toggleFullScreen} className="small-button">
            {document.fullscreenElement ? <MdFullscreenExit size={20} /> : <MdFullscreen size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
}
