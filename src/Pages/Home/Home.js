import React from "react";
import ApplyCreditCard from "./ApplyCreditCard";
import Banner from "./Banner";
import Branding from "./Branding";
import ContactUs from "./ContactUs";
import Exchange from "./Exchange";
// import Counter from "./Counter";
import FeaturedNews from "./FeaturedNews";
import LoanCalculator from "./LoanCalculator";
import ServiceRequest from "./ServiceRequest";
import Services from "./Services.jsx";
import Team from "./Team";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      {/* <ApplyForm/> */}
      <ServiceRequest />
      <ApplyCreditCard />
      <Team />
      <Branding />
      <FeaturedNews />
      <LoanCalculator />
      <Exchange />
      <ContactUs />
    </div>
  );
};

export default Home;
