import React from 'react'
import { Form } from 'react-router-dom'

function AddExpenses() {
  return (
    <div>
      <Form className='m-5 p-2'>
        <label for = "Add Expenses">
          <input placeholder="expenses" className='h-full w-32 rounded-md'></input>
        </label>
        <div className='flex flex-col'>
        <div className='flex'>
        <label for = "Expenses Amount(Rs.)">
          <input placeholder='Amount in(Rs.)'>
          </input>
        </label>
        <label for = 'Upload bill'>
        <input placeholder=''>
        </input>
        </label>
        </div>
        <div className='flex'>
        <label for = "select type of expenses">
        <input>

        </input>

        </label>
        <label for = "Date of Expenses">
          <input type='date' placeholder='Select Date'>

          </input>
        </label>
        </div>
        </div>
      </Form>
    </div>
  )
}

export default AddExpenses