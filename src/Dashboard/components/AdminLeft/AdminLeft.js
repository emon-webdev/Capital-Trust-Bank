import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../../assets/logo/mainlogo.png';

const AdminLeft = () => {
   const [isDown, setIsDown] = useState(false);
   const [isX, setIsX] = useState(false);
   const handleIcon = () => {
     setIsX(!isX);
   };
  return (
    <div className={`default-font`}>
      <div
        className={`icon flex justify-evenly p-4 text-2xl gap-2 ${
          isX ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <span className="hidden lg:block">Capital Trust Bank</span>
        <button onClick={handleIcon}>
          {isX ? (
            <>
              <FontAwesomeIcon icon={faX} />
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faBars} />
            </>
          )}
        </button>
      </div>
      <div className="hr flex w-11/12 mx-auto">
        <div className="left-hr w-2/5">
          <span>
            <hr/>
          </span>
        </div>
        <div className="logo">
          <img src={logo} alt="logo" className="-mt-4"/> 
        </div>
        <div className="right-hr w-2/5">
          <hr />
        </div>
      </div>
      <div className={`sideNav ${isX ? "block" : "hidden"} `}>
        <div className="menu p-2">
          <div className="flex flex-col divide-y-4 hover:divide-y-0 divide-red-600 lg:p-2">
            <Link
              to="/dashboard/allCustomers"
              className="p-2 hover:bg-red-600 rounded"
            >
              All Customers
            </Link>
            <Link
              to="/dashboard/verificationRequest"
              className="p-2 hover:bg-red-600 rounded"
            >
              Verification Request
            </Link>
            <Link
              to="/dashboard/cardRequest"
              className="p-2 hover:bg-red-600 rounded"
            >
              Credit card Request
            </Link>
            <Link
              to="/dashboard/loanRequest"
              className="p-2 hover:bg-red-600 rounded"
            >
              Loan Request
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLeft;
