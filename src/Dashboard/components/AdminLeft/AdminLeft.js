import React from "react";
import { Link } from "react-router-dom";

const AdminLeft = () => {
  return (
    <div className="flex flex-col">
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
  );
};

export default AdminLeft;
