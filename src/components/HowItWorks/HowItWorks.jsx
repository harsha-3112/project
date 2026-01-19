import React from "react";
import "./HowItWorks.css";

import ellipse from "../../assets/ellipse.png";
import student from "../../assets/student.png";
import leftarrow from "../../assets/left-arrow.png";
import rightarrow from "../../assets/right-arrow.png";

const steps = [
  { no: "01", text: "Sign Up" },
  { no: "02", text: "Code and Learn" },
  { no: "03", text: "Understand" },
  { no: "04", text: "Practice" },
  { no: "05", text: "Achieve" },
];

const HowItWorks = () => {
  return (
    <div className="how-container">
      <img src={ellipse} alt="bg" className="how-ellipse" />
      <img src={student} alt="student" className="how-student" />

      <div className="how-right">

        <h2 className="how-title">How It Works</h2>
        <p className="how-sub">
          Simplify the onboarding process by showing how easy it is to
          start using CodeArena.
        </p>

        <div className="how-steps">
          {steps.map((step, idx) => (
            <div key={idx} className="how-step">
              <div className="step-no">{step.no}</div>
              <div className="step-text">{step.text}</div>
            </div>
          ))}
        </div>

      </div>
      <img src={leftarrow} className="left-1" alt="arrow"/>
      <img src={leftarrow} className="left-2" alt="arrow"/>
      <img src={rightarrow} className="right-1" alt="arrow"/>
      <img src={rightarrow} className="right-2" alt="arrow"/>

    </div>
  );
};

export default HowItWorks;
