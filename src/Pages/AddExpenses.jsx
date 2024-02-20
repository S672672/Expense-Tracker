import React from 'react';

function AddExpenses() {
  return (
    <div>
      <form className='m-5 p-2 leading-6'>
        <div className='flex flex-col'>
          <label htmlFor="expenses">
            Add Expenses:
            <input type="text" id="expenses" placeholder="Expenses" className='h-full w-32 rounded-md' />
          </label>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col'>
            <label htmlFor="amount">
              Expenses Amount(Rs.):
              <input type="text" id="amount" placeholder='Amount in(Rs.)' />
            </label>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='bill'>
              Upload Bill:
              <input type="text" id="bill" placeholder='Upload Bill' />
            </label>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col'>
            <label htmlFor="expenseType">
              Select type of Expenses:
              <input type="text" id="expenseType" placeholder='Expense Type' />
            </label>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="expenseDate">
              Date of Expenses:
              <input type='date' id="expenseDate" placeholder='Select Date' />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddExpenses;
