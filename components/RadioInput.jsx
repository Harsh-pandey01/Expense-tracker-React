import React from "react";

export default function RadioInput() {
  return (
    <div className='Radio Input'>
      <div
        style={{
          marginBottom: 10,
        }}
      >
        <input type='radio' name='transectionType' id='income' />
        <label
          htmlFor='income'
          style={{
            marginLeft: 20,
            fontSize: "1rem",
          }}
        >
          Income
        </label>
      </div>
      <div>
        <input type='radio' name='transectionType' id='expense' />
        <label
          htmlFor='expense'
          style={{
            marginLeft: 20,
            fontSize: "1rem",
          }}
        >
          Expense
        </label>
      </div>
    </div>
  );
}
