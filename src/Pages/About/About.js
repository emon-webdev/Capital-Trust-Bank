import React from "react";
import "./About.css";
import shape3 from "../../assets/aboutUs/bg-shape3.png";

const About = () => {
  return (
    <div className="about-parent h-60">
      <div className="container about-sub-parent">
        <h2 className="text-white p-28 text-2xl">About Us</h2>
        <img className="about-sub-parent-img1 w-[130px]" src={shape3} alt="" />
      </div>
    </div>
  );
};

export default About;
