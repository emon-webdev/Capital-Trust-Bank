import React, { useState } from 'react';
import DynamicBanner from '../Shared/DynamicBanner/DynamicBanner';
import TravelCard from './TravelCard';
import TravelForm from './TravelForm';

export default function TravelInsurance() {
  const [name, setName] = useState("Travel Insurance");
  return (
    <div>
         <div className="">
      <DynamicBanner name={name}></DynamicBanner>
      </div>
      <TravelCard></TravelCard>
      <TravelForm></TravelForm>
    </div>
  )
}
