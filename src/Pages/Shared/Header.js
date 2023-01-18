import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box } from "@mui/material";
import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
// import { ImLocation } from "react-icons/im";
import { Link } from "react-router-dom";
import MenuOption from "./MenuOption";
import Navbar from "./Navbar";
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
      <div className="main-header relative">
        <div className="container">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
