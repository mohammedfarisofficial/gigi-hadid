import React from 'react';
import "../styles/component/hero.scss";
import Navbar from './Navbar';
import { landingData } from "../assets/index"
import Overlay from './Overlay';

function Hero() {
    return (
      <div className="hero">
        <Navbar logoName="gigi hadid" home={true} />
        <Overlay />
        <div className="hero-title-section">
          <h2>{landingData.title}</h2>
          <p>{landingData.subtitle}</p>
        </div>
        <div className="hero-image-section">
            <img src={landingData.landingImage} alt={landingData.title}/>
        </div>
      </div>
    );
}

export default Hero
