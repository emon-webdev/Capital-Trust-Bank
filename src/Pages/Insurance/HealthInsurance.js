import React, { useState } from 'react'
import DynamicBanner from '../Shared/DynamicBanner/DynamicBanner';
import HealthCard from './HealthCard'
import HealthForm from './HealthForn'

export default function HealthInsurance() {
  const [name, setName] = useState("Health Insurance");
  return (
    <div>
      <div className="">
        <DynamicBanner  name={name}></DynamicBanner>
      </div>
      <HealthCard></HealthCard>
      <HealthForm></HealthForm>
    </div>
  )
}
