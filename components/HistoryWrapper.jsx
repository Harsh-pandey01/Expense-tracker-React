import React from "react";

export default function HistoryWrapper({ transections }) {
  return (
    <div className='history-wrapper'>
      <h2>History</h2>
      <div className='histories-wrapper'>
        {transections.length === 0 ? (
          <p>No transection </p>
        ) : (
          <div className='overflow-wrapper'>
            {transections.map((transection) => {
              return (
                <div className={`history ${transection.type}`}>
                  <p>{transection.title}</p>
                  <p>{transection.amount}</p>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  );
}
