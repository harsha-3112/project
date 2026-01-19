import React from "react";
import "./BuiltFor.css";

import professionalsImg from "../../assets/professionals.png";
import studentsImg from "../../assets/students.png";
import spark from "../../assets/spark.png";

const BuiltFor = () => {
  return (
    <div className="built-container">
      <h2 className="built-title">
        <span className="red">Built for</span> <span className="blue">Every one</span>
      </h2>

      <div className="built-row">
        {/* Card 1 */}
        <div className="built-card">
          <img src={professionalsImg} className="built-img" alt="professionals" />
          <div className="built-overlay" />
          <div className="built-text">FOR PROFESSIONALS</div>
          <button className="built-btn">Get Started</button>
        </div>

        {/* Card 2 */}
        <div className="built-card">
          <img src={studentsImg} className="built-img" alt="students" />
          <div className="built-overlay" />
          <div className="built-text">FOR STUDENTS</div>
          <button className="built-btn">Get Started</button>
        </div>
      </div>
      <img src={spark} className="spark spark-6" alt="spark"/>
      <img src={spark} className="spark spark-7" alt="spark"/>

    </div>
  );
};

export default BuiltFor;
