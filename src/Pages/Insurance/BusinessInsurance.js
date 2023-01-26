import React, { useState } from 'react'
import DynamicBanner from '../Shared/DynamicBanner/DynamicBanner';
import BusinessCard from './BusinessCard'
import BusinessForm from './BusinessForm'

export default function BusinessInsurance() {
  const [name, setName] = useState("Business Insurance");
  return (
    <div>
      <div className="">
      <DynamicBanner name={name}></DynamicBanner>
      </div>
      <BusinessCard></BusinessCard>
      <BusinessForm></BusinessForm>
    </div>
  )
}
