import React from "react";

export default function RadioInput({value,name,setInputDatas}) {
  return (
    <div className='Radio Input'>
      <div
        style={{
          marginBottom: 10,
        }}
      >
        <input type='radio' id='income' value='income' name={name} onChange={(e)=>{
      
      setInputDatas((prev)=>({...prev,type:e.target.value}))

        }}/>
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
        <input type='radio' name={name} id='expense' value='expense' onChange={(e)=>{
          setInputDatas((prev)=>({...prev,type:e.target.value}))
        }} />
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
