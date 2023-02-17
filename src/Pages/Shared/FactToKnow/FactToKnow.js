import React from "react";
import mainLogo from "../../../assets/factToKnow/main.png";
import "./FactToKnow.css";

function FactToKnow() {
  return (
    <div className="main-factToKnow py-8">
      <div className="container md:flex items-center justify-evenly">
        <div>
          <div className="section-title">
            <h5 className="text-[#DF0303] text-xl text-md mb-3">
              -- Fact to know --
            </h5>
            <h1 className="text-white md:leading-[48px] text-4xl md:text-[40px] font-bold mb-6">
              Apply for an account in minutes
            </h1>
          </div>
          <p className="fact-paragraph mt-5">
            Business is the activity of making one's living or making money by
            producing or buying and selling products
          </p>
          <div className="mt-3">
            <button className="primary-btn ">Open An Account</button>
          </div>
        </div>
        <div>
          <img src={mainLogo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default FactToKnow;
