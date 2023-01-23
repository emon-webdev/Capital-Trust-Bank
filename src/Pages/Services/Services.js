import React, { useState } from "react";
import DynamicBanner from "../Shared/DynamicBanner/DynamicBanner";

const Services = () => {
  const [name, setName] = useState("Services");
  return (
    <div className="team-area ">
      <DynamicBanner name={name}></DynamicBanner>
    </div>
  );
};

export default Services;
