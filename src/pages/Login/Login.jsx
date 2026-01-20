import React from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="login-left">
      <div className="login-title">Login to your account</div>

      <div className="login-subtitle">
        its easy! just take a minute and provide the details
      </div>

      <div className="login-input-block">
        <TextField
          label="Email or Phone"
          variant="filled"
          fullWidth
          className="login-input"
        />

        <TextField
          label="Password"
          type="password"
          variant="filled"
          fullWidth
          className="login-input"
        />
      </div>

      <Button variant="contained" fullWidth className="login-btn">
        Login
      </Button>

      <div className="login-footer">
        Didn't Have An Account?
        <Link to="/signup" className="login-footer-link">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Login;
