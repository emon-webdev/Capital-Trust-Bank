import React from "react";
import Banner from "./Banner";
import Branding from "./Branding";
import ContactUs from "./ContactUs";
// import Counter from "./Counter";
import FeaturedNews from "./FeaturedNews";
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
      <ContactUs />
    </div>
  );
};

export default Home;
