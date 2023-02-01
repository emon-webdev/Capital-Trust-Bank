import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import AllCustomers from "../AllCustomers/AllCustomers";
import MyTransaction from "../Customers/MyTransaction/MyTransaction";

const UserRole = () => {
  const { role } = useContext(AuthContext);
  console.log('role', role)
  return (
    <div>
      {role === "customer" ? <MyTransaction /> : undefined}
      {role === "admin" ? <AllCustomers></AllCustomers> : undefined}
    </div>
  );
};

export default UserRole;
