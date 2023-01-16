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
          <h3>Business Consultency</h3>
          <h2>Central Trust Bank For Better Future.</h2>
          <p>
            We consider all the drivers of change – from the ground up and we’ll
            motivate and support you to make the change.
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
