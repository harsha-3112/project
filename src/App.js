import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import MCQ from "./pages/MCQ/MCQ";
import CodingPage from "./pages/Coding/CodingPage";
import Home from "./pages/Home/Home";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/" element={<Home/>} />
        <Route path="/coding" element={<CodingPage />} />
        {/* <Route path="/coding/:id" element={<CodingQuestion />} /> */}
        <Route path="/mcq" element={<MCQ />} />
      </Routes>
    </Router>
  );
}

export default App;
