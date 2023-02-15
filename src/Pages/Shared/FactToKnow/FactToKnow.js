import React from "react";
import "./FactToKnow.css";
import mainLogo from "../../../assets/factToKnow/main.png"

function FactToKnow() {
  return (
    <div className="main-factToKnow">
      <div className="container py-5 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5">
        <div>
        <div className="flex gap-2 mt-5">
            <span className="custom-hypen">-</span>
            <h3 className="small-title">Fact to know</h3>
            <span className="custom-hypen">-</span>
        </div>
        <h1 className="big-title mt-5">Apply for an account in minutes</h1>
        <p className="fact-paragraph mt-5">Business is the activity of making one's living or making money by producing or buying and selling products</p>
        <button className="fact-btn my-5">Open An Account</button>
        </div>
        <div>
            <img src={mainLogo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default FactToKnow;
