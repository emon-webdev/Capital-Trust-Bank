import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import slider1 from "../../assets/slider/slider1.jpg";
const Banner = () => {
  return (
    <Box
      className="banner-area "
      sx={{
        height: "680px",
        backgroundImage: `url(${slider1})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="banner-content">
          <h3 className="text-white">Business Consultancy</h3>
          <h2 className="text-white">
            Central Trust Bank <br /> For Better Future.
          </h2>
          <p className="text-white">
            We consider all the drivers of change from the <br /> ground up and
            we’ll motivate and support you to <br /> make the change.
          </p>
          <Link to="/apply-loan" className="secondary-btn">
            Apply For Loan
          </Link>
        </div>
      </div>
    </Box>
  );
};

export default Banner;
