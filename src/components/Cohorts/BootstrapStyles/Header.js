import '../../../assets/css/styles.css'
import React from "react";
import DF_Image from '../../../assets/img/DF_Logo.svg'



function App() {
  return (
    <div >
    <header className="masthead bg-primary text-white text-center">
                  <div className="container d-flex align-items-center flex-column">

                <img className="masthead-avatar mb-5" src={DF_Image} alt="Digital Futures Logo" />
                <h1 id="header" className="masthead-heading text-uppercase mb-0">Digital Futures</h1>

                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>

                <p className="masthead-subheading font-weight-light mb-0">Placeholder</p>
            </div>
            </header>
            

    </div>
  );
}

export default App;