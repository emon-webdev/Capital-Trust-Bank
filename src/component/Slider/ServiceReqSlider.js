import CreditCardIcon from "@mui/icons-material/CreditCard";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import sliderImg1 from "../../assets/serviceReqImg/features-style2-banner-1.jpg";
import "./ServiceReqSlider.css";

import { FiPhoneCall } from "react-icons/fi";

const ServiceReqSlider = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [slidersNav, setSlidersNav] = useState([]);
  const [slidersContents, setSlidersContents] = useState([]);
  useEffect(() => {
    fetch("sliders.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]);
        setSlidersNav(data[0].sliderNav);
        setSlidersContents(data[0].sliderContent);
        console.log(data[1]);
      });
  }, []);

  return (
    <div>
      {/* Section title here */}
      <div>
        <div>
          <Slider
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            slidesToShow={4}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            {slidersNav.map((sliderNav) => (
              <div>
                <div className="single-slider-nav">
                  <div className="slider-nav-icon">
                    <CreditCardIcon />
                  </div>
                  <h3>{sliderNav?.title}</h3>
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
                      <div className="slider-content">
                        <ul>
                          {slidersContent?.services.map((service) => (
                            <li>
                              <a href="/">
                                {service?.name}
                                <span className="icon-right-arrow"></span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="slider-img  flex items-center justify-between">
                        <div className="slider-img-content flex-1 text-center px-3">
                          <p className="">
                            <FiPhoneCall />
                          </p>
                          <h4 className="text-md font-medium mb-2">Call for</h4>
                          <h3 className="text-lg font-medium mb-3">
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
                          <img src={sliderImg1} alt="" srcset="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="single-slider-content">
              <div className="md:flex items-center justify-between">
                <div className="flex-1 md:mr-[30px] mb-[30px] md:mb-0">
                  <div className="slider-content">
                    <ul>
                      <li>
                        <a href="/">
                          Block Debit / ATM Card
                          <span className="icon-right-arrow"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Generate Debit Card Pin Number
                          <span className="icon-right-arrow"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Unlock Debit / ATM Card
                          <span className="icon-right-arrow"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Reissue Lost Debit / ATM Card
                          <span className="icon-right-arrow"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="slider-img  flex items-center justify-between">
                    <div className="slider-img-content flex-1 text-center px-3">
                      <p className="">
                        <FiPhoneCall />
                      </p>
                      <h4 className="text-md font-medium mb-2">Call for</h4>
                      <h3 className="text-lg font-medium mb-3">
                        Private Banking
                      </h3>
                      <h2>
                        <a
                          href="tel:+8(222)123-456-78"
                          className="mb-0  text-xl"
                        >
                          +8(222)123-456-78
                        </a>
                      </h2>
                    </div>
                    <div className="img-box flex-1">
                      <img src={sliderImg1} alt="" srcset="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-slider-content">
              <div className="md:flex items-center justify-between">
                <div className="flex-1 md:mr-[30px] mb-[30px] md:mb-0">
                  <div className="slider-content">
                    <ul>
                      <li>
                        <a href="/">
                          Block Debit / ATM Card
                          <span className="icon-right-arrow"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Generate Debit Card Pin Number
                          <span className="icon-right-arrow"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Unlock Debit / ATM Card
                          <span className="icon-right-arrow"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Reissue Lost Debit / ATM Card
                          <span className="icon-right-arrow"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="slider-img  flex items-center justify-between">
                    <div className="slider-img-content flex-1 text-center px-3">
                      <p className="">
                        <FiPhoneCall />
                      </p>
                      <h4 className="text-md font-medium mb-2">Call for</h4>
                      <h3 className="text-lg font-medium mb-3">
                        Private Banking
                      </h3>
                      <h2>
                        <a
                          href="tel:+8(222)123-456-78"
                          className="mb-0  text-xl"
                        >
                          +8(222)123-456-78
                        </a>
                      </h2>
                    </div>
                    <div className="img-box flex-1">
                      <img src={sliderImg1} alt="" srcset="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-slider-content">
              <div className="md:flex items-center justify-between">
                <div className="flex-1 md:mr-[30px] mb-[30px] md:mb-0">
                  <div className="slider-content">
                    <ul>
                      <li>
                        <a href="/">
                          Block Debit / ATM Card
                          <span className="icon-right-arrow"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Generate Debit Card Pin Number
                          <span className="icon-right-arrow"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Unlock Debit / ATM Card
                          <span className="icon-right-arrow"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Reissue Lost Debit / ATM Card
                          <span className="icon-right-arrow"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="slider-img  flex items-center justify-between">
                    <div className="slider-img-content flex-1 text-center px-3">
                      <p className="">
                        <FiPhoneCall />
                      </p>
                      <h4 className="text-md font-medium mb-2">Call for</h4>
                      <h3 className="text-lg font-medium mb-3">
                        Private Banking
                      </h3>
                      <h2>
                        <a
                          href="tel:+8(222)123-456-78"
                          className="mb-0  text-xl"
                        >
                          +8(222)123-456-78
                        </a>
                      </h2>
                    </div>
                    <div className="img-box flex-1">
                      <img src={sliderImg1} alt="" srcset="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-slider-content">
              <div className="md:flex items-center justify-between">
                <div className="flex-1 md:mr-[30px] mb-[30px] md:mb-0">
                  <div className="slider-content">
                    <ul>
                      <li>
                        <a href="/">
                          Block Debit / ATM Card
                          <span className="icon-right-arrow"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Generate Debit Card Pin Number
                          <span className="icon-right-arrow"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Unlock Debit / ATM Card
                          <span className="icon-right-arrow"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Reissue Lost Debit / ATM Card
                          <span className="icon-right-arrow"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="slider-img  flex items-center justify-between">
                    <div className="slider-img-content flex-1 text-center px-3">
                      <p className="">
                        <FiPhoneCall />
                      </p>
                      <h4 className="text-md font-medium mb-2">Call for</h4>
                      <h3 className="text-lg font-medium mb-3">
                        Private Banking
                      </h3>
                      <h2>
                        <a
                          href="tel:+8(222)123-456-78"
                          className="mb-0  text-xl"
                        >
                          +8(222)123-456-78
                        </a>
                      </h2>
                    </div>
                    <div className="img-box flex-1">
                      <img src={sliderImg1} alt="" srcset="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ServiceReqSlider;
