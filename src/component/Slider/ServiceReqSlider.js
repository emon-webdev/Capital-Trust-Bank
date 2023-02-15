import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsCreditCard2Back } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import Slider from "react-slick";
// import sliderImg1 from "../../assets/serviceReqImg/features-style2-banner-1.jpg";
import { AuthContext } from "../../context/AuthProvider";
import "./ServiceReqSlider.css";
const ServiceReqSlider = () => {
  const { user } = useContext(AuthContext);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [slidersNav, setSlidersNav] = useState([]);
  const [slidersContents, setSlidersContents] = useState([]);
  /* Modal action */
  const [show, setShow] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  /* slider data fetch */
  useEffect(() => {
    fetch("sliders.json")
      .then((res) => res.json())
      .then((data) => {
        setSlidersNav(data[0].sliderNav);
        setSlidersContents(data[0].sliderContent);
      });
  }, []);

  const handleServiceSubmit = (event) => {
    event.preventDefault();
    console.log("hello from");
    toast.success("Emergency Service Requests  Done");
  };

  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  /* submit from for service req */
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      {/* Section title here */}
      <div className="pb-16">
        <div className="slider-wrap">
          <Slider
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            // slidesToShow={4}
            // swipeToSlide={true}
            // focusOnSelect={true}
            {...settings}
          >
            {slidersNav.map((sliderNav) => (
              <div key={sliderNav?._id}>
                <div className="single-slider-nav">
                  <div className="slider-nav-icon">
                    <BsCreditCard2Back className="text-3xl text-[#041c51 ]" />
                  </div>
                  <h3 className="mb-0 mt-2 px-8 text-md transition-[0.3s]">
                    {sliderNav?.title}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="mt-8 slider-main-content">
          <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
            {slidersContents.map((slidersContent) => (
              <div>
                <div className="single-slider-content">
                  <div className="md:flex items-center justify-between">
                    <div className="flex-1 md:mr-[30px] mb-[30px] md:mb-0">
                      <div className="slider-content ">
                        <h2 className=" py-3 font-semibold text-xl mb-2 text-[#010C3A]">
                          {slidersContent?.name}
                        </h2>
                        {slidersContent?.services.map((service, index) => (
                          <p
                            key={index}
                            className="flex items-center font-medium text-[16px] mb-2 text-[#010C3A]"
                          >
                            <span className="">
                              <AiOutlineCheckCircle className=" text-[#DF0303] font-bold text-[24px] p-[2px] rounded-md mr-1" />
                            </span>
                            <span>{service?.name}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="slider-img  flex items-center justify-between">
                        <div className="slider-img-content flex-1 text-center px-3">
                          <p className="text-2xl mb-[10px]">
                            <FiPhoneCall />
                          </p>
                          <h4 className="text-md font-medium mb-2">Call for</h4>
                          <h3 className="text-lg font-medium mb-3 text-[#010C3A]">
                            {slidersContent?.name}
                          </h3>
                          <h2>
                            <a
                              href="tel:+8(222)123-456-78"
                              className="mb-0  text-xl"
                            >
                              {slidersContent?.phone}
                            </a>
                          </h2>
                        </div>
                        <div className="img-box flex-1">
                          <img src={slidersContent?.picture} alt="" srcSet="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ServiceReqSlider;
