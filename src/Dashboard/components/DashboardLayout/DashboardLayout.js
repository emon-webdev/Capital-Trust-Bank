import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider.js";
import LeftContainer from "../LeftContainer/LeftContainer.jsx";
import DashboardNavbar from "./DashboardNavbar.js";
// import  '../../../App.css';

const DashboardLayout = () => {
  const { openSideNav } = useContext(AuthContext);
  return (
    <div>
      <div className="bg-[#041C51] py-2">
        <DashboardNavbar />
      </div>

      <div className="flex">
        <div
          className={`w-[230px] fixed z-10 top-0  duration-500 overflow-y-auto  bg-[#041C51] shadow h-screen bottom-0 ${
            openSideNav ? "left-[0%]" : "left-[-100%]"
          }`}
        >
          <LeftContainer></LeftContainer>
        </div>

        <div className="w-[230px] fixed z-10 top-0 side-nave md:hidden lg:block sm:hidden duration-500 overflow-y-auto  bg-[#041C51] shadow h-screen bottom-0">
          <LeftContainer></LeftContainer>
        </div>
        <div className="lg:ml-[230px] h-screen  w-full md:ml-0 z-0 px-5 pt-10 bg-[#F3F3FE]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
