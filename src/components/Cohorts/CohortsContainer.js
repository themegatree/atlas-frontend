import '../../assets/css/styles.css'
import React from "react";
import Cohorts from './Cohorts.js'

const CohortsContainer = () => {
  return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                <h2 id="cohorts-list" className="page-section-heading text-center text-uppercase text-secondary mb-0">Cohort List</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <Cohorts/>
            </div>
        </section>
  );
}

export default CohortsContainer;
