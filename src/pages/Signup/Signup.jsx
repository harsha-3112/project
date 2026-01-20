import React from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-form-block">

      {/* TITLE */}
      <div className="signup-title-block">
        <div className="signup-title">Create an account</div>
        <div className="signup-subtitle">
          its easy! just take a minute and provide the details
        </div>
      </div>

      {/* INPUTS */}
      <div className="signup-input-block">
        <TextField variant="filled" fullWidth label="Email or Phone" className="signup-input" />
        <TextField variant="filled" fullWidth label="Full Name" className="signup-input" />
        <TextField variant="filled" fullWidth label="Create Password" type="password" className="signup-input" />
        <TextField variant="filled" fullWidth label="Confirm Password" type="password" className="signup-input" />
      </div>

      {/* BUTTON */}
      <Button variant="contained" fullWidth className="signup-btn">
        Signup
      </Button>

      {/* FOOTER */}
      <div className="signup-footer">
        Already Have An Account?
        <Link to="/login" className="signup-footer-link">Login</Link>
      </div>
    </div>
  );
};

export default Signup;
