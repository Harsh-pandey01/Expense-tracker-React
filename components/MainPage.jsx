import React, { useContext, useState } from "react";
import "../src/index.css";
import BalanceWrapper from "./BalanceWrapper";
import HistoryWrapper from "./HistoryWrapper";
import TransectionWrapper from "./TransectionWrapper";
import {
  BalanceContext,
  BalanceContextprovider,
} from "../contexts/BalancesContext";

export default function MainPage() {

  // Transection state
  const [transections,setTransections] = useState([
    
  ])
  

  return (
    <div className='mainPage-wrapper'>
      <h1 className='title'>Expense Tracker</h1>
      <BalanceContextprovider>
        <BalanceWrapper />
        <HistoryWrapper transections = {transections} />
        <TransectionWrapper setTransections = {setTransections}/>
      </BalanceContextprovider>
    </div>
  );
}
