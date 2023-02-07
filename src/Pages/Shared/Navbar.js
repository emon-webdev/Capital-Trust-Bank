import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai";
import { BiGroup } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import mailLogo from "../../assets/logo/mainlogo.png";
import { AuthContext } from "../../context/AuthProvider";
const Navbar = () => {
  const { t } = useTranslation();
  const { logOut, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  let activeClass = {
    color: "#DF0303",
    background: "none",
  };

  const [isActive, setIsActive] = useState(false);

  const handleHumbagerMenu = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <div>
      <nav className="navbar__menu">
        <Link
          className="navbar-brand w-fit font-bold text-2xl flex items-center"
          to="/"
        >
          <img src={mailLogo} alt="" srcSet="" />
          <span className="font-bold text-[32px] ml-1 text-[#010C3A]">
            C<span className=" text-[#DF0303]">T</span>B
          </span>
        </Link>
        <div className="lg:hidden flex items-center">
          <div className="lg:hidden btn-group flex items-center">
            <div className="btn-group flex items-center">
              <button className="accent-btn search-btn" type="button">
                <FiSearch />
              </button>
              <NavLink
                to="/accountOpenFrom"
                className="accent-btn hidden  account-btn md:flex items-center"
              >
                <BiGroup className="" />
                {t("Open_an_Account")}
              </NavLink>
            </div>
          </div>
          {isActive ? (
            <button
              className="navbar-toggler  accent-btn font-bold text-[#DF0303]"
              type="button"
              onClick={handleHumbagerMenu}
            >
              <AiOutlineClose />
            </button>
          ) : (
            <button
              className="navbar-toggler accent-btn font-bold text-[#DF0303]"
              type="button"
              onClick={handleHumbagerMenu}
            >
              <AiOutlineMenuFold />
            </button>
          )}
        </div>
        <div className={isActive ? "navbar-collapsed" : "navbar-collapse"}>
          <ul className="navbar__nav">
            <li className="text-[16px] w-full md:w-auto font-medium  md:mr-4 hover:text-[#DF0303]">
              <NavLink
                to="/"
                className="w-full block py-3"
                style={({ isActive }) => (isActive ? activeClass : undefined)}
              >
                {t("home")}
              </NavLink>
            </li>

            <li className="text-[16px] w-full md:w-auto font-medium  md:mr-4 hover:text-[#DF0303] border-b border-[#DF0303] md:border-0">
              <NavLink
              
                className="w-full block py-3"
                style={({ isActive }) => (isActive ? activeClass : undefined)}
              >
                {t("Services")}
              </NavLink>
              {/* Submenu */}
              <ul className="submenu">
                <li>
                  <NavLink to="/educationloan" className="">
                    {t("Education_Loan")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/marriageloan" className="">
                    {t("Marriage_Loan")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/goldloan" className="">
                    {t("Gold_Loan")}
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/vehicleloan" className="">
                    {t("Vehicle_Loan")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/cards" className="">
                    {t("Cards")}
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="text-[16px] w-full md:w-auto font-medium md:mr-4 hover:text-[#DF0303] border-b border-[#DF0303] md:border-0">
              <NavLink
                
                className="w-full block py-3"
                style={({ isActive }) => (isActive ? activeClass : undefined)}
              >
                {t("Insurance")}
              </NavLink>
              {/* Submenu */}
              <ul className="submenu">
                <li>
                  <NavLink to="/healthinsurance">
                    {t("Health_Insurance")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/businessinsurance">
                    {t("Business_Insurance")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/travelinsurance">
                    {t("Travel_Insurance")}
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="text-[16px] w-full md:w-auto font-medium  md:mr-4 hover:text-[#DF0303] border-b border-[#DF0303] md:border-0">
              <NavLink
                // to="/insurance"
                className="w-full block py-3"
                style={({ isActive }) => (isActive ? activeClass : undefined)}
              >
                {t("Pages")}
              </NavLink>
              {/* Submenu */}
              <ul className="submenu">
                <li>
                  <NavLink to="/accountOpenFrom" className="">
                    Open an Account
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/faq" className="">
                    Faq
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/404" className="">
                    404
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="text-[16px] w-full md:w-auto font-medium  md:mr-4 hover:text-[#DF0303] border-b border-[#DF0303] md:border-0">
              <NavLink
                to="/about"
                className="w-full block py-3"
                style={({ isActive }) => (isActive ? activeClass : undefined)}
              >
                {t("about")}
              </NavLink>
              {/* dropdown menu */}
              <ul className="submenu">
                <li>
                  <NavLink to="/about" className="">
                    {t("about")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" className="">
                    {t("Sign_In")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/signup" className="">
                    {t("Sign_Up")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="">
                    <button onClick={handleSignOut}>{t("Sign_Out")}</button>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="text-[16px] w-full md:w-auto font-medium  md:mr-4 hover:text-[#DF0303] border-b border-[#DF0303] md:border-0">
              <NavLink
                to="/contact"
                className="w-full block py-3"
                style={({ isActive }) => (isActive ? activeClass : undefined)}
              >
                {t("contact")}
              </NavLink>
            </li>
            {user?.email && (
              <li className="text-[16px] w-full md:w-auto font-medium  md:mr-4 hover:text-[#DF0303] border-b border-[#DF0303] md:border-0">
                <NavLink
                  to="/dashboard"
                  className="w-full block py-3"
                  style={({ isActive }) => (isActive ? activeClass : undefined)}
                >
                  {t("dashboard")}
                </NavLink>
              </li>
            )}

            {user?.email ? (
              <li>
                <NavLink className="">
                  <button onClick={handleSignOut}>{t("Sign_Out")}</button>
                </NavLink>
              </li>
            ) : (
              <>
                <li className="text-[16px] w-full md:w-auto font-medium  md:mr-4 hover:text-[#DF0303] border-b border-[#DF0303] md:border-0">
                  <NavLink
                    to="/login"
                    className="w-full block py-3"
                    style={({ isActive }) =>
                      isActive ? activeClass : undefined
                    }
                  >
                    {t("Sign_In")}
                  </NavLink>
                </li>
                <li className="text-[16px] w-full md:w-auto font-medium  md:mr-4 hover:text-[#DF0303]">
                  <NavLink
                    to="/signup"
                    className="w-full block py-3"
                    style={({ isActive }) =>
                      isActive ? activeClass : undefined
                    }
                  >
                    {t("Sign_Up")}
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        {isActive ? (
          ""
        ) : (
          <div className="hidden lg:block">
            <div className="btn-group flex items-center">
              <button className="accent-btn search-btn" type="button">
                <FiSearch />
              </button>
              <NavLink
                to="/accountOpenFrom"
                className="accent-btn account-btn flex items-center"
              >
                <BiGroup className="" />
                {t("Open_an_Account")}
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
