import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../Pages/Shared/Footer";
import Header from "../../../Pages/Shared/Header";
import LeftContainer from '../LeftContainer/LeftContainer.jsx';


const DashboardLayout = () => {
  return (
    <div>
      <Header />
      <div className="flex default-font h-fit">
        <div className="left w-1/4 default-bg">
          <LeftContainer></LeftContainer>
        </div>
        <div className="right w-full default-bg">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
