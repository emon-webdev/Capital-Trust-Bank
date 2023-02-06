import React, { useState } from 'react';
import DynamicBanner from '../Shared/DynamicBanner/DynamicBanner';

export default function HealthInsurance() {
  const [name, setName] = useState("Health Insurance");
  return (
    <div>
      <div className="">
        <DynamicBanner  name={name}></DynamicBanner>
      </div>
      {/* <HealthCard></HealthCard> */}
      {/* <HealthForm></HealthForm> */}
    </div>
  )
}
