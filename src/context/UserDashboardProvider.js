import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
export const DashboardContext = createContext();
const UserDashboardProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [deposit, setDeposit] = useState(0);
  console.log(deposit);
  const [balance, setBalance] = useState(0);
  const [withdraw, setWithdarw] = useState(0);
  const [bankInfo, setBankInfo] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/bankAccounts/${user?.email}`)
      .then((res) => res.json())
      .then((data) =>console.log(data));
  }, []);
  console.log(bankInfo);
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
