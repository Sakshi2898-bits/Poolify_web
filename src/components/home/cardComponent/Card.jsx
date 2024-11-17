import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './Card.scss';
import logo1 from '../../../assets/logo1.svg';
import logo2 from '../../../assets/logo2.svg';
import logo3 from '../../../assets/logo3.svg';

const CardComponent = () => {
  return (
    <Row className="card-row">
      <Col md={4}>
        <Card className="custom-card mb-4 shadow-lg">
          <Card.Img variant="top" src={logo1} className="card-logo" />
          <Card.Body>
            <Card.Title className="card-title">Affordable Travelling Awaits You</Card.Title>
            <Card.Text className="card-text">
              Get ready for an exhilarating journey without breaking the bank! Choose from a variety of rides that offer unbeatable prices and endless fun.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="custom-card mb-4 shadow-lg">
          <Card.Img variant="top" src={logo2} className="card-logo" />
          <Card.Body>
            <Card.Title className="card-title">Reliable Companions and Trusted Poolers</Card.Title>
            <Card.Text className="card-text">
              We prioritize getting to know each of our members and bus partners thoroughly. By meticulously reviewing profiles, IDs, and feedback, we ensure you have complete confidence in your travel companions, allowing you to book your ride effortlessly on our secure platform.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="custom-card mb-4 shadow-lg">
          <Card.Img variant="top" src={logo3} className="card-logo" />
          <Card.Body>
            <Card.Title className="card-title">Swipe, Click, and Ride!</Card.Title>
            <Card.Text className="card-text">
              Experience the ease of booking a ride like never before! Our user-friendly app, equipped with advanced technology, enables you to secure a nearby ride in just a matter of minutes.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default CardComponent;
