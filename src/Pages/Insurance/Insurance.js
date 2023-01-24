import React, { useState } from "react";
import DynamicBanner from "../Shared/DynamicBanner/DynamicBanner";

const Insurance = () => {
  const [name, setName] = useState("Insurance");
  return (
    <div>
      <div className="mb-5">
        <DynamicBanner name={name}></DynamicBanner>
      </div>
    </div>
  );
};

export default Insurance;
