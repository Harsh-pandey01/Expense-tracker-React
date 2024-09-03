import React from 'react'

export default function Input({title,name,type,placeholder,value,setInputDatas}) {
  return (
    <div className='text-input'>
      <label htmlFor={title}>{title}</label>
      <input type={type} id={title} name={name} placeholder={placeholder} value={value}
      onChange={(e)=>{
        setInputDatas((prev)=>({...prev , [name] : e.target.value}))
      }}
      />
    </div>
  ) 
}
