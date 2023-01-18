import React from "react";
import ApplyCreditCard from "./ApplyCreditCard";
import ApplyForm from "./ApplyForm";
import Banner from "./Banner";
import Branding from "./Branding";
import ContactUs from "./ContactUs";
import FeaturedNews from "./FeaturedNews";
import LoanCalculator from "./LoanCalculator";
import Services from "./Services.jsx";
import Team from "./Team";


const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      {/* <ApplyForm/> */}
     
      {/* <Counter /> */}
      <ApplyCreditCard />
      <Team />
      <Branding />
      <FeaturedNews />
      <LoanCalculator />
      <ContactUs />
    </div>
  );
};

export default Home;
