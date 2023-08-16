import React from "react";
import AboutUs from "../components/LandingPage/AboutUs";
import HeroSection from "../components/LandingPage/HeroSection";
import Services from "../components/LandingPage/Services";
import Navbar from "../components/Navbar";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
    </div>
  );
};

export default Landing;
