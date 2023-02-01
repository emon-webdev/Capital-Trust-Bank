import React, { useState } from "react";
import { Outlet } from "react-router-dom";
// import Footer from "../../../Pages/Shared/Footer";
// import Header from "../../../Pages/Shared/Header";
import LeftContainer from "../LeftContainer/LeftContainer.jsx";
import DashboardNavbar from "./DashboardNavbar.js";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  // const { setLoading } = useContext(AuthContext);
  // setLoading(false);
  // console.log(mobileOpen)
  return (
    <div className="default-bg">
      {/* <Header /> */}

      {/* ----------Responsive Icon------------ */}
      {/* <div className="flex justify-between px-2">
        <div></div>
        <div onClick={() => setOpen(!open)}
          className="w-6 h-6 relative top-[10px] cursor-pointer lg:hidden md:block text-white">
          {
            open ? <AiOutlineClose className="w-6 h-6" /> : <AiOutlineBars className="w-6 h-6" />
          }
        </div>
      </div> */}
      {/* -----------Dashboard Navbar ------------ */}
      <DashboardNavbar />
      {/* ----------Left Side Component------------ */}
      {/* className={`left lg:w-[27%] md:w-[31%] sm:absolute bg-gradient-to-r from-[#000428] to-[#004E92] md:absolute lg:static  duration-500 ${open ? 'left-[0%]' : 'left-[-100%]'}`} */}
      <div className="flex default-font h-fit">
        <div>
          <LeftContainer></LeftContainer>
        </div>

        {/* ----------Out Let------------ */}
        <div className="right out w-full px-[15px]">
          <Outlet></Outlet>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default DashboardLayout;
