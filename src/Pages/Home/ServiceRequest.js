import React from "react";
import ServiceReqSlider from "../../component/Slider/ServiceReqSlider";

const ServiceRequest = () => {
  return (
    <div className="service-req-area my-12">
      <div className="container">
        <div className="text-center mb-4">
          <h2
            marginBottom={2}
            textAlign="center"
            className="text-xl"
            color="#fff"
          >
            -- Emergency Service Requests --
          </h2>
          <h3
            className="text-5xl mb-5 font-bold mt-3"
            marginBottom={5}
            fontWeight="700"
            textAlign="center"
            color="#fff"
          >
            List of banking service requests all in one place.
          </h3>
        </div>
        <ServiceReqSlider />
      </div>
    </div>
  );
};

export default ServiceRequest;
