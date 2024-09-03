import React, { createContext, useState } from "react";

export const BalanceContext = createContext();

export const BalanceContextprovider = ({ children }) => {
  const [balanceDetails, setBalanceDetails] = useState({
    currentBalance: 0,
    income: 0,
    expense: 0,
  })
  
  return (
    <BalanceContext.Provider value={[balanceDetails, setBalanceDetails]}>
      {children}
    </BalanceContext.Provider>
  );
};
