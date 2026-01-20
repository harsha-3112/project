import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import blob from "../assets/blob.png";
import hero from "../assets/hero.png";
import "./auth.css";

const AuthLayout = () => {
  return (
    <>
      
      <Navbar />

      <div className="auth-container">
        
        {/* LEFT = FORM */}
        <div className="auth-form">
          <Outlet />
        </div>

        {/* RIGHT = HERO */}
        <div className="auth-hero">
          <img src={blob} className="auth-blob" alt="" />
          <img src={hero} className="auth-hero-img" alt="" />
        </div>

      </div>
    </>
  );
};

export default AuthLayout;
