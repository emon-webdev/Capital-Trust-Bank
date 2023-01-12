import React from "react";
import Banner from "./Banner";
import Branding from "./Branding";
import Counter from "./Counter";
import Team from "./Team";

const Home = () => {
  return (
    <div>
       <Banner />
       <Counter/>
       <Team />
       <Branding />
    </div>
  );
};

export default Home;
