import '../assets/css/styles.css'
import React from "react";
import dfImage from '../assets/img/DF_Logo.svg'

const Header = () => {
  const currDate = new Date().toLocaleDateString();

  return (
    <header className="masthead bg-primary text-white text-center">
                  <div className="container d-flex align-items-center flex-column">
                <img className="masthead-avatar mb-5" src={dfImage} alt="Digital Futures Logo" />
                <h1 id="header" className="masthead-heading text-uppercase mb-0">Digital Futures</h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <p className="masthead-subheading font-weight-light mb-0"> {currDate} </p>
            </div>
            </header>
  );
}

export default Header;