import CloseIcon from "@mui/icons-material/Close";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import mailLogo from "../../assets/logo/mainlogo.png";
import { AuthContext } from "../../context/AuthProvider";
const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  console.log(user);
  const handleSignOut = () => {
    logOut()
      .then(() => {})
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
          className="navbar-brand font-bold text-2xl flex items-center"
          to="/"
        >
          <img src={mailLogo} alt="" srcSet="" />
          <span className="font-bold text-[32px] ml-1 text-[#010C3A]">
            C<span className=" text-[#DF0303]">T</span>B
          </span>
        </Link>
        <div className="flex items-center">
          <div className="lg:hidden btn-group flex items-center">
            <button className="accent-btn" type="button">
              <SearchIcon />
            </button>
            <button className="accent-btn hidden md:block" type="button">
              <MailOutlineIcon className="mr-2 text-sm" />
              Request Loan
            </button>
          </div>
          {isActive ? (
            <button
              className="navbar-toggler  accent-btn font-bold text-[#DF0303]"
              type="button"
              onClick={handleHumbagerMenu}
            >
              <CloseIcon />
            </button>
          ) : (
            <button
              className="navbar-toggler accent-btn font-bold text-[#DF0303]"
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
                Services
              </NavLink>
              {/* Submenu */}
              <ul className="submenu">
              <li>
                  <NavLink to="/educationloan" className="">
                    Education Loan
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/marriageloan" className="">
                    Marriage Loan
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/goldloan" className="">
                    Gold Loan
                  </NavLink>
                </li>
            
            
                <li>
                  <NavLink to="/vehicleloan" className="">
                    Vehicle Loan
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="text-[16px] w-full md:w-auto font-medium md:mr-4 hover:text-[#DF0303] border-b border-[#DF0303] md:border-0">
              <NavLink
                to="/apply"
                className="w-full block py-3"
                style={({ isActive }) => (isActive ? activeClass : undefined)}
              >
                Apply Now
              </NavLink>
              {/* Submenu */}
              <ul className="submenu">
                <li>
                  <NavLink to="/" className="">
                    Apply 1
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="">
                    Apply 2
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/signup" className="">
                    Apply 3
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="text-[16px] w-full md:w-auto font-medium  md:mr-4 hover:text-[#DF0303] border-b border-[#DF0303] md:border-0">
              <NavLink
                to="/insurance"
                className="w-full block py-3"
                style={({ isActive }) => (isActive ? activeClass : undefined)}
              >
                Pages
              </NavLink>
              {/* Submenu */}
              <ul className="submenu">
                <li>
                  <NavLink to="/" className="">
                    Pages 1
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="">
                    Pages 2
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/signup" className="">
                    Pages 3
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
                About
              </NavLink>
              {/* dropdown menu */}
              <ul className="submenu">
                <li>
                  <NavLink to="/about" className="">
                    About 1
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="">
                    About 2
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="">
                    About 3
                  </NavLink>
                </li>
              </ul>
            </li>
            {user?.email ? ( 
             <>
                <li className="text-[16px] w-full md:w-auto font-medium  md:mr-4 hover:text-[#DF0303]">
                  <button onClick={handleSignOut}>Sign Out</button>
                </li>
              </>
            ) : (
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
             )} 
          </ul>
        </div>
        {isActive ? (
          ""
        ) : (
          <div className="hidden lg:block">
            <div className="btn-group flex items-center">
              <button className="accent-btn" type="button">
                <SearchIcon />
              </button>
              <button className="accent-btn" type="button">
                <MailOutlineIcon className="mr-2 text-sm" />
                Request Loan
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
