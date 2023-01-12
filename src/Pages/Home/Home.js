import React from "react";
import Banner from "./Banner";
import Counter from "./Counter";
import FeaturedNews from "./FeaturedNews";

const Home = () => {
  return (
    <div>
       <Banner />
       <Counter/>
       <FeaturedNews></FeaturedNews>
    </div>
  );
};

export default Home;
