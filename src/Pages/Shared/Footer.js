import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bgi-footer">
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5">
        <div>logo</div>
        <div>
          <h2>Company</h2>
        </div>
        <div>
          <h2>Contact</h2>
        </div>
        <div>
          <h2>More </h2>
        </div>
        <div>
          <div>
            <h2>Head Office</h2>
          </div>
          <div>
            <h2>News Letter</h2>
          </div>
        </div>
      </div>
      <div>hi</div>
    </div>
  );
};

export default Footer;
