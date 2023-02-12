import { FormControl, Input } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./CardsCategories.css"
import card1 from "../../../assets/cards/card_1.jpg"
import card2 from "../../../assets/cards/card_4.jpg"
import card3 from "../../../assets/cards/card_5.jpg"
import card4 from "../../../assets/cards/card_6.jpg"
import card5 from "../../../assets/cards/card_7.jpg"

const CardsCategories = () => {
  return (
    <div className="container main-part">
        {/* left site menu  */}
      <div className="">
        {/* search form  */}
      <div>
        <form action="">
        <FormControl>
  <Input placeholder='Search' />
</FormControl>
        </form>
        </div>
        <div className="bg-gray-800 my-5 text-white grid gap-4 p-5 rounded ">
            <Link className="card-hover">Home Loan</Link>
            <Link className="card-hover">Personal Loan</Link>
            <Link className="card-hover">Vehicle Loan</Link>
            <Link className="card-hover">Education Loan</Link>
            <Link className="card-hover">Gold Loan</Link>
            <Link className="card-hover">Low interest</Link>
        </div>
      </div>
      {/* right site menu  */}
      <div>
        {/* card1  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
  <div className="p-5 rounded-l-lg">
    <h1 className="my-5 text-2xl">Platinum Credit Card
</h1>
<img src={card1} alt="" />
<div className="flex gap-2">
<button className="card-btn">
  Apply Now
</button>
<button className="card-btn">
  Read More
</button>
</div>
  </div>
  <div className="p-5 rounded-r-lg">
    <h3 className="text-[18px] text-gray-400">Explore a new world of rewards with the Platinum Credit Card.
</h3>
<h2 className="mt-8">Features & Benefits
</h2>
<ul className="list-disc list-inside mt-4">
  <li className="text-gray-400">Zero Joining and Annual Fees</li>
  <li className="text-gray-400">2% Fuel Surcharge waiver at HPCL Petrol Pumps
</li>
  <li className="text-gray-400">Multi Rewards & Lifestyle Benefits
</li>
  <li className="text-gray-400">5X TAT Miles on Travel
</li>
  <li className="text-gray-400">Welcome vouchers worth Rs. 2000+
</li>
  <li className="text-gray-400">1% Fuel Surcharge waiver at HPCL Petrol Pumps
</li>
</ul>
  </div>
</div>
<hr />
        {/* card2  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
  <div className="p-5 rounded-l-lg">
    <h1 className="my-5 text-2xl">Millinnia Credit Card
</h1>
<img src={card2} alt="" />
<div className="flex gap-2">
<button className="card-btn">
  Apply Now
</button>
<button className="card-btn">
  Read More
</button>
</div>
  </div>
  <div className="p-5 rounded-r-lg">
    <h3 className="text-[18px] text-gray-400">Righteous indignation and dislike men who are so beguiled and demoralized.
</h3>
<h2 className="mt-8">Features & Benefits
</h2>
<ul className="list-disc list-inside mt-4">
  <li className="text-gray-400">Welcome vouchers worth Rs. 2000+
</li>
  <li className="text-gray-400">1% Fuel Surcharge waiver at HPCL Petrol Pumps
</li>
  <li className="text-gray-400">Lifestyle Benefits
</li>
  <li className="text-gray-400">Access to 1000+ global airport lounges
</li>
  <li className="text-gray-400">Zero Joining and Annual Fees
</li>
  <li className="text-gray-400">2% Fuel Surcharge waiver at HPCL Petrol Pumps
</li>
</ul>
  </div>
</div>
<hr />
        {/* card3  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
  <div className="p-5 rounded-l-lg">
    <h1 className="my-5 text-2xl">Money Back Credit Card
</h1>
<img src={card3} alt="" />
<div className="flex gap-2">
<button className="card-btn">
  Apply Now
</button>
<button className="card-btn">
  Read More
</button>
</div>
  </div>
  <div className="p-5 rounded-r-lg">
    <h3 className="text-[18px] text-gray-400">Explore a new world of rewards with the
Credit Card.
</h3>
<h2 className="mt-8">Features & Benefits
</h2>
<ul className="list-disc list-inside mt-4">
  <li className="text-gray-400">Zero Joining and Annual Fees
</li>
  <li className="text-gray-400">2% Fuel Surcharge waiver at HPCL Petrol Pumps

</li>
  <li className="text-gray-400">Multi Rewards & Lifestyle Benefits

</li>
  <li className="text-gray-400">5X TAT Miles on Travel

</li>
  <li className="text-gray-400">Welcome vouchers worth Rs. 2000+

</li>
  <li className="text-gray-400">1% Fuel Surcharge waiver at HPCL Petrol Pumps
</li>
</ul>
  </div>
</div>
<hr />
        {/* card4  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
  <div className="p-5 rounded-l-lg">
    <h1 className="my-5 text-2xl">Easy EMI Credit Card

</h1>
<img src={card4} alt="" />
<div className="flex gap-2">
<button className="card-btn">
  Apply Now
</button>
<button className="card-btn">
  Read More
</button>
</div>
  </div>
  <div className="p-5 rounded-r-lg">
    <h3 className="text-[18px] text-gray-400">Righteous indignation and dislike men who are so beguiled and demoralized.
</h3>
<h2 className="mt-8">Features & Benefits
</h2>
<ul className="list-disc list-inside mt-4">
  <li className="text-gray-400">Welcome vouchers worth Rs. 2000+

</li>
  <li className="text-gray-400">1% Fuel Surcharge waiver at HPCL Petrol Pumps


</li>
  <li className="text-gray-400">Lifestyle Benefits

</li>
  <li className="text-gray-400">Access to 1000+ global airport lounges


</li>
  <li className="text-gray-400">Zero Joining and Annual Fees


</li>
  <li className="text-gray-400">2% Fuel Surcharge waiver at HPCL Petrol Pumps

</li>
</ul>
  </div>
</div>
<hr />
        {/* card5  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
  <div className="p-5 rounded-l-lg">
    <h1 className="my-5 text-2xl">Diners Club Privilege Card


</h1>
<img src={card5} alt="" />
<div className="flex gap-2">
<button className="card-btn">
  Apply Now
</button>
<button className="card-btn">
  Read More
</button>
</div>
  </div>
  <div className="p-5 rounded-r-lg">
    <h3 className="text-[18px] text-gray-400">Explore a new world of rewards with the Privilege Card.
</h3>
<h2 className="mt-8">Features & Benefits
</h2>
<ul className="list-disc list-inside mt-4">
  <li className="text-gray-400">Zero Joining and Annual Fees


</li>
  <li className="text-gray-400">2% Fuel Surcharge waiver at HPCL Petrol Pumps


</li>
  <li className="text-gray-400">Multi Rewards & Lifestyle Benefits


</li>
  <li className="text-gray-400">5X TAT Miles on Travel


</li>
  <li className="text-gray-400">Welcome vouchers worth Rs. 2000+



</li>
  <li className="text-gray-400">Welcome vouchers worth Rs. 2000+


</li>
</ul>
  </div>
</div>
<hr />
    </div>
    </div>
  );
};

export default CardsCategories;
