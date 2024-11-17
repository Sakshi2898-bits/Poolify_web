import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.scss'; // Custom styling file

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              We provide a platform for carpooling, making travel easier and more sustainable.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4">
            <p>&copy; {new Date().getFullYear()} Poolify App. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
