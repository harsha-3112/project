import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ icon, title, desc }) => {
  return (
    <div className="service-card">
      <div className="service-icon-wrapper">
        <img src={icon} alt={title} className="service-icon" />
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-desc">{desc}</p>
    </div>
  );
};

export default ServiceCard;
