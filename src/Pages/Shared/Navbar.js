import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai";
import { BiGroup } from "react-icons/bi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import mailLogo from "../../assets/logo/mainlogo.png";
import { AuthContext } from "../../context/AuthProvider";
const Navbar = () => {
  const { t } = useTranslation();
  const { logOut, user } = useContext(AuthContext);

  const navigate = useNavigate();
  const [isApply, setIsApply] = useState(false);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_KEY}/customer/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.role === "admin") {
          return setIsApply(true);
        }
        if (data.isApply) {
          return setIsApply(true);
        }
        setIsApply(false);
      });
  }, [user]);

  const handleSignOut = () => {
    //delete customer device info
    fetch(`${process.env.REACT_APP_API_KEY}/deleteDeviceInfo/${user?.email}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        logOut()
          .then(() => {
            navigate("/");
          })
          .catch((error) => {});
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
              className="navbar-toggler ml-4 accent-btn font-bold text-[#DF0303]"
              type="button"
              onClick={handleHumbagerMenu}
            >
              <AiOutlineClose />
            </button>
          ) : (
            <button
              className="navbar-toggler ml-4 accent-btn font-bold text-[#DF0303]"
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
                to="/loansServices"
                className="w-full block py-3"
                style={({ isActive }) => (isActive ? activeClass : undefined)}
              >
                {t("Services")}
              </NavLink>
              {/* Submenu */}
              <ul className="submenu">
                <li>
                  <NavLink to="/paymentbills" className="">
                    {t("Pay_bills")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/loansServices" className="">
                    {t("Loans")}
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
                to="/insurances"
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
                to="/paymentbills"
                className="w-full block py-3"
                style={({ isActive }) => (isActive ? activeClass : undefined)}
              >
                {t("Pages")}
              </NavLink>
              {/* Submenu */}
              <ul className="submenu">
                <li>
                  <NavLink to="/project-docs" className="">
                    Project Docs
                  </NavLink>
                </li>
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
                  <NavLink to="/faq" className="">
                    {t("Faq")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/404" className="">
                    {t("404")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/accountOpenFrom" className="">
                    {t("Open_an_Account")}
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="text-[16px] w-full md:w-auto font-medium  md:mr-4 hover:text-[#DF0303] border-b border-[#DF0303] md:border-0">
              <NavLink
                to="/team"
                className="w-full block py-3"
                style={({ isActive }) => (isActive ? activeClass : undefined)}
              >
                Our Team
              </NavLink>
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
            {isApply && (
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
              {/* <button>
                <SearchBar></SearchBar>
              </button> */}
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
