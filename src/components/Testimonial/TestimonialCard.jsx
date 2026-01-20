import React from "react";
import "./TestimonialCard.css";

import stars from "../../assets/stars.png";
import testiLogo from "../../assets/testi-logo.png";
import quote from "../../assets/comma.png"; 

const TestimonialCard = ({ name, role, review, image }) => {
  return (
    <div className="tcard">

      {/* TOP SECTION */}
      <div className="tcard-top">
        <img src={image} alt={name} className="tcard-img" />

        <div className="tcard-top-right">
          <div className="tcard-info">
            <h3 className="tcard-name">{name}</h3>
            <p className="tcard-role">{role}</p>
          </div>

          <div className="tcard-stars-row">
            <img src={stars} className="tcard-stars" alt="rating" />

            <div className="tcard-badge">
              <img src={testiLogo} alt="logo" />
            </div>
          </div>
        </div>
      </div>

      {/* REVIEW SECTION */}
      <div className="tcard-body">
        <p className="tcard-review">{review}</p>
        <img src={quote} alt="quote" className="tcard-quote" />
      </div>

    </div>
  );
};

export default TestimonialCard;
