// import { useState } from "react";
import { useContext, useEffect, useState } from "react";
import { AiOutlineIdcard } from "react-icons/ai";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { MdAttachMoney, MdOutlineImportantDevices } from "react-icons/md";
import { RiAccountCircleLine, RiMessage2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import "../../../App.css";
import logo from "../../../assets/logo/mainlogo.png";
import { AuthContext } from "../../../context/AuthProvider";

const CustomerLeft = () => {
  const [approve, setApprove] = useState(false);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://capital-trust-bank-server-ten.vercel.app/bankAccounts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.approve) {
          return setApprove(true);
        }
        setApprove(false);
      });
  }, [user]);
  return (
    <>
      <div className="text-white">
        <div className="text-white w-[70%] flex items-center justify-center ml-[-17px] py-[10px]">
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
        {approve && (
          <div className="mt-[40px]">
            <NavLink
              to="/dashboard/myAccount"
              className={({ isActive }) =>
                isActive
                  ? "border-l-2 bg-[#DF0303] link flex items-center px-[20px] py-[15px]"
                  : "flex px-[20px] items-center link py-[15px]"
              }
            >
              <span>
                {" "}
                <RiAccountCircleLine />
              </span>
              <span className="text-white ml-[10px]">My Account</span>
            </NavLink>

            <NavLink
              to="/dashboard/myTransaction"
              // onClick={() => setSubMenu(!subMenu)}
              className={({ isActive }) =>
                isActive
                  ? "border-l-2 bg-[#DF0303] link flex dath items-center px-[20px] py-[15px]"
                  : "flex px-[20px] dath link py-[15px]"
              }
            >
              <span>
                {" "}
                <MdAttachMoney />
              </span>
              <span className="text-white ml-[10px]">Transaction</span>
            </NavLink>

            <NavLink
              to="/dashboard/my-deposit"
              className={({ isActive }) =>
                isActive
                  ? "border-l-2 bg-[#DF0303] link flex dath items-center px-[20px] py-[15px]"
                  : "flex px-[20px] dath link py-[15px]"
              }
            >
              <span>
                {" "}
                <GiPayMoney />
              </span>
              <span className="text-white ml-[10px]">Deposit</span>
            </NavLink>

            <NavLink
              to="/dashboard/my-withdraw"
              className={({ isActive }) =>
                isActive
                  ? "border-l-2 bg-[#DF0303] link flex dath items-center px-[20px] py-[15px]"
                  : "flex px-[20px] dath link py-[15px]"
              }
            >
              <span>
                {" "}
                <GiReceiveMoney />
              </span>
              <span className="text-white ml-[10px]">Withdraw</span>
            </NavLink>

            <NavLink
              to="/dashboard/deviceActivity"
              className={({ isActive }) =>
                isActive
                  ? "border-l-2 bg-[#DF0303] link flex dath items-center px-[20px] py-[15px]"
                  : "flex px-[20px] dath link py-[15px]"
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
                  ? "border-l-2 bg-[#DF0303] link flex items-center px-[20px] py-[15px]"
                  : "flex px-[20px] link py-[15px]"
              }
            >
              <span className="text-white">
                {" "}
                <RiMessage2Fill />
              </span>
              <span className="text-white ml-[10px]">Customer Support</span>
            </NavLink>

            <NavLink
              to="/dashboard/takeCard"
              className={({ isActive }) =>
                isActive
                  ? "border-l-2 bg-[#DF0303] link flex items-center px-[20px] py-[15px]"
                  : "flex px-[20px] link py-[15px]"
              }
            >
              <span>
                {/* {" "} */}
                <AiOutlineIdcard />
              </span>
              <span className="text-white ml-[10px]">Take Card</span>
            </NavLink>

            {/* -------Sub Menu ----------- */}
            {/* <div className={`${subMenu ? 'block' : 'hidden'} duration-500 transition-all flex flex-col px-[20px] py-[15px]`}>
                      <NavLink to='/dashboard/my-deposit'
                          className='flex items-center link py-[10px] px-[5px] rounded-md'
                      >
                          <span> <CloudCircleOutlinedIcon /></span>
                          <span className='text-white ml-[10px]'>My Deposit</span>
                      </NavLink>

                      <NavLink
                          to='/dashboard/my-withdraw'
                          className='flex items-center link py-[10px] px-[5px] rounded-md'
                      >
                          <span> <CloudCircleOutlinedIcon /></span>
                          <span className='text-white ml-[10px]'>My Withdraw</span>
                      </NavLink>

                      <NavLink
                          to='/dashboard/my-balance'
                          className='flex items-center link py-[10px] px-[5px] rounded-md'
                      >
                          <span> <CloudCircleOutlinedIcon /></span>
                          <span className='text-white ml-[10px]'>My Balance</span>
                      </NavLink>
                  </div> */}
          </div>
        )}
      </div>
    </>
  );
};

export default CustomerLeft;
