import React from "react";
import AllCards from "./AllCards/AllCards";
// import logo from "../../Assets/card-banner-img-1.png";
import "./Cards.css";
const Cards = () => {
  return (
    <div>
      <div className="bg-cards m-5 px-12">
        <div className="mt-12">
          <h3 className="text-red-600">Corporate Credit Card</h3>
          <h1 className="text-3xl font-bold custom-color">
            Higher Efficiencies & <br />
            Savings
          </h1>
          <p className="custom-color">
            Rationally encounter consequences that are who loves or pursues
            desire.
          </p>
          <button className="card-btn">Apply Now</button>
        </div>
        <div className="mt-12">
          <img src="">Logo</img>
        </div>
      </div>
      {/* card area  */}
      <div class="grid my-12 px-12">
        <h2 className="text-center text-3xl font-semibold">
          Best Cards for Your Needs
        </h2>
        {/* cards  */}
        <AllCards></AllCards>
      </div>
    </div>
  );
};

export default Cards;
