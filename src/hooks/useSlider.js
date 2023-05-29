import { useState } from "react";

const useSlider = () => {
    const [selectedTIme, setSelectedTime] = useState(30); 

  const handleSliderChange = (event, newValue) => {
    setSelectedTime(newValue);
  };

  const handleInputChange = (event) => {
    setSelectedTime(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (selectedTIme < 0) {
        setSelectedTime(0);
    } else if (selectedTIme > 100) {
        setSelectedTime(100);
    }
  };

  return {selectedTIme, handleSliderChange, handleBlur, handleInputChange};
};

export {useSlider};