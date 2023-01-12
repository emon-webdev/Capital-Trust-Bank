import React from "react";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Counter from "./Counter";
import FeaturedNews from "./FeaturedNews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Counter />
      <FeaturedNews/>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
