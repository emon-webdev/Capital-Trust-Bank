import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SearchIcon from "@mui/icons-material/Search";
import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import mailLogo from "../../assets/logo/mainlogo.png";
import { AuthContext } from "../../context/AuthProvider";
const Navbar = () => {
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
              <NavLink to="/accountOpenFrom" className="">
                <PersonAddIcon className="mr-1 text-sm" />
                Open an Account
              </NavLink>
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
            <li className="text-[16px] w-full md:w-auto font-medium  md:mr-4 hover:text-[#DF0303]">
              <NavLink
                to="/"
                className="w-full block py-3"
                style={({ isActive }) => (isActive ? activeClass : undefined)}
              >
                Home
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
                <li>
                  <NavLink to="/cards" className="">
                    Cards
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="text-[16px] w-full md:w-auto font-medium md:mr-4 hover:text-[#DF0303] border-b border-[#DF0303] md:border-0">
              <NavLink
                to="/insurance"
                className="w-full block py-3"
                style={({ isActive }) => (isActive ? activeClass : undefined)}
              >
                Insurance
              </NavLink>
              {/* Submenu */}
              <ul className="submenu">
                <li>
                  <NavLink to="/healthinsurance" className="">
                    Health Insurance
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/businessinsurance" className="">
                    Business Insurance
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/travelinsurance" className="">
                    Travel Insurance
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
                Pages
              </NavLink>
              {/* Submenu */}
              <ul className="submenu">
                <li>
                  <NavLink to="/accountOpenFrom" className="">
                    Account Open
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
                About
              </NavLink>
              {/* dropdown menu */}
              <ul className="submenu">
                <li>
                  <NavLink to="/about" className="">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" className="">
                    Sign In
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/signup" className="">
                    Sign Up
                  </NavLink>
                </li>
                <li>
                  <NavLink className="">
                    <button onClick={handleSignOut}>Sign Out</button>
                  </NavLink>
                </li>
              </ul>
            </li>
            {user?.email && (
              <li className="text-[16px] w-full md:w-auto font-medium  md:mr-4 hover:text-[#DF0303] border-b border-[#DF0303] md:border-0">
                <NavLink
                  to="/dashboard"
                  className="w-full block py-3"
                  style={({ isActive }) => (isActive ? activeClass : undefined)}
                >
                  Dashboard
                </NavLink>
              </li>
            )}
            {!user?.email && (
              <>
                <li className="text-[16px] w-full md:w-auto font-medium  md:mr-4 hover:text-[#DF0303] border-b border-[#DF0303] md:border-0">
                  <NavLink
                    to="/login"
                    className="w-full block py-3"
                    style={({ isActive }) =>
                      isActive ? activeClass : undefined
                    }
                  >
                    Sign In
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
                    Sign Up
                  </NavLink>
                </li>
              </>
            )}
            <li className="text-[16px] w-full md:w-auto font-medium  md:mr-4 hover:text-[#DF0303] border-b border-[#DF0303] md:border-0">
              <NavLink
                to="/contact"
                className="w-full block py-3"
                style={({ isActive }) => (isActive ? activeClass : undefined)}
              >
                Contact
              </NavLink>
            </li>
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
                <NavLink to="/accountOpenFrom" className="">
                  <PersonAddIcon className="mr-1 text-sm" />
                  Open an Account
                </NavLink>
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
