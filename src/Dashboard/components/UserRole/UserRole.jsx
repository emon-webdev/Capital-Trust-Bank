import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import AllCustomers from "../AllCustomers/AllCustomers";
import MyTransaction from "../Customers/MyTransaction/MyTransaction";

const UserRole = () => {
  const { role } = useContext(AuthContext);
  return (
    <div>
      {role === "customer" ? <MyTransaction></MyTransaction> : undefined}
      {role === "admin" ? <AllCustomers></AllCustomers> : undefined}
    </div>
  );
};

export default UserRole;
