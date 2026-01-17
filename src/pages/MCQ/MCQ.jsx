import React from "react";
import Navbar from "../../components/Navbar";
import "./MCQ.css";

const MCQ = () => {
  return (
    <>
      <Navbar />

      <div className="mcq-frame">

        <h2 className="mcq-title">
          <span className="mcq-title-red">MCQ</span>{" "}
          <span className="mcq-title-blue">Questions</span>
        </h2>

        <div className="mcq-list">

          {[1,2,3,4,5].map((id) => (
            <div key={id} className="mcq-card">

              <p className="mcq-question">
                {id}. Eesha Works For ISRO Where She Is Involved In A Mission To Intercept A Comet That Is Likely To Collide With In 1 Month.She Is Developing A C Program To Calculate The Trajectory Of The Missile To Be Launched To Intercept And Destroying The Approaching Comet.In Order To Achieve Highest Accuracy Of The Missile Trajectory What Data Type Should She Use For The Variables In Her Equation??
              </p>

              <div className="mcq-options">
                <div className="mcq-col">
                  <label><input type="radio" name={`q${id}`} /> Double</label>
                  <label><input type="radio" name={`q${id}`} /> Double</label>
                </div>
                <div className="mcq-col">
                  <label><input type="radio" name={`q${id}`} /> Double</label>
                  <label><input type="radio" name={`q${id}`} /> Double</label>
                </div>
              </div>
            </div>
          ))}

        </div>

        <button className="mcq-submit">Submit</button>
      </div>
    </>
  );
};

export default MCQ;
