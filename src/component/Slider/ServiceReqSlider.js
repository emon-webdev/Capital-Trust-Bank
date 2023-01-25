import CreditCardIcon from "@mui/icons-material/CreditCard";
import React, { useState } from "react";
import Slider from "react-slick";
import sliderImg1 from "../../assets/serviceReqImg/features-style2-banner-1.jpg";
import "./ServiceReqSlider.css";

import { FiPhoneCall } from "react-icons/fi";

const ServiceReqSlider = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

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
            <div>
              <div className="single-slider-nav">
                <div class="slider-nav-icon">
                  <CreditCardIcon />
                </div>
                <h3>
                  Credit / Debit Card <br /> Related
                </h3>
              </div>
            </div>
            <div>
              <div className="single-slider-nav">
                <div class="slider-nav-icon">
                  <CreditCardIcon />
                </div>
                <h3>
                  Mobile <br /> Internet Banking
                </h3>
              </div>
            </div>
            <div>
              <div className="single-slider-nav">
                <div class="slider-nav-icon">
                  <CreditCardIcon />
                </div>
                <h3>
                  Account Details <br /> Related
                </h3>
              </div>
            </div>
            <div>
              <div className="single-slider-nav">
                <div class="slider-nav-icon">
                  <CreditCardIcon />
                </div>
                <h3>
                  Cheque Book / DD <br /> Related
                </h3>
              </div>
            </div>
            <div>
              <div className="single-slider-nav">
                <div class="slider-nav-icon">
                  <CreditCardIcon />
                </div>
                <h3>
                  Account Details <br /> Related
                </h3>
              </div>
            </div>
          </Slider>
        </div>
        <div className="mt-8">
          <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
            <div className="single-slider-content">
              <div class="md:flex items-center justify-between">
                <div class="flex-1 md:mr-[30px] mb-[30px] md:mb-0">
                  <div class="slider-content">
                    <ul>
                      <li>
                        <a href="/">
                          Block Debit / ATM Card
                          <span class="icon-right-arrow"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Generate Debit Card Pin Number
                          <span class="icon-right-arrow"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Unlock Debit / ATM Card
                          <span class="icon-right-arrow"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Reissue Lost Debit / ATM Card
                          <span class="icon-right-arrow"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="flex-1">
                  <div class="slider-img  flex items-center justify-between">
                    <div class="slider-img-content flex-1 text-center px-3">
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
                    <div class="img-box flex-1">
                      <img src={sliderImg1} alt="" srcset="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-slider-content">
              <div class="md:flex items-center justify-between">
                <div class="flex-1 md:mr-[30px] mb-[30px] md:mb-0">
                  <div class="slider-content">
                    <ul>
                      <li>
                        <a href="/">
                          Block Debit / ATM Card
                          <span class="icon-right-arrow"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Generate Debit Card Pin Number
                          <span class="icon-right-arrow"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Unlock Debit / ATM Card
                          <span class="icon-right-arrow"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Reissue Lost Debit / ATM Card
                          <span class="icon-right-arrow"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="flex-1">
                  <div class="slider-img  flex items-center justify-between">
                    <div class="slider-img-content flex-1 text-center px-3">
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
                    <div class="img-box flex-1">
                      <img src={sliderImg1} alt="" srcset="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-slider-content">
              <div class="md:flex items-center justify-between">
                <div class="flex-1 md:mr-[30px] mb-[30px] md:mb-0">
                  <div class="slider-content">
                    <ul>
                      <li>
                        <a href="/">
                          Block Debit / ATM Card
                          <span class="icon-right-arrow"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Generate Debit Card Pin Number
                          <span class="icon-right-arrow"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Unlock Debit / ATM Card
                          <span class="icon-right-arrow"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Reissue Lost Debit / ATM Card
                          <span class="icon-right-arrow"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="flex-1">
                  <div class="slider-img  flex items-center justify-between">
                    <div class="slider-img-content flex-1 text-center px-3">
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
                    <div class="img-box flex-1">
                      <img src={sliderImg1} alt="" srcset="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-slider-content">
              <div class="md:flex items-center justify-between">
                <div class="flex-1 md:mr-[30px] mb-[30px] md:mb-0">
                  <div class="slider-content">
                    <ul>
                      <li>
                        <a href="/">
                          Block Debit / ATM Card
                          <span class="icon-right-arrow"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Generate Debit Card Pin Number
                          <span class="icon-right-arrow"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Unlock Debit / ATM Card
                          <span class="icon-right-arrow"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Reissue Lost Debit / ATM Card
                          <span class="icon-right-arrow"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="flex-1">
                  <div class="slider-img  flex items-center justify-between">
                    <div class="slider-img-content flex-1 text-center px-3">
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
                    <div class="img-box flex-1">
                      <img src={sliderImg1} alt="" srcset="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-slider-content">
              <div class="md:flex items-center justify-between">
                <div class="flex-1 md:mr-[30px] mb-[30px] md:mb-0">
                  <div class="slider-content">
                    <ul>
                      <li>
                        <a href="/">
                          Block Debit / ATM Card
                          <span class="icon-right-arrow"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Generate Debit Card Pin Number
                          <span class="icon-right-arrow"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Unlock Debit / ATM Card
                          <span class="icon-right-arrow"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Reissue Lost Debit / ATM Card
                          <span class="icon-right-arrow"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="flex-1">
                  <div class="slider-img  flex items-center justify-between">
                    <div class="slider-img-content flex-1 text-center px-3">
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
                    <div class="img-box flex-1">
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
