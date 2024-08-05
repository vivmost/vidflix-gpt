import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import Error from "./Error";
import ErrorAI from "./ErrorAI";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/error_openAI" element={<ErrorAI />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      ;
    </div>
  );
};

export default Body;
