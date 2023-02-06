import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider.js";
import LeftContainer from '../LeftContainer/LeftContainer.jsx';
import DashboardNavbar from "./DashboardNavbar.js";
// import  '../../../App.css';

const DashboardLayout = () => {
  const { openSideNav } = useContext(AuthContext);
  return (
    // <div className='default-bg'>
    //   {/* -----------Dashboard Navbar ------------ */}
    //   <DashboardNavbar />
    //   {/* ----------Left Side Component------------ */}
    //   <div className="flex default-font h-fit">
    //     <div>
    //       <LeftContainer></LeftContainer>

    //     </div>

    //     {/* ----------Out Let------------ */}
    //     <div className="right out w-full px-[15px]">
    //       <Outlet></Outlet>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className=''>
        <DashboardNavbar />
      </div>

      <div className="flex ">
      {/* lg:left-0 md:left-[-100%] sm:left-[-100%] */}
        <div 
        className={`w-[300px] side-bar fixed z-10 top-0 lg:left-0 sm:left-[-100%] duration-500 overflow-y-auto  bg-[#041C51] shadow h-screen bottom-0 ${openSideNav ? 'left-[0%]' : 'left-[-100%]'}`}
       >
          <LeftContainer></LeftContainer>
        </div>
        <div className="lg:ml-[305px] w-full md:ml-0 z-0 p-2" >
        
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
