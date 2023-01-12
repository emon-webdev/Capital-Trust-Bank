import { Link, TextField } from "@mui/material";
import React from "react";
import "./Footer.css";
import logo from "../../assets/logo/mainlogo.png";

const Footer = () => {
  return (
    <div className="bgi-footer">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5">
          <div className="flex items-start mt-5 gap-1">
            <img src={logo} alt="" />
            <span className=" text-3xl font-bold">CTB</span>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-lg my-5">Company</h2>
            <Link id="footer-link">About</Link>
            <Link id="footer-link">Careers</Link>
            <Link id="footer-link">Mobile</Link>
            <Link id="footer-link">Blog</Link>
            <Link id="footer-link">How we work?</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-lg my-5">Contact</h2>
            <Link id="footer-link">Help/FAQ</Link>
            <Link id="footer-link">Press</Link>
            <Link id="footer-link">Affiliates</Link>
            <Link id="footer-link">Propert oweners</Link>
            <Link id="footer-link">Partners</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-lg my-5">More </h2>
            <Link id="footer-link">Land fees</Link>
            <Link id="footer-link">Property</Link>
            <Link id="footer-link">Law tips</Link>
            <Link id="footer-link">Nadges</Link>
            <Link id="footer-link">Privacy</Link>
          </div>
          <div>
            <div className="my-5">
              <h2 className="text-lg">Head Office</h2>
              <p className="footer-text">
                Xilliams Corner Wine © 2017. 1112 A Market St # Ste B22,
                Charlottesville, CA 45565
              </p>
            </div>
            <div>
              <h2 className="mb-5 text-lg">News Letter</h2>
              <div>
                <input
                  type="email"
                  name="email"
                  className="custom-input"
                  placeholder="Enter Your Email address"
                />
              </div>
            </div>
          </div>
        </div>
        <div>hi</div>
      </div>
    </div>
  );
};

export default Footer;
