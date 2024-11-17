import React from "react";
import { SlArrowRight } from "react-icons/sl";
import "./ProfileVerification.scss";

const VehicleSelection = ({
  title,
  options,
  nextStep,
  setVehicleDetails,
  isModelSelection,
  isColorSelection,
}) => {
  const handleOptionClick = (option) => {
    if (isModelSelection) {
      setVehicleDetails((prevState) => ({
        ...prevState,
        model: option,
      }));
    } else if (isColorSelection) {
      setVehicleDetails((prevState) => ({
        ...prevState,
        color: option,
      }));
    } else {
      setVehicleDetails({ brand: option });
    }
    nextStep();
  };

  return (
    <div className="vehicle-selection">
      <h5>{title}</h5>
      <div className="vehicle-options">
        {options.map((option, index) => (
          <div
            key={index}
            className="vehicle-option"
            onClick={() => handleOptionClick(option)}
          >
            <span>{option}</span>
            <SlArrowRight className="icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleSelection;
