import React from "react";
import aboutGroupImg from "../../assets/aboutUs/aboutGroupImg.png";
import shape4 from "../../assets/aboutUs/about_bg_two.png";
import shape3 from "../../assets/aboutUs/bg-shape3.png";
import shape1 from "../../assets/aboutUs/Vector.png";
import shape2 from "../../assets/aboutUs/Vector2.png";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="about-parent h-60">
        <div className="container about-sub-parent  p-28">
          <h2 className="text-white text-2xl">About Us</h2>
          <div className="text-white flex gap-1 text-[12px]">
            <span>Home</span>
            <span>{">"}</span>
            <span>About Us</span>
          </div>
          <img
            className="about-sub-parent-img1 w-[700px]"
            src={shape1}
            alt=""
          />
          <img
            className="about-sub-parent-img2 w-[550px]"
            src={shape2}
            alt=""
          />
          <img
            className="about-sub-parent-img3 w-[130px]"
            src={shape3}
            alt=""
          />
          <img
            className="about-sub-parent-img4 w-[100px]"
            src={shape4}
            alt=""
          />
        </div>
      </div>
      {/*  */}
      <div className="my-12 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <img src={aboutGroupImg} alt="" srcSet="" />
        </div>
        <div>
          <h3>About Us</h3>
          <h1>We Provide World Business Solution In The City</h1>
          <p>
            Porttitor ornare fermentum aliquam pharetra ut facilisis gravida
            risus suscipit. dui feugiat fusce conubia ridiculus tristique
            parturient natoque vulputate risu business solution ceter 24/7 great
            support
          </p>
          <div className="flex items-center gap-2">
            <button className="about-btn"></button>
            <h2 className="m-0">
              Duis aute irure dolor in reprehenderit in voluptate.
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button className="about-btn"></button>
            <h2 className="m-0">
              Velit esse cillum dolore eu fugiat nulla pariatur.
            </h2>
          </div>

          {/*  */}
          <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-0">
              <div className="flex items-center gap-1">
                <h1 className="text-3xl font-medium text-blue-600">20</h1>
                <span>Y</span>
              </div>
              <p className="m-0">Experiences</p>
            </div>
            <div className="flex flex-col gap-0">
              <div className="flex items-center gap-1">
                <h1 className="text-3xl font-medium text-blue-600">42</h1>
                <span>M</span>
              </div>
              <p className="m-0">Happy Client</p>
            </div>
            <div className="flex flex-col gap-0">
              <div className="flex items-center gap-1">
                <h1 className="text-3xl font-medium text-blue-600">20</h1>
                <span>Y</span>
              </div>
              <p className="m-0">Experience</p>
            </div>
          </div>
          {/*  */}
          <p>
            Porttitor ornare fermentum aliquam pharetra ut facilisis gravida
            risus suscipit. dui feugiat fusce conubia ridiculus
          </p>
          <button className="custom-btn-for-about-us">Get In Touch</button>
        </div>
      </div>
    </div>
  );
};

export default About;
