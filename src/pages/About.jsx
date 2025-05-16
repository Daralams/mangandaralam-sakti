import React from "react";
import Navbar from "../components/Navbar";
import BioSection from "../section/BioSection";
import TechstackSection from "../section/TechstackSection";
import WorkSection from "../section/WorkSection";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="pt-20">
      <Navbar/>
      <BioSection />
      <TechstackSection/>
      <WorkSection/>
      <Footer/>
    </div>
  );
};

export default About;
