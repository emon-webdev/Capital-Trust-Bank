import { ChatIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/mainlogo.png";
import "./Footer.css";
// import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <div className="bgi-footer print:hidden">
      <div className="container pt-20">
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4
        align-items-center justify-center-center"
        >
          <div>
            <div className="flex items-start mt-5 gap-1">
              <img src={logo} alt="" />
              <span className=" text-3xl font-bold">CTB</span>
            </div>
            <div className="flex gap-2 ml-4 mt-4">
              <Link className="">
                <ChatIcon></ChatIcon>
              </Link>
              <Link className="">
                <EmailIcon></EmailIcon>
              </Link>
              <Link className="">
                <PhoneIcon></PhoneIcon>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-lg my-5 text-white">Company</h2>
            <Link id="footer-link">About</Link>
            <Link id="footer-link">Careers</Link>
            <Link id="footer-link">Mobile</Link>
            <Link id="footer-link">Blog</Link>
            <Link id="footer-link">How we work?</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-lg my-5 text-white">Contact</h2>
            <Link id="footer-link">Help/FAQ</Link>
            <Link id="footer-link">Press</Link>
            <Link id="footer-link">Affiliates</Link>
            <Link id="footer-link">Propert oweners</Link>
            <Link id="footer-link">Partners</Link>
          </div>

          <div>
            <div className="my-5">
              <h2 className="text-lg text-white">Head Office</h2>
              <p className="footer-text">
                Xilliams Corner Wine © 2017. 1112 A Market St # Ste B22,
                Charlottesville, CA 45565
              </p>
            </div>
            <div>
              <h2 className="mb-5 text-lg text-white">News Letter</h2>
              <div>
              <Input variant='flushed' placeholder='Enter your email address' />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 align-items-center justify-content-center  py-10 parent-end-footer">
          <span className=" end-footer">email@gmail.com</span>
          <span className=" end-footer">(123) 456-7890</span>
          <span className="borderless-end-footer">
            © 2021 Besnik Media All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
