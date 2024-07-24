import './App.css'
import { useState, useEffect } from 'react';

function App() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lapTimes, setLapTimes] = useState([]);
  const [timerId, setTimerId] = useState(null);

  // Start the stopwatch
  const startStopwatch = () => {
    setIsRunning(true);
    const startTime = Date.now() - elapsedTime;
    const timer = setInterval(() => {
      const now = Date.now();
      const newElapsedTime = now - startTime;
      setElapsedTime(newElapsedTime);
    }, 10);
    setTimerId(timer);
  };

  // Pause the stopwatch
  const pauseStopwatch = () => {
    setIsRunning(false);
    clearInterval(timerId);
  };

  // Reset the stopwatch
  const resetStopwatch = () => {
    setIsRunning(false);
    setElapsedTime(0);
    setLapTimes([]);
    clearInterval(timerId);
  };

  // Record a lap
  const recordLap = () => {
    const lapTime = elapsedTime;
    setLapTimes([...lapTimes, lapTime]);
  };

  // Format time in HH:MM:SS.ss format
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}.${milliseconds < 10 ? '0' + milliseconds : milliseconds}`;
  };

  useEffect(() => {
    // Clean up interval when component unmounts
    return () => {
      clearInterval(timerId);
    };
  }, [timerId]);

  return (
    <div>
      <h1>{formatTime(elapsedTime)}</h1>
      {!isRunning ? (
        <button onClick={startStopwatch}>Start</button>
      ) : (
        <button onClick={pauseStopwatch}>Pause</button>
      )}
      <button onClick={resetStopwatch}>Reset</button>
      <button onClick={recordLap}>Lap</button>
      <ul>
        {lapTimes.map((lapTime, index) => (
          <li key={index}>{`Lap ${index + 1}: ${formatTime(lapTime)}`}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
