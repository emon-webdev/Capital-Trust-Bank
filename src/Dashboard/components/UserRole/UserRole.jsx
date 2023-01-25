import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import AllCustomers from "../AllCustomers/AllCustomers";

const UserRole = () => {
  const { role } = useContext(AuthContext);
  return (
    <div>
      {role === "customer" ? undefined : undefined}
      {role === "admin" ? <AllCustomers></AllCustomers> : undefined}
    </div>
  );
};

export default UserRole;
