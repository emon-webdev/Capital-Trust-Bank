import React from "react";
import "./Cards.css";
import logo from "../../assets/cards/card_2.png"
import CardsCategories from "./AllCards/CardsCategories";
import useTitle from "../../hooks/useTitle/useTitle";

const Cards = () => {
  useTitle("Cards")
  return (
    <div className="contact-area">
      {/* banner areas  */}
      <div className="bg-cards px-12">
      <div className="mt-12">
        <h3 className="text-red-600">Corporate Credit Card
</h3>
        <h1 className="text-3xl font-bold custom-color">Higher Efficiencies & <br />
Savings</h1>
<p className="custom-color">Rationally encounter consequences that are
who loves or pursues desire.</p>
<button className="card-btn">
  Apply Now
</button>
      </div>
      <div className="mt-12">
        <img src={logo}></img>
      </div>
    </div>

    {/* card area  */}
    <div class="grid my-12 px-12">
   <h2 className="text-center text-3xl font-semibold">Best Cards for Your Needs
</h2>
{/* cards  */}
{/* <AllCards></AllCards> */}
<CardsCategories></CardsCategories>
    </div>
    </div>
  );
};

export default Cards;
