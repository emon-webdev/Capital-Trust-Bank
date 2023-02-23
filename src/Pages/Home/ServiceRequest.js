import React from "react";
import { useTranslation } from "react-i18next";
import ServiceReqSlider from "../../component/Slider/ServiceReqSlider";

const ServiceRequest = () => {
  const {t}  =useTranslation()
  return (
    <div className="service-req-area my-12 bg-[#fdf3f3]">
      <div className="container">
        <div className="section-title py-16 w-full md:w-[650px] mx-auto text-center">
          <h5 className="text-[#DF0303] text-xl text-md mb-3">
            -- {t("Emergency_Service_Requests")} --
          </h5>
          <h1 className="text-[#010C3A] md:leading-[48px] text-4xl md:text-[40px] font-bold mb-2">
            {t("Emergency_Service_Requests_pg")}
          </h1>
        </div>
        <ServiceReqSlider />
      </div>
    </div>
  );
};

export default ServiceRequest;
