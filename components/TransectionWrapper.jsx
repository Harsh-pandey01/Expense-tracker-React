import React, { useContext, useState } from "react";
import Input from "./Input";
import RadioInput from "./RadioInput";
import { BalanceContext } from "../contexts/BalancesContext";

export default function TransectionWrapper({ setTransections }) {
  const [inputDatas, setInputDatas] = useState({
    title:'',
    amount:'',
    type:''
  });


  const [balanceDetails,setBalanceDetails] = useContext(BalanceContext)

  const submitHandler = (e) => {
    e.preventDefault();
    const transection = {...inputDatas}
    if(
      inputDatas.title && inputDatas.amount && inputDatas.type
    ){
      setTransections((prev)=>([...prev , transection]))


      let {currentBalance,income,expense} = {...balanceDetails}

      if(inputDatas.type == 'income'){
        currentBalance = +currentBalance+ +inputDatas.amount
        income= +income + +inputDatas.amount
      }else{
        currentBalance = +currentBalance - +inputDatas.amount
        expense+=+expense + +inputDatas.amount
      }

      setBalanceDetails({currentBalance,income,expense})

      setInputDatas({
        title:'',
        amount:'',
        type:''
        })
    }
  };

  return (
    <div className='transection-wrapper'>
      <h2>Add new transaction</h2>
      <form className='add-transection-wrapper' onSubmit={submitHandler}>
        <Input
          title='Title'
          name ='title'
          type='text'
          placeholder='Enter the title'
          value={inputDatas.title}
          setInputDatas={setInputDatas}
        />
        <Input
          title='Expense'
          name ='amount'
          type='Number'
          placeholder='Enter the Amount'
          setInputDatas={setInputDatas}
          value={inputDatas.amount}
        />
        <RadioInput value={inputDatas.type} setInputDatas={setInputDatas} name='type' />
        <button className='submit-btn'>Add Transection</button>
      </form>
    </div>
  );
}
