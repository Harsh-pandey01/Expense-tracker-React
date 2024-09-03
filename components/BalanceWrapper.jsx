import React, { useContext } from "react";
import "../src/index.css";
import { BalanceContext } from "../contexts/BalancesContext";
export default function BalanceWrapper() {
  const [balanceDetails,setBalanceDetails] = useContext(BalanceContext)

  return (
    <div className='balance-wrapper'>
      <div className='current-balance-wrapper'>
        <h2>YOUR BALANCE</h2>
        <p className='current-amount'>${balanceDetails.currentBalance}</p>
      </div>
      <div className='balances-wrapper'>
        <div className='income-wrapper'>
          <h3>INCOME</h3>
          <p className='income-amount'>${balanceDetails.income}</p>
        </div>
       
        <div className='income-wrapper'>
          <h3>EXPENSE</h3>
          <p className='expense-amount'>${balanceDetails.expense}</p>
        </div>
      </div>
    </div>
  );
}
