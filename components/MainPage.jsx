import React from 'react'
import '../src/index.css'
import BalanceWrapper from './BalanceWrapper'
import HistoryWrapper from './HistoryWrapper'
import TransectionWrapper from './TransectionWrapper'
export default function MainPage() {
  return (
    <div className='mainPage-wrapper'>
      <h1 className="title">Expense Tracker</h1>
      <BalanceWrapper />
      <HistoryWrapper />
      <TransectionWrapper />
    </div>
  )
}
