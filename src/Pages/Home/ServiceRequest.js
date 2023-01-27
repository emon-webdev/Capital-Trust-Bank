import { Typography } from "@mui/material";
import React from "react";
import ServiceReqSlider from "../../component/Slider/ServiceReqSlider";

const ServiceRequest = () => {
  return (
    <div className="service-req-area">
      <div className="container">
        <div className="text-center">
          <Typography
            marginBottom={2}
            textAlign="center"
            sx={{ fontWeight: "bold" }}
            color="#fff"
          >
            -- Emergency Service Requests --
          </Typography>
          <Typography
            variant="h4"
            marginBottom={5}
            fontWeight="700"
            textAlign="center"
            color="#fff"
          >
            List of banking service requests all in one place.
          </Typography>
        </div>
        <ServiceReqSlider />
      </div>
    </div>
  );
};

export default ServiceRequest;
