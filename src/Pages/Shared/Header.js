import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
// import { ImLocation } from "react-icons/im";
import LangChange from "./LangChange";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="header-area">
      <div className="header-top py-2 bg-[#041C51]">
        <div className="container">
          <div className="header-top-info flex items-center justify-between">
            <div className="header-left flex flex-wrap items-center justify-between">
              <p className="text-white mr-8">
                <a href="mailto:name@email.com" className="flex items-center  ">
                  <HiOutlineMailOpen className="mr-2" /> Info@gmail.com
                </a>
              </p>
              <p className="text-white flex items-center ">
                {/* <ImLocation className="mr-2 text-white" /> */}
                Malborn, Australia,U.K
              </p>
            </div>
            <div className="header-right flex-wrap flex items-center ">
              <div className="country-select">
                <LangChange />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-header relative">
        <div className="container">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
