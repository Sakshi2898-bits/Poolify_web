import React from "react";
import { Image } from "react-bootstrap";
import "./Home.scss";
import poolifyHome from "../../assets/poolifyHome.png";
import FormComponent from "./formComponent/FormComponent";
import CardComponent from "./cardComponent/Card";
import HeroSection from "./heroSectionComponent/HeroSection";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-container">
        <div className="form-container">
          <FormComponent />
          <div className="image-gallery">
            <Image src={poolifyHome} alt="Blurred Car Pool" className="home-image" fluid />
          </div>
        </div>
      </div>
      <div className="card-hero-container">
        <CardComponent />
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;
