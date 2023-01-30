import React, { useState } from "react";
import { Outlet } from "react-router-dom";
// import Footer from "../../../Pages/Shared/Footer";
// import Header from "../../../Pages/Shared/Header";
import LeftContainer from '../LeftContainer/LeftContainer.jsx';
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";


const DashboardLayout = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='default-bg'>
      {/* <Header /> */}

      {/* ----------Responsive Icon------------ */}
      <div className="flex justify-between px-2">
        <div></div>
        <div onClick={() => setOpen(!open)}
          className="w-6 h-6 cursor-pointer lg:hidden md:block text-white">
          {
            open ? <AiOutlineClose className="w-6 h-6" /> : <AiOutlineBars className="w-6 h-6" />
          }
        </div>
      </div>

      {/* ----------Left Side Component------------ */}
      <div className="flex  default-font h-fit">
        <div className={`left lg:w-[27%] md:w-[31%] sm:absolute md:absolute lg:static  duration-500 ${open ? 'left-[0%]' : 'left-[-100%]'}`}>
          <LeftContainer></LeftContainer>
        </div>

        {/* ----------Out Let------------ */}
        <div className="right w-full ">
          <Outlet></Outlet>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default DashboardLayout;
