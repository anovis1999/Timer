import { useState, useEffect, useMemo } from "react";

const useTimer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
  
    useEffect(() => {
      let intervalId;
      if (isRunning) {
        intervalId = setInterval(() => setTime(time + 1), 10);
      }
      return () => clearInterval(intervalId);
    }, [isRunning, time]);
  
    
    const minutes = (useMemo(() => (
        Math.floor((time % 360000) / 6000)
    ), [time]))

  
    const seconds = Math.floor((time % 6000) / 100);
  
    const startTimer = () => {
      setIsRunning(!isRunning);
    };
  
    const reset = () => {
      setTime(0);
      setIsRunning(false);
    };


    return {isRunning, minutes, seconds, startTimer, reset}
};

export {useTimer};