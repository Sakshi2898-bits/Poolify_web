import React from "react";
import { AiOutlineCar } from "react-icons/ai";
import { MdPets, MdOutlineTimer } from "react-icons/md";
import { FaSmoking } from "react-icons/fa";

import "./RideCard.scss";

const RideCard = ({ ride }) => {
  const { city, address, price, name, amenities, time } = ride;

  return (
    <div className="ride-card">
      <div className="ride-details">
        <h4>
          {time.start} ----- {time.duration} ----- {time.end}
        </h4>
        <p>
          <strong>{city}</strong>: {address}
        </p>
        <div className="ride-amenities">
          <AiOutlineCar /> {name}
          {amenities.map((amenity, index) => (
            <span key={index} className="amenity">
              {amenity.icon} {amenity.text}
            </span>
          ))}
        </div>
      </div>
      <div className="ride-price">
        <h4>₹{price}</h4>
      </div>
    </div>
  );
};

export default RideCard;
