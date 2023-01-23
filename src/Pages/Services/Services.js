import React, { useState } from "react";
import DynamicBanner from "../Shared/DynamicBanner/DynamicBanner";

const Services = () => {
  const [name, setName] = useState("Services");
  return (
    <div className="team-area ">
      <div className="mb-5">
        <DynamicBanner name={name}></DynamicBanner>
      </div>
    </div>
  );
};

export default Services;
