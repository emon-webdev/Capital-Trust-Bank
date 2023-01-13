import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import mailLogo from "../../assets/logo/mainlogo.png";
const Navbar = () => {
  // const { logout, user } = useContext(AuthContext);
  //   console.log(user?.displayName);
  //   const handleSignOut = () => {
  //     logout()
  //       .then(() => {})
  //       .catch((error) => {
  //         console.log(error.message);
  //       });
  //   };

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
        {/* <Link className="navbar-brand" to="/">
            <img src="" alt="Car Finder" />
          </Link> */}
        <Link
          className="navbar-brand font-bold text-2xl flex items-center flex-1"
          to="/"
        >
          <img src={mailLogo} alt="" srcset="" />
          <span className="font-bold text-[32px] ml-1 text-[#010C3A]">
            C<span className=" text-[#DF0303]">T</span>B
          </span>
        </Link>
        <div>
          {isActive ? (
            <button
              className="navbar-toggler text-2xl font-bold bg-[#010C3A] text-[#DF0303]"
              type="button"
              onClick={handleHumbagerMenu}
            >
              <CloseIcon />
            </button>
          ) : (
            <button
              className="navbar-toggler text-2xl font-bold text-[#DF0303]"
              type="button"
              onClick={handleHumbagerMenu}
            >
              <MenuIcon />
            </button>
          )}
        </div>

        <div className={isActive ? "navbar-collapsed" : "navbar-collapse"}>
          <ul className="navbar__nav">
            <li className="text-[16px] w-full md:w-auto font-medium  md:mr-4 hover:text-[#DF0303] border-b border-[#DF0303] md:border-0">
              <NavLink
                to="/"
                className="w-full block py-3"
                style={({ isActive }) => (isActive ? activeClass : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li className="text-[16px] w-full md:w-auto font-medium md:mr-4 hover:text-[#DF0303] border-b border-[#DF0303] md:border-0">
              <NavLink
                to="/apply"
                className="w-full block py-3"
                style={({ isActive }) => (isActive ? activeClass : undefined)}
              >
                Apply Now
              </NavLink>
            </li>
            <li className="text-[16px] w-full md:w-auto font-medium  md:mr-4 hover:text-[#DF0303] border-b border-[#DF0303] md:border-0">
              <NavLink
                to="/insurance"
                className="w-full block py-3"
                style={({ isActive }) => (isActive ? activeClass : undefined)}
              >
                Insurance
              </NavLink>
            </li>
            <li className="text-[16px] w-full md:w-auto font-medium  md:mr-4 hover:text-[#DF0303] border-b border-[#DF0303] md:border-0">
              <NavLink
                to="/services"
                className="w-full block py-3"
                style={({ isActive }) => (isActive ? activeClass : undefined)}
              >
                Services
              </NavLink>
            </li>
            <li className="text-[16px] w-full md:w-auto font-medium  md:mr-4 hover:text-[#DF0303] border-b border-[#DF0303] md:border-0">
              <NavLink
                to="/about"
                className="w-full block py-3"
                style={({ isActive }) => (isActive ? activeClass : undefined)}
              >
                About
              </NavLink>
            </li>
            <>
              <li className="text-[16px] w-full md:w-auto font-medium  md:mr-4 hover:text-[#DF0303] border-b border-[#DF0303] md:border-0">
                <NavLink
                  to="/login"
                  className="w-full block py-3"
                  style={({ isActive }) => (isActive ? activeClass : undefined)}
                >
                  Sign In
                </NavLink>
              </li>
              <li className="text-[16px] w-full md:w-auto font-medium  md:mr-4 hover:text-[#DF0303]">
                <NavLink
                  to="/signup"
                  className="w-full block py-3"
                  style={({ isActive }) => (isActive ? activeClass : undefined)}
                >
                  Sign Up
                </NavLink>
              </li>
            </>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
