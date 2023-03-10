import React, { useState } from "react";
import { BsChatSquareQuote, BsFillCreditCardFill } from "react-icons/bs";
import { CiBadgeDollar } from "react-icons/ci";
import { FaCommentDollar, FaDonate } from "react-icons/fa";
import { MdOutlineImportantDevices, MdSupervisorAccount } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { VscRequestChanges } from "react-icons/vsc";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo/mainlogo.png";

const AdminLeft = () => {
  const [subMenu, setSubMenu] = useState(false);
  return (
    <>
      <div ClassName="text-white">
        <div className="text-white w-[70%] flex items-center justify-center py-[10px]">
          <Link
            className="navbar-brand font-bold text-2xl flex items-center"
            to="/"
          >
            <img src={logo} alt="" srcSet="" />
            <span className="font-bold text-[32px] ml-1 text-[#fff]">
              C<span className=" text-[#DF0303]">T</span>B
            </span>
          </Link>
        </div>

        {/* ---------LINK ------------- */}
        <div className="mt-[40px]">
          <NavLink
            onClick={() => setSubMenu(!subMenu)}
            to="/dashboard/allCustomers"
            className={({ isActive }) =>
              isActive
                ? "border-l-2 bg-[#DF0303] link flex items-center px-[20px] py-[15px]"
                : "flex px-[20px] link items-center py-[15px]"
            }
          >
            <span className="text-white">
              {" "}
              <MdSupervisorAccount />
            </span>
            <span className="text-white ml-[10px]">All Bank Users</span>
            {/* <span className={`${subMenu ? 'rotate-180' : 'rotate-0'}`}><ExpandMoreIcon /></span> */}
          </NavLink>

          <NavLink
            to="/dashboard/verificationRequest"
            className={({ isActive }) =>
              isActive
                ? "border-l-2 bg-[#DF0303] link flex items-center px-[20px] py-[15px]"
                : "flex px-[20px] link items-center py-[15px]"
            }
          >
            <span className="text-white">
              {" "}
              <VscRequestChanges />
            </span>
            <span className="text-white ml-[10px]">Verification Request</span>
          </NavLink>

          <NavLink
            to="/dashboard/cardRequest"
            className={({ isActive }) =>
              isActive
                ? "border-l-2 bg-[#DF0303] link items-center flex px-[20px] py-[15px]"
                : "flex px-[20px] link items-center py-[15px]"
            }
          >
            <span className="text-white">
              {" "}
              <BsFillCreditCardFill />
            </span>
            <span className="text-white ml-[10px]">Card Request</span>
          </NavLink>

          <NavLink
            to="/dashboard/loanRequest"
            className={({ isActive }) =>
              isActive
                ? "border-l-2 bg-[#DF0303] link items-center flex px-[20px] py-[15px]"
                : "flex px-[20px] items-center link py-[15px]"
            }
          >
            <span className="text-white">
              {" "}
              <FaCommentDollar />
            </span>
            <span className="text-white ml-[10px]">Loan Request</span>
          </NavLink>

          <NavLink
            to="/dashboard/insuranceRequest"
            className={({ isActive }) =>
              isActive
                ? "border-l-2 bg-[#DF0303] link items-center flex px-[20px] py-[15px]"
                : "flex px-[20px] items-center link py-[15px]"
            }
          >
            <span className="text-white">
              {" "}
              <BsChatSquareQuote />
            </span>
            <span className="text-white ml-[10px]">Insurance Request</span>
          </NavLink>

          <NavLink
            to="/dashboard/emgy-service-req"
            className={({ isActive }) =>
              isActive
                ? "border-l-2 bg-[#DF0303] link items-center flex px-[20px] py-[15px]"
                : "flex px-[20px] items-center link py-[15px]"
            }
          >
            <span className="text-white">
              {" "}
              <FaDonate />
            </span>
            <span className="text-white ml-[10px]">Emgy Service Req</span>
          </NavLink>
          <NavLink
            to="/dashboard/all-donate"
            className={({ isActive }) =>
              isActive
                ? "border-l-2 bg-[#DF0303] link items-center flex px-[20px] py-[15px]"
                : "flex px-[20px] items-center link py-[15px]"
            }
          >
            <span className="text-white">
              {" "}
              <FaDonate />
            </span>
            <span className="text-white ml-[10px]">All Donate</span>
          </NavLink>
          <NavLink
            to="/dashboard/all-bills"
            className={({ isActive }) =>
              isActive
                ? "border-l-2 bg-[#DF0303] link items-center flex px-[20px] py-[15px]"
                : "flex px-[20px] items-center link py-[15px]"
            }
          >
            <span className="text-white">
              {" "}
              <CiBadgeDollar />
            </span>
            <span className="text-white ml-[10px]">All Bills</span>
          </NavLink>

          <NavLink
            to="/dashboard/deviceActivity"
            className={({ isActive }) =>
              isActive
                ? "border-l-2 bg-[#DF0303] link flex dath items-center px-[20px] py-[15px] text-white"
                : "flex px-[20px] dath link py-[15px] text-white"
            }
          >
            <span>
              {/* {" "} */}
              <MdOutlineImportantDevices />
            </span>
            <span className="text-white ml-[10px]">Device Activity</span>
          </NavLink>

          <NavLink
            to="/dashboard/CustomerSupport"
            className={({ isActive }) =>
              isActive
                ? "border-l-2 link bg-[#DF0303] flex items-center px-[20px] py-[15px]"
                : "flex px-[20px] items-center link py-[15px]"
            }
          >
            <span className="text-white">
              {" "}
              <RiMessage2Fill />
            </span>
            <span className="text-white ml-[10px]">Customer Support</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminLeft;
