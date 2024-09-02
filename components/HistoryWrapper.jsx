import React from "react";

export default function HistoryWrapper() {
  return (
    <div className='history-wrapper'>
      <h2>History</h2>
      <div className='histories-wrapper'>
        <div className='overflow-wrapper'>
          <div className='history income'>
            <p>Tiltle</p>
            <p>Amount</p>
          </div>
          <div className='history expenese'>
            <p>Tiltle</p>
            <p>Amount</p>
          </div>
          <div className='history income'>
            <p>Tiltle</p>
            <p>Amount</p>
          </div>
          <div className='history expenese'>
            <p>Tiltle</p>
            <p>Amount</p>
          </div>
          <div className='history income'>
            <p>Tiltle</p>
            <p>Amount</p>
          </div>
        </div>
      </div>
    </div>
  );
}
