import { Input } from "@chakra-ui/react";
import { FaLinkedinIn,FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/mainlogo.png";
import "./Footer.css";
import { useTranslation } from "react-i18next";
// import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  const {t} = useTranslation()
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
            <div className="flex gap-2 mt-4">
              <a href="https://www.linkedin.com/" id="social-link" className="social-link-border">
                <FaLinkedinIn/>
              </a>
              <a href="https://www.facebook.com/" id="social-link-facebook" className="social-link-facebook-border">
                <FaFacebookF/>
              </a>
              <a href="https://twitter.com/" id="social-link" className="social-link-border">
               <AiOutlineTwitter/>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-lg my-5 text-white">{t("Services")}</h2>
            <Link to='/paymentbills' id="footer-link">{t("Pay_bills")}</Link>
            <Link to='/loansServices' id="footer-link">{t("Loans")}</Link>
            <Link to='/cards' id="footer-link">{t("Cards")}</Link>
            <Link to='/healthinsurance' id="footer-link">{t("Health_Insurance")}</Link>
            <Link to='/businessinsurance' id="footer-link">{t("Business_Insurance")}</Link>
            <Link to='/travelinsurance' id="footer-link">{t("Travel_Insurance")}</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-lg my-5 text-white">{t("contact")}</h2>
            <Link to='/faq' id="footer-link">{t("Faq")}</Link>
            <Link to='/login' id="footer-link">{t("Open_an_Account")}</Link>
            <Link to='/contact' id="footer-link">{t("contact")}</Link>
            <Link to='/login' id="footer-link">{t("Sign_In")}</Link>
            <Link to='/signup' id="footer-link">{t("Sign_Up")}</Link>
          </div>

          <div>
            <div className="my-5">
              <h2 className="text-lg text-white">{t("Head_Office")}</h2>
              <p className="footer-text">
                {t("Head_Office_ph")}
              </p>
            </div>
            <div>
              <h2 className="mb-5 text-lg text-white">{t("News_Letter")}</h2>
              <div className="flex justify-center items-center">
              <Input className="f-form-icon-parent" variant='flushed' placeholder={t("enter_your_email")} />
<span className="f-form-icon"><CiMail></CiMail></span>
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
