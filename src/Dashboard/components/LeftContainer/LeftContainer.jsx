import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import AdminLeft from "../AdminLeft/AdminLeft";
import CustomerLeft from '../CustomerLeft/CustomerLeft';
const LeftContainer = () => {
  const { user, role, setRole } = useContext(AuthContext);
  const email = user?.email;
  useEffect(() => {
    fetch(`https://capital-trust-bank-server.vercel.app/customer/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setRole(data.role);
      });
  }, [user]);
  return (
    <div className="">
      {role === "customer" ? <CustomerLeft></CustomerLeft> : undefined}
      {role === "admin" ? <AdminLeft></AdminLeft> : undefined}
    </div>
  );
};

export default LeftContainer;
