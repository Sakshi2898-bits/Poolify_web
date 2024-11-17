import React from "react";
import { FaCar, FaClock, FaCheck } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { MdPets } from "react-icons/md";
import { useLocation  } from "react-router-dom";
import "./RideDetails.scss";

const getTodayDate = () => {
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return today.toLocaleDateString('en-US', options);
};

const RideDetails = () => {
  const location = useLocation();
  const { ride } = location.state || {}; // Get ride details passed via state

  if (!ride) {
    return <div>No ride details available.</div>;
  }

  const { city, address, destination, driverName, amenities = [], time, photo } = ride;
  console.log("time",time);

  return (
    <div className="ride-details-container">
      <div className="heading">
        <h2>{getTodayDate()}</h2>
      </div>

      {/* First Card: Timing & Route */}
      <div className="card">
        <div className="card-header">
          <FaClock />
          <h3>{time}</h3>
        </div>
        <div className="card-content">
          <p><strong>{city}</strong>: {address}</p>
          <span>&nbsp;&nbsp; ➔ &nbsp;&nbsp;</span>
          <p><strong>Jaipur</strong>: {destination}</p>
        </div>
      </div>

      {/* Second Card: Driver Information */}
      <div className="card driver-card">
        <div className="card-header">
          <FaCar />
          <h3>Driver: {driverName}</h3>
        </div>
        <div className="card-content">
          <p><FaCheck /> Your booking won't be confirmed until the driver approves your request.</p>
        </div>
        <div className="card-footer">
          <div className="amenities">
            {amenities.length > 0 ? (
              amenities.map((amenity, index) => (
                <span key={index} className="amenity">
                  {amenity.icon} {amenity}
                </span>
              ))
            ) : (
              <p>No amenities available</p>
            )}
          </div>
        </div>
      </div>

      {/* Third Card: Passenger Information */}
      <div className="card passenger-card">
        <div className="card-header">
          <img src={photo} alt="Passenger" className="passenger-photo" />
          <h3>Sakshi (+ 1)</h3>
        </div>
        <div className="card-content">
          <p>{city} ➔ {destination}</p>
        </div>
        <div className="card-footer">
          <button className="book-button">Book</button>
        </div>
      </div>
    </div>
  );
};

export default RideDetails;
