import React from "react";
import "./Subscribe.css";

import spark from "../../assets/spark.png";

const Subscribe = () => {
  return (
    <div className="sub-container">

      <img src={spark} alt="spark" className="sub-spark spark-lt" />
      <img src={spark} alt="spark" className="sub-spark spark-rt" />
      <img src={spark} alt="spark" className="sub-spark spark-lb" />
      <img src={spark} alt="spark" className="sub-spark spark-rb" />

      <div className="sub-box">
        <h2 className="sub-title">Subscribe for our tips</h2>
        <p className="sub-desc">
          Clearly communicate the benefits of subscribing, such as exclusive
          content.
        </p>

        <div className="sub-input-box">
          <input
            type="email"
            placeholder="Enter your email address"
            className="sub-input"
          />
          <button className="sub-button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
