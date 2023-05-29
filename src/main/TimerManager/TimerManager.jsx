import { useEffect, useState } from "react";
import { useTimer, useSlider } from "../../hooks";
import { InputSlider, ProgressBar } from "../../components";

const TimerManager = () => {
    const {isRunning, minutes, seconds, reset, startTimer} = useTimer();
    const {selectedTIme, handleSliderChange, handleBlur, handleInputChange} = useSlider();

    useEffect(()=> {
        if(seconds === selectedTIme){
            alert('Timer reached to selected time');
            reset();
        }
        else if(seconds >= selectedTIme) {
            alert('elapsed time greater than select time');
            reset();
        }

    }, [seconds]);

    return (
     <>
       <p>
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
        </p>

      <div>
        {
            !isRunning ? <button className="stopwatch-button" onClick={startTimer}>Start</button> 
            : <button className="stopwatch-button" onClick={reset}>Reset</button>
        }

       <InputSlider 
            selectedTIme={selectedTIme}
            handleSliderChange={handleSliderChange}
            handleBlur={handleBlur}
            handleInputChange={handleInputChange}
       />
       <ProgressBar currentTime={seconds} selectedTIme={selectedTIme}/>
      </div>
    </>
    )
};

export {TimerManager};
