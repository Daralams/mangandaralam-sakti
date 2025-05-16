import React from "react";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Blog from "../pages/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Certification from "../pages/Certification";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
