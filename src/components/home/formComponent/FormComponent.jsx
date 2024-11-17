import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaMapMarkerAlt, FaArrowAltCircleRight } from "react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./Form.scss";
import Modal from "react-modal";

import cityData from "./cities.json";

const FormComponent = () => {
  const [leavingFrom, setLeavingFrom] = useState("");
  const [goingTo, setGoingTo] = useState("");
  const [date, setDate] = useState(new Date());
  const [passengers, setPassengers] = useState(1);

  const navigate = useNavigate();

  const onHandleChangePassengers = (action) => {
    setPassengers((prev) => {
      if (action === "increment") {
        return prev < 5 ? prev + 1 : prev; // Limit increment to 5
      }
      if (action === "decrement") {
        return prev > 1 ? prev - 1 : prev; // Prevent decrement below 1
      }
      return prev;
    });
  };

  const getPassengerText = () => (passengers === 1 ? "Passenger" : "Passengers");

  const handleSearch = () => {
    navigate("/search", {
      state: {
        leavingFrom,
        goingTo,
        date,
        passengers,
      },
    });
  };

  return (
    <>
      <Row className="form-row"></Row>
      <Form className="form">
        <Col>
          <h2>Book Your Ride</h2>
        </Col>
        <Row>
          {/* Pickup Location */}
          <Col md={3}>
            <Form.Group controlId="leavingFrom">
              <div className="input-container">
                <FaMapMarkerAlt className="input-icon" />
                <Form.Control
                  as="select"
                  value={leavingFrom}
                  onChange={(e) => setLeavingFrom(e.target.value)}
                  className="form-input"
                >
                  <option value="" disabled>
                    Select Pickup Location
                  </option>
                  {cityData.map((item, index) => (
                    <option key={index} value={item.name}>
                      {item.city}
                    </option>
                  ))}
                </Form.Control>
              </div>
            </Form.Group>
          </Col>

          {/* Dropoff Location */}
          <Col md={3}>
            <Form.Group controlId="goingTo">
              <div className="input-container">
                <FaArrowAltCircleRight className="input-icon" />
                <Form.Control
                  as="select"
                  value={goingTo}
                  onChange={(e) => setGoingTo(e.target.value)}
                  className="form-input"
                >
                  <option value="" disabled>
                    Select Dropoff Location
                  </option>
                  {cityData.map((item, index) => (
                    <option key={index} value={item.name}>
                      {item.city}
                    </option>
                  ))}
                </Form.Control>
              </div>
            </Form.Group>
          </Col>

          {/* Date Picker */}
          <Col md={3}>
            <Form.Group controlId="date">
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                className="form-control form-input"
                placeholderText="Select Date"
                dateFormat="dd/MM/yyyy"
              />
            </Form.Group>
          </Col>

          {/* Passengers */}
          <Col md={2} style={{ marginLeft: "-54px" }}>
            <Form.Group controlId="passengers">
              <div className="passenger-counter">
              <AiOutlineMinus
                  className="passenger-icon"
                  onClick={() => onHandleChangePassengers("decrement")}
                />
                <span className="passenger-count">{passengers} {getPassengerText()}</span>
                <AiOutlinePlus
                  className="passenger-icon"
                  onClick={() => onHandleChangePassengers("increment")}
                />
              </div>
            </Form.Group>
          </Col>

          {/* Search Button */}
          <Col md={1}>
            <Button type="submit" className="search-button" onClick={handleSearch}>
              Search
            </Button>
          </Col>
        </Row>
      </Form>

    </>
  );
};

export default FormComponent;
