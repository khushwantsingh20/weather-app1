import React from "react";
import { Routes, Route } from "react-router-dom";
import Weather from "../components/Weather/Weather";
import UseRefPrac from "../components/UseRefPrac.js/UseRefPrac";

const RoutesComp = () => {
  return (
    <Routes>
      <Route path="/" element={<Weather />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/useref" element={<UseRefPrac />} />
    </Routes>
  );
};

export default RoutesComp;
