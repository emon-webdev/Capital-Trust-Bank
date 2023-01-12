import { Box } from "@mui/material";
import React from "react";
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
        <h2>Content here</h2>
      </div>
    </Box>
  );
};

export default Banner;
