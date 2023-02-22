import React from "react";
import Slider from "react-slick";
import "../../App.css";
import apply from "../../assets/Banner/apply.jpg";
import insurance from "../../assets/Banner/insurance.jpg";
import slider2 from "../../assets/Banner/slider_2.png";
import Banner2Slide from "./Banner2Slide";

const sliderData = [
  {
    _id: 1,
    title: "Capital Trust Bank For Better Feature",
    img: apply,
    content: "We consider all the drivers of change – from the ground up and we’ll motivate and support you to make the change.",
    btn: "Open an Account",
    link: "/accountOpenFrom",
  },
  {
    _id: 2,
    title: "We Provide Best Loan Services",
    img: slider2,
    content: "We consider all the drivers of change – from the ground up and we’ll motivate and support you to make the change.",
    btn: "Loans Services",
    link: "/loansServices",
  },
  {
    _id: 3,
    title: "Enjoy a Good Future With Our Bank",
    img: insurance,
    content: "We consider all the drivers of change – from the ground up and we’ll motivate and support you to make the change.",
    btn: "Pay Bill",
    link: "/paymentbills",
  },
];
const Banner2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // draggable: false,
    // fade: true,
    adaptiveHeight: true,
    appendDots: (dots) => <ul className="slider-dots">{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };
  return (
    <div className="slider-parent">
      <Slider className="slide-wrapper" {...settings}>
       {sliderData.map((data) => (
          <Banner2Slide  data={data} />
        ))}    
      </Slider>
    </div>
  );
};

export default Banner2;
