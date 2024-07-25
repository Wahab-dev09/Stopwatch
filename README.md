Stopwatch App
A simple and elegant stopwatch application built with React. This project demonstrates the use of React hooks to manage state and side effects for time tracking.

Features
Start/Stop: Begin or pause the stopwatch.
Reset: Clear the elapsed time and lap records.
Lap: Record lap times and display them in a list.
Time Formatting: Shows time in MM:SS.ss format for readability.
Usage
Start: Click the "Start" button to begin tracking time.
Pause: Click the "Pause" button to halt the timer.
Reset: Click the "Reset" button to reset the stopwatch and lap times.
Lap: Click the "Lap" button to record the current time as a lap.
Code Overview
State Management:

elapsedTime: Tracks the time that has passed since the stopwatch started.
isRunning: Boolean flag to indicate if the stopwatch is running.
lapTimes: Array to store recorded lap times.
timerId: Holds the ID of the interval timer for cleanup purposes.
Functions:

startStopwatch: Starts the stopwatch and sets up the interval timer.
pauseStopwatch: Pauses the stopwatch and clears the interval timer.
resetStopwatch: Resets the elapsed time and lap times, and clears the interval timer.
recordLap: Adds the current elapsed time to the lap times list.
formatTime: Formats elapsed time into MM:SS.ss for display.
Effect Hook:

Cleans up the interval timer when the component unmounts to prevent memory leaks.
License
This project is licensed under the MIT License - see the LICENSE file for details.