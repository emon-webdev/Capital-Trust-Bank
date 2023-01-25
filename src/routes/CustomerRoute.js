import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const CustomerRoute = ({ children }) => {
  const { role } = useContext(AuthContext);
  if (role === "customer") {
    return children;
  } else {
    return <Navigate to="/"></Navigate>;
  }
};

export default CustomerRoute;
