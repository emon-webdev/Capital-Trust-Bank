import React from "react";
import ApplyCreditCard from "./ApplyCreditCard";
import Banner from "./Banner";
import Branding from "./Branding";
import ContactUs from "./ContactUs";
import FeaturedNews from "./FeaturedNews";
import Services from "./Services.jsx";
import Team from "./Team";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <ApplyForm></ApplyForm>
     
      {/* <Counter /> */}
      <ApplyCreditCard />
      <Team />
      <Branding />
      <FeaturedNews />
      <ContactUs />
    </div>
  );
};

export default Home;
