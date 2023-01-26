import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        <span>Capital Trust Bank</span>
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

      <div className={`sideNav ${isX ? "block" : "hidden"} `}>
        <div className="menu p-2">
          <div className="flex flex-col divide-y-2">
            <Link to="/dashboard/allCustomers" className="">
              All Customers
            </Link>
            <Link to="/dashboard/verificationRequest" className="">
              Verification Request
            </Link>
            <Link to="/dashboard/cardRequest" className="">
              Credit card Request
            </Link>
            <Link to="/dashboard/loanRequest" className="">
              Loan Request
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLeft;
