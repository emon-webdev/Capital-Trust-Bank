import React from "react";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Counter from "./Counter";
import FeaturedNews from "./FeaturedNews";
import Services from "./Services.jsx";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services/>
      <Counter />
      <FeaturedNews />
      <ContactUs/>
    </div>
  );
};

export default Home;
