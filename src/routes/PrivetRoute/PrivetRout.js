import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../../context/AuthProvider";

const PrivetRout = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <h1 className="text-center">Loading....</h1>;
  }

  if (user) {
    return children;
  }
  <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRout;
