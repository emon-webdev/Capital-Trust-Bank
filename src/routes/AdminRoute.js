import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../context/AuthProvider';
const AdminRoute = ({ children }) => {
  const { role } = useContext(AuthContext);
   console.log(role)
  if (role === "admin") {
    return children;
  } else {
    return <Navigate to="/"></Navigate>;
  }
};

export default AdminRoute;
