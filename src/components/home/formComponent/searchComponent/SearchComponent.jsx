import React, { useState } from "react";
import { useLocation  } from "react-router-dom";
import { Col, Row, Form, Button } from "react-bootstrap";
import { FaClock, FaCar, FaCheck, FaSmoking, FaDog } from "react-icons/fa";
import FormComponent from "../FormComponent"; 
import ridesData from "./ridesMockData"; 
import { useNavigate } from "react-router-dom";

import "./SearchComponent.scss";

const SearchComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();


  // Destructure form data passed via state
  const { leavingFrom, goingTo, date, passengers } = location.state || {};

  const [departureTime, setDepartureTime] = useState("");
  const [amenities, setAmenities] = useState("");

  // Handle changes in the radio buttons
  const handleDepartureTimeChange = (e) => {
    setDepartureTime(e.target.value);
  };

  const handleAmenitiesChange = (e) => {
    setAmenities(e.target.value);
  };

  // Clear all filters
  const handleClearFilters = () => {
    setDepartureTime("");
    setAmenities("");
  };

  const handleCardClick = (ride) => {
    navigate("/trip", { state: { ride } }); // Using navigate() to pass the ride data
  };


  return (
    <div className="search-page">
      <div className="search-form-container">
        {/* <FormComponent /> */}
      </div>

      <Row className="search-content">
        <Col md={4} className="filters-section">
          <h3>Sort By</h3>
          <Form>
            <Form.Check
              type="radio"
              id="earliest-departure"
              label="Earliest Departure"
              name="sortBy"
            />
            <Form.Check
              type="radio"
              id="lowest-price"
              label="Lowest Price"
              name="sortBy"
            />
            <Form.Check
              type="radio"
              id="close-departure-point"
              label="Close to Departure Point"
              name="sortBy"
            />
            <Form.Check
              type="radio"
              id="close-arrival-point"
              label="Close to Arrival Point"
              name="sortBy"
            />
            <Form.Check
              type="radio"
              id="shortest-ride"
              label="Shortest Ride"
              name="sortBy"
            />
            <Button variant="link" className="clear-filters" onClick={handleClearFilters}>
              Clear All
            </Button>
          </Form>

          <h3>Departure Time</h3>
          {/* Departure Time Radio Buttons */}
          <Form.Check
            type="radio"
            id="06-08"
            label="06:00 - 08:00"
            name="departureTime"
            value="06:00 - 08:00"
            checked={departureTime === "06:00 - 08:00"}
            onChange={handleDepartureTimeChange}
          />
          <Form.Check
            type="radio"
            id="08-10"
            label="08:00 - 10:00"
            name="departureTime"
            value="08:00 - 10:00"
            checked={departureTime === "08:00 - 10:00"}
            onChange={handleDepartureTimeChange}
          />
          <Form.Check
            type="radio"
            id="12-14"
            label="12:00 - 14:00"
            name="departureTime"
            value="12:00 - 14:00"
            checked={departureTime === "12:00 - 14:00"}
            onChange={handleDepartureTimeChange}
          />
          <Form.Check
            type="radio"
            id="15-18"
            label="15:00 - 18:00"
            name="departureTime"
            value="15:00 - 18:00"
            checked={departureTime === "15:00 - 18:00"}
            onChange={handleDepartureTimeChange}
          />
          <Form.Check
            type="radio"
            id="18-24"
            label="18:00 - 24:00"
            name="departureTime"
            value="18:00 - 24:00"
            checked={departureTime === "18:00 - 24:00"}
            onChange={handleDepartureTimeChange}
          />

          <h3>Trust and Safety</h3>
          <div className="filter-item">
            <FaCheck /> Verified Profile (10 Rides)
          </div>

          <h3>Amenities</h3>
          {/* Amenities Radio Buttons */}
          <Form.Check
            type="radio"
            id="max-2-back"
            label="Max. 2 in the back"
            name="amenities"
            value="Max. 2 in the back"
            checked={amenities === "Max. 2 in the back"}
            onChange={handleAmenitiesChange}
          />
          <Form.Check
            type="radio"
            id="instant-booking"
            label="Instant Booking"
            name="amenities"
            value="Instant Booking"
            checked={amenities === "Instant Booking"}
            onChange={handleAmenitiesChange}
          />
          <Form.Check
            type="radio"
            id="smoking-allowed"
            label="Smoking Allowed"
            name="amenities"
            value="Smoking Allowed"
            checked={amenities === "Smoking Allowed"}
            onChange={handleAmenitiesChange}
          />
          <Form.Check
            type="radio"
            id="pets-allowed"
            label="Pets Allowed"
            name="amenities"
            value="Pets Allowed"
            checked={amenities === "Pets Allowed"}
            onChange={handleAmenitiesChange}
          />
          <Form.Check
            type="radio"
            id="luggage-space"
            label="Luggage Space"
            name="amenities"
            value="Luggage Space"
            checked={amenities === "Luggage Space"}
            onChange={handleAmenitiesChange}
          />
        </Col>

        <Col md={8} className="rides-section">
          <h3>
            Today: {leavingFrom} → {goingTo}
          </h3>
          <p>{ridesData.length} rides available</p>
          <div className="rides-list">
            {ridesData.map((ride, index) => (
              <div className="ride-card" key={index} onClick={() => handleCardClick(ride)} >
                <div className="ride-info">
                  <div className="ride-timing">
                    <FaClock /> {ride.time}
                  </div>
                  <div className="ride-route">
                    <h4>{ride.city}</h4>
                    <p>{ride.address}</p>
                    <h4>{ride.destination}</h4>
                    <p>{ride.destinationAddress}</p>
                  </div>
                </div>
                <div className="ride-details">
                  <div className="ride-amenities">
                    {ride.amenities.map((amenity, i) => (
                      <div key={i} className="amenity">
                        <FaCar /> {amenity}
                      </div>
                    ))}
                  </div>
                  <div className="ride-price">{ride.price}</div>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SearchComponent;
