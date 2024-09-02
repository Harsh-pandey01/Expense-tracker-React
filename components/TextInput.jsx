import React from 'react'

export default function TextInput() {
  return (
    <div className='text-input'>
      <label htmlFor="title">Title</label>
      <input type="text" id='title' name='title'/>
    </div>
  ) 
}
