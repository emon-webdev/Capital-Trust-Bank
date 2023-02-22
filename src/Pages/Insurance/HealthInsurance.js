import React, { useState } from "react";
import useTitle from "../../hooks/useTitle/useTitle";
import DynamicBanner from "../Shared/DynamicBanner/DynamicBanner";
import HealthCard from "./HealthCard";
import HealthForm from "./HealthForn";

export default function HealthInsurance() {
  useTitle("HealthInsurance");
  const [name, setName] = useState("Health Insurance");
  return (
    <div>
      <div className="">
        <DynamicBanner name={name}></DynamicBanner>
      </div>
      <HealthCard/>
      <HealthForm />
    </div>
  );
}
