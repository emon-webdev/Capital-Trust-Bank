import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box } from "@mui/material";
import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
// import { ImLocation } from "react-icons/im";
import { Link } from "react-router-dom";
import mailLogo from "../../assets/logo/mainlogo.png";
import MenuOption from "./MenuOption";
const Header = () => {
  return (
    <div className="header-area">
      <div className="header-top py-4 bg-[#041C51]">
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
              <Box className="social-icon flex items-center">
                <Link href="/">
                  <FacebookIcon sx={{ fontSize: "18px", color: "#fff" }} />
                </Link>

                <Link href="/" sx={{ marginRight: "16px" }}>
                  <TwitterIcon sx={{ fontSize: "18px", color: "#fff" }} />
                </Link>
                <Link href="/" sx={{ marginRight: "16px" }}>
                  <InstagramIcon sx={{ fontSize: "18px", color: "#fff" }} />
                </Link>
                <Link href="/" sx={{ marginRight: "16px" }}>
                  <LinkedInIcon sx={{ fontSize: "18px", color: "#fff" }} />
                </Link>
              </Box>
              <div className="country-select">
                <MenuOption />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-header py-[38px]">
        <div className="container">
          <div className="navbar flex flex-wrap items-center justify-between">
            <div className="logo">
              <Link to="/" className="flex items-center">
                <img src={mailLogo} alt="" srcset="" />
                <span className="font-bold text-[32px] ml-1">CTB</span>
              </Link>
            </div>
            <div className="main-menu">
              <Link to="/" className="mr-5">
                Home
              </Link>
              <Link to="/apply" className="mr-5">
                Apply Now
              </Link>
              <Link to="/insurance" className="mr-5">
                Insurance
              </Link>
              <Link to="/services" className="mr-5">
                Services
              </Link>
              <Link to="/contact" className="mr-5">
                Contact
              </Link>
              <Link to="/signup" className="mr-5">
                Signup
              </Link>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
