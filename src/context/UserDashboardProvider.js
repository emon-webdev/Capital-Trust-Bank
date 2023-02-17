import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
export const DashboardContext = createContext();
const UserDashboardProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [deposit, setDeposit] = useState(0);
  const [balance, setBalance] = useState(0);
  const [withdraw, setWithdarw] = useState(0);
  const [bankInfo, setBankInfo] = useState([]);
  useEffect(() => {
    fetch(`https://capital-trust-bank-server.vercel.app/bankAccounts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => (data));
  }, [user?.email]);
  const info = {
    deposit,
    setDeposit,
    balance,
    setBalance,
    withdraw,
    setWithdarw,
    bankInfo,
    setBankInfo,
  };
  return (
    <DashboardContext.Provider value={info}>
      {children}
    </DashboardContext.Provider>
  );
};

export default UserDashboardProvider;
