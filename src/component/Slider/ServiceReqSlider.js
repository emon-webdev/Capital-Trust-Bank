import { ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsCreditCard2Back } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { AuthContext } from "../../context/AuthProvider";
import ServiceReqModal from "../Modal/ServiceReqModal";
import "./ServiceReqSlider.css";
const ServiceReqSlider = () => {
  const OverlayOne = () => <ModalOverlay bg="blackAlpha.400" />;
  const { user } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [slidersNav, setSlidersNav] = useState([]);
  const [slidersContents, setSlidersContents] = useState([]);
  /* slider data fetch */
  useEffect(() => {
    fetch(`http://localhost:5000/emergencyServices`)
      .then((res) => res.json())
      .then((data) => {
        setSlidersNav(data[0].sliderNav);
        setSlidersContents(data[0].sliderContent);
      });
  }, []);
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
            {slidersNav.map((sliderNav, index) => (
              <div key={index}>
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
            {slidersContents.map((slidersContent, index) => (
              <div key={index}>
                <div className="single-slider-content">
                  <div className="md:flex items-center justify-between">
                    <div className="flex-1 md:mr-[30px] mb-[30px] md:mb-0">
                      <div className="slider-content ">
                        <h2 className=" pb-3 pt-1 font-semibold text-xl text-[#010C3A]">
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
                        <div>
                          {/* <button
                            className="primary-btn mt-5"
                            onClick={() => {
                              setOverlay(<OverlayOne />);
                              onOpen();
                            }}
                          >
                            Apply Now
                          </button> */}

                          <div>
                            {user?.email ? (
                              <button
                                className="primary-btn sm-btn mt-5"
                                onClick={() => {
                                  setOverlay(<OverlayOne />);
                                  onOpen();
                                }}
                              >
                                Apply Now
                              </button>
                            ) : (
                              <>
                                <Link
                                  to="/accountOpenFrom"
                                  className="primary-btn sm-btn mt-5"
                                >
                                  Open An Account
                                </Link>
                              </>
                            )}
                          </div>
                        </div>
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
        <ServiceReqModal
          slidersContents={slidersContents}
          onClose={onClose}
          isOpen={isOpen}
          overlay={overlay}
          OverlayOne={OverlayOne}
        />
      </div>
    </div>
  );
};

export default ServiceReqSlider;
