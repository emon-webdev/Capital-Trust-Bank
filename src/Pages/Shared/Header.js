import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

// import { ImLocation } from "react-icons/im";
import LangChange from "./LangChange";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="header-area">
      <div className="header-top py-2 lg:py-4 bg-[#041C51]">
        <div className="container">
          <div className="header-top-info flex items-center justify-between">
            <div className="header-left flex flex-wrap items-center justify-between">
              <p className="text-white mr-8">
                <a href="mailto:name@email.com" className="flex items-center  ">
                  <HiOutlineMailOpen className="mr-2" /> Info@gmail.com
                </a>
              </p>
              <p className="hidden text-white md:flex items-center ">
                <MdLocationOn className="mr-2 text-white" />
                Malborn, Australia,U.K
              </p>
            </div>
            <div className="header-right flex-wrap flex items-center ">
              <div className="social-icon hidden md:flex ">
                <a
                  href=""
                  className="text-[18px] pr-[10px] ml-[10px] text-white border-r border-white"
                >
                  <FaFacebookF />
                </a>
                <a
                  href=""
                  className="text-[18px] pr-[10px] ml-[10px] text-white border-r border-white"
                >
                  <FiTwitter />
                </a>
                <a
                  href=""
                  className="text-[18px] pr-[10px] ml-[10px] text-white border-r border-white"
                >
                  <BsInstagram />
                </a>
                <a
                  href=""
                  className="text-[18px] pr-[10px] ml-[10px] text-white border-r border-white"
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <div className="country-select">
                <LangChange />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-header py-3 lg:py-0 relative">
        <div className="container">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
