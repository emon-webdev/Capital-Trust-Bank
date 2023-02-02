import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import AllCustomers from "../AllCustomers/AllCustomers";
import MyTransaction from "../Customers/MyTransaction/MyTransaction";

const UserRole = () => {
  const { role } = useContext(AuthContext);
<<<<<<< HEAD
  console.log('role', role)
  return (
    <div>
      {role === "customer" ? <MyTransaction /> : undefined}
=======
  console.log(role)
  return (
    <div>
      {role === "customer" ? <MyTransaction></MyTransaction> : undefined}
>>>>>>> 2cae88920343b030cdab559b064f4f5ea184bbc5
      {role === "admin" ? <AllCustomers></AllCustomers> : undefined}
    </div>
  );
};

export default UserRole;
