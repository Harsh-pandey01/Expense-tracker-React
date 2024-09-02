import React from 'react'
import TextInput from './TextInput'
import RadioInput from './RadioInput'

export default function TransectionWrapper() {

const submitHandler = (e) =>{
e.preventDefault()
}


  return (
    <div className='transection-wrapper'>
      <h2>Add new transaction</h2>
      <form className="add-transection-wrapper" onSubmit={submitHandler}>
        <TextInput />
        <TextInput />
        <RadioInput />
        <button className='submit-btn'>Add Transection</button>
      </form>
    </div>
  )
}
