import React from "react";
import "../src/index.css";
export default function BalanceWrapper() {
  return (
    <div className='balance-wrapper'>
      <div className='current-balance-wrapper'>
        <h2>YOUR BALANCE</h2>
        <p className='current-amount'>$0.00</p>
      </div>
      <div className='balances-wrapper'>
        <div className='income-wrapper'>
          <h3>INCOME</h3>
          <p className='income-amount'>$0.00</p>
        </div>
       
        <div className='income-wrapper'>
          <h3>EXPENSE</h3>
          <p className='expense-amount'>$0.00</p>
        </div>
      </div>
    </div>
  );
}
