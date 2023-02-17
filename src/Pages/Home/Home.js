import React from "react";
import Funds from "../Funds/Funds";
import ApplyCreditCard from "./ApplyCreditCard";
// import Banner from "./Banner";
import Banner2 from "./Banner2";
import Branding from "./Branding";
import ContactUs from "./ContactUs";
import ExchangeDetails from "./ExchangeDetails";
// import Counter from "./Counter";
import FeaturedNews from "./FeaturedNews";
import LoanCalculator from "./LoanCalculator";
import ServiceRequest from "./ServiceRequest";
import Services from "./Services.jsx";
import Team from "./Team";

const Home = () => {
  return (
    <div>
      <Banner2 />
      <Funds />
      <Services />
      {/* <ApplyForm/> */}
      <ServiceRequest />
      <ApplyCreditCard />
      <Team />
      <Branding />
      <FeaturedNews />
      <LoanCalculator />
      <ExchangeDetails />
      <ContactUs />
    </div>
  );
};

export default Home;
