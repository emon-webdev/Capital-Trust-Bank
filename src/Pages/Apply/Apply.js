import React, { useState } from "react";
import DynamicBanner from "../Shared/DynamicBanner/DynamicBanner";
import useTitle from "../../hooks/useTitle/useTitle"

const Apply = () => {
  useTitle("Apply")
  const [name, setName] = useState("Apply");
  return (
    <div>
      <div className="mb-5">
        <DynamicBanner name={name}></DynamicBanner>
      </div>
    </div>
  );
};

export default Apply;
