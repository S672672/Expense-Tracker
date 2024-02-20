import React from 'react'
import NavTitle from '../Components/NavTitle'

function AddExpenses() {
  return (
    <div className='m-3'>
    <NavTitle NavTitle="AddExpenses" />
      <form className='m-5 p-2'>
        <label for = "Add Expenses">
        Add Expenses:
          <input placeholder="expenses" className='h-full w-32 rounded-md'></input>
        </label>
        <div className='flex flex-col gap-2'>
        <div className='flex'>
        <label for = "Expenses Amount(Rs.)">
        Expenses Amount(Rs.):
          <input placeholder='Amount in(Rs.)'>
          </input>
        </label>
        <label for = 'Upload bill'>
        Upload Bill:
        <input placeholder=''>
        </input>
        </label>
        </div>
        <div className='flex'>
        <label for = "select type of expenses">
        Select type of Expenses:
        <input>

        </input>

        </label>
        <label for = "Date of Expenses">
        Date of Expenses:
          <input type='date' placeholder='Select Date'>

          </input>
        </label>
        </div>
        </div>
      </form>
      </div>
    
  )
}

export default AddExpenses