import React from "react";
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
      {/* <Counter /> */}
      <Team />
      <Branding />
      <FeaturedNews />
      <LoanCalculator />
      <ContactUs />
    </div>
  );
};

export default Home;
