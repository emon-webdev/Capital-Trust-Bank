import React from "react";
import shape4 from "../../../assets/aboutUs/about_bg_two.png";
import shape3 from "../../../assets/aboutUs/bg-shape3.png";
import shape1 from "../../../assets/aboutUs/Vector.png";
import shape2 from "../../../assets/aboutUs/Vector2.png";
const DynamicBanner = ({ name }) => {
  return (
    <div>
      <div className="about-parent h-60">
        <div className="container about-sub-parent  p-28">
          <h2 className="text-white text-3xl mb-1">{name}</h2>
          <div className="text-white flex gap-1 text-[14px]">
            <span>Home</span>
            <span>{">"}</span>
            <span>{name}</span>
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
    </div>
  );
};

export default DynamicBanner;
