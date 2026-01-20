import React from "react";
import "./Testimonial.css";
import TestimonialCard from "./TestimonialCard";

import bg from "../../assets/testi-bg.png";
import userImg from "../../assets/testi-image.png";

const testimonialData = [
  {
    name: "Nutan Sai",
    role: "Student",
    review:
      "Thanks to CodeArena, I went from barely understanding loops to solving advanced algorithm challenges. I can't recommend it enough to fellow students!",
    image: userImg,
  },
  {
    name: "Nutan Sai",
    role: "Student",
    review:
      "Thanks to CodeArena, I went from barely understanding loops to solving advanced algorithm challenges. I can't recommend it enough to fellow students!",
    image: userImg,
  },
  {
    name: "Nutan Sai",
    role: "Student",
    review:
      "Thanks to CodeArena, I went from barely understanding loops to solving advanced algorithm challenges. I can't recommend it enough to fellow students!",
    image: userImg,
  },
];

const Testimonial = () => {
  return (
    <div className="testi-container">
      {/* BACKGROUND */}
      <img src={bg} alt="" className="testi-bg" />

      <h2 className="testi-title">What Our Students<br/> Say</h2>
      

      <div className="testi-grid">
  {testimonialData.map((item, index) => (
    <div
      className={`testi-col ${index === 1 ? "mid" : index === 2 ? "low" : ""}`}
      key={index}
    >
      <TestimonialCard {...item} />
    </div>
  ))}
</div>

    </div>
  );
};

export default Testimonial;
