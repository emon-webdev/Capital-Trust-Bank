import React from "react";
import ImageSlider from "./ImageSlider";

const slides = [
  { url: "https://i.ibb.co/6rGyGBY/slider1.jpg" },
  { url: "https://i.ibb.co/6rGyGBY/slider1.png" },
  { url: "https://i.ibb.co/6rGyGBY/slider1.jpg" },
  { url: "https://i.ibb.co/6rGyGBY/slider1.png" },
  { url: "https://i.ibb.co/6rGyGBY/slider1.jpg" },
];
const containerStyles = {
  width: "100%",
  height: "650px",
  margin: "0 auto",
};
const Banner = () => {
  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Banner;
