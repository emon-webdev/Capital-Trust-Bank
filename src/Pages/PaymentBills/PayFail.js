import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
const PayFail = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-[#F3F3FE]">
      <div className="container py-24">
        <div
          className="md:w-2/4 mx-auto py-5 px-4 border-2 bg-white"
          style={{ boxShadow: "0 4px 4px rgb(87 100 126 / 21%)" }}
        >
          <div className="success-icon text-center mb-5">
            {/* <CheckIcon /> */}
            <AiOutlineCheckCircle className="text-center text-8xl text-red-400 mx-auto" />
            <h2 className="text-red-400 font-bold mt-2">
              Your Bill Payment Has Been Failed
            </h2>
          </div>
          <div className="text-center mt-3">
            <Link to="/" className="sm-btn">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayFail;
