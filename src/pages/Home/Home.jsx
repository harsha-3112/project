import React from "react";
import Navbar from "../../components/Navbar";
import ServiceCard from "../../components/ServiceCard";
// import Testimonial from "../../components/TestimonialCard";
import "./Home.css";

// Assets
import hero from "../../assets/hero.png";
import blob from "../../assets/blob.png";
import spark from "../../assets/spark.png";
import solution from "../../assets/solution.png"; 
import realtime from "../../assets/real-time.png";
import adaptive from "../../assets/adaptive.png";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div className="hero-section">

             <img src={spark} className="spark spark-1" alt="spark"/>
            <img src={spark} className="spark spark-2" alt="spark"/>

        <div className="hero-left">
          <h1 className="hero-title">
            <span className="Red">Where </span>
            <span className="highlight"> Skills <br/>
            are Sharpened <span className="Red">and </span>  Code Comes to Life</span>
          </h1>
          <p className="hero-sub">
            Unlock your coding potential through interactive challenges, real-time 
            feedback, and a supportive community.
          </p>
          <button className="hero-button">Get Started</button>
        </div>

        <div className="hero-right">
          <img src={blob} className="blob-img" alt="blob" />
          <img src={hero} className="hero-img" alt="hero" />
        </div>
      </div>


      {/* FEATURE SECTION */}
      <div className="features-title">
       <span className="Red">Feature</span>  <span className="highlight">Highlights</span>
      </div>
         <img src={spark} className="spark spark-4" alt="spark"/>
         <img src={spark} className="spark spark-5" alt="spark"/>


      <div className="service-row">
        <ServiceCard
          icon={solution}
          title= "Solution  Walkthroughs"
          desc="See multiple approaches to each coding challenge."
        />
        <ServiceCard
          icon={realtime}
          title="Real-Time Feedback"
          desc="Get immediate feedback as you code, along hints."
        />
        <ServiceCard
          icon={adaptive}
          title="Adaptive Learning Paths"
          desc="Follow personalized learning paths that adapt to your level."
        />
      </div>
    </>
  );
};

export default Home;
