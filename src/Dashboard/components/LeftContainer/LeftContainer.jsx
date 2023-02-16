import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import AdminLeft from "../AdminLeft/AdminLeft";
import CustomerLeft from '../CustomerLeft/CustomerLeft';
const LeftContainer = () => {
  const { role } = useContext(AuthContext);
  return (
    <div className="">
      {role === "customer" ? <CustomerLeft></CustomerLeft> : undefined}
      {role === "admin" ? <AdminLeft></AdminLeft> : undefined}
    </div>
  );
};

export default LeftContainer;
