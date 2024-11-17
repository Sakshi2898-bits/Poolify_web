import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import heroSectionImage1 from '../../../assets/heroSectionImage.png';
import heroSectionImage2 from '../../../assets/heroSectionImage2.png';
import heroSectionImage3 from '../../../assets/heroSectionImage3.png';
import './HeroSection.scss';

const HeroSection = () => {
    return (
        <>
            <Container fluid className="hero-section teal-bg">
                <Row className="align-items-center">
                <Col>
                        <img src={heroSectionImage1} className="heroSection-image" alt="Real-time ride tracking" />
                    </Col>
                    <Col md={6} className="content-column">
                        <h2 className="hero-title">Stay Informed, Stay Secure</h2>
                        <p className="hero-description">
                            At Poolify, we understand how important it is to feel safe and connected during your commute. 
                            That’s why we offer real-time ride tracking to keep you and your loved ones informed throughout your journey.
                        </p>
                        <button type="button" className="section-button">
                            <FaCheckCircle style={{ marginRight: '8px' }} />
                            Get Started
                        </button>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="hero-section white-bg">
                <Row className="align-items-center">
                    <Col md={6} className="content-column">
                        <h2 className="hero-title">Verified Poolers for Your Safety</h2>
                        <p className="hero-description">
                            At Poolify, we prioritize your safety and trust. That’s why we use advanced OCR (Optical Character Recognition) technology to scan and authenticate driver licenses, ensuring every driver on our platform is verified and trustworthy.
                        </p>
                        <button type="button" className="section-button">
                            <FaCheckCircle style={{ marginRight: '8px' }} />
                            Get Started
                        </button>
                    </Col>
                    <Col>
                        <img src={heroSectionImage2} className="heroSection-image" alt="Verified Poolers" />
                    </Col>
                </Row>
            </Container>

            <Container fluid className="hero-section white-bg">
                <Row className="align-items-center">
                    <Col>
                        <img src={heroSectionImage3} className="heroSection-image" alt="SOS Panic Alert" />
                    </Col>
                    <Col md={6} className="content-column">
                        <h2 className="hero-title">SOS Panic Alert</h2>
                        <p className="hero-description">
                            Your safety is our top priority at Poolify. In case of an emergency, you can send an instant SOS message to your trusted contacts with just a tap.
                        </p>
                        <button type="button" className="section-button">
                            <FaCheckCircle style={{ marginRight: '8px' }} />
                            Get Started
                        </button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default HeroSection;
