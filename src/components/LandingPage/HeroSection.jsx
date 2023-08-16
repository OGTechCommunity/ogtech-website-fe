import React from "react";
import herobg from "../../assets/LanginPage/hero-bg.jpg";
import herobg1 from "../../assets/LanginPage/hero-bg-1.jpg";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "../Navbar";

const HeroSection = () => {
  return (
    <div
      name="home"
      id="home"
      className="bg-cover w-full h-screen bg-center bg-no-repeat z-[-1] bg-black bg-opacity-50 text-white"
      style={{
        backgroundImage: `url(${herobg})`,
      }}
    >
      <div className="flex justify-center align-middl h-full">
        <div className="w-3/4 self-center">
          <h1 className="text-5xl flex flex-col">
            OGTech Community
            <span className="text-3xl">
              <Typewriter
                loop
                cursor
                cursorStyle="_"
                typeSpeed={40}
                deleteSpeed={80}
                delaySpeed={1500}
                words={["Connecting Tech Enthusiasts", "Empowering Innovators"]}
              />
            </span>
          </h1>
          <p className="text-xl w-1/2 mt-6">
            Welcome to OG Tech, a vibrant tech community that brings together
            passionate individuals from diverse backgrounds to collaborate,
            learn, and grow. Join us to unlock endless possibilities in the
            world of technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
