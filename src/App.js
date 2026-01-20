import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import MCQ from "./pages/MCQ/MCQ";
import CodingPage from "./pages/Coding/CodingPage";
import Home from "./pages/Home/Home";
import Codingquestion from "./pages/Coding/Codingquestion";
import AuthLayout from "./pages/AuthLayout";



function App() {
  return (
    <Router>
      <Routes>
         <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
         </Route>

        <Route path="/" element={<Home/>} />
        <Route path="/coding" element={<CodingPage />} />
        <Route path="/codingquestion" element={<Codingquestion/>} />
        <Route path="/mcq" element={<MCQ />} />
      </Routes>
    </Router>
  );
}

export default App;
