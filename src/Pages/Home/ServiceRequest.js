import React from "react";
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import ServiceReqSlider from "../../component/Slider/ServiceReqSlider";

const ServiceRequest = () => {
  return (
    <div className="service-req-area">
      <div className="container">
        <div className="text-center">
          <SectionTitle />
        </div>
        <ServiceReqSlider />
      </div>
    </div>
  );
};

export default ServiceRequest;
