import React from 'react';

function AddExpenses() {
  return (
    <div className='m-3'>
      <form className='m-5 p-2'>
        {/* First Input - Full Width */}
        <label htmlFor="expenses" className="block mb-2 font-bold text-xl text-gray-700">
          Add Expenses:
          <input id="expenses" placeholder="Expenses" className='w-full p-2 rounded-md font-400 text-black' />
        </label>

        {/* Two Inputs in a Row */}
        <div className='flex flex-wrap mb-2'>
          <div className='w-1/2 pr-2'>
            <label htmlFor="expensesAmount" className="block font-bold text-xl text-gray-700">
              Expenses Amount(Rs.):
              <input id="expensesAmount" type="number" placeholder='Amount in(Rs.)' className='w-full p-2 rounded-md font-400 text-black' />
            </label>
          </div>
          <div className='w-1/3 pl-2'>
            <label htmlFor='uploadBill' className="block font-bold text-xl text-gray-700">
              Upload Bill:
              <input id='uploadBill' type='file' placeholder='' className='w-full p-2 rounded-md bg-white' />
            </label>
          </div>
        </div>

        
        <div className='flex flex-wrap mb-2'>
          <div className='w-1/2 pr-2'>
            <label htmlFor="expenseType" className="block font-bold text-xl text-gray-700">
              Type of Expenses:
              <select id="expenseType" className='w-full p-2 rounded-md bg-white'>
                <option value="" disabled selected hidden>Choose...</option>
                <option value="food">Food</option>
                <option value="travel">Travel</option>
                
              </select>
            </label>
          </div>
          <div className='w-1/3 pl-2'>
            <label htmlFor="dateOfExpenses" className="block font-bold text-xl text-gray-700">
              Date of Expenses:
              <input id="dateOfExpenses" type='date' placeholder='Select Date' className='w-full p-2 rounded-md' />
            </label>
          </div>
        </div>

        
        <div className='mb-2'>
          <label htmlFor="expenseDescription" className="block font-bold text-xl text-gray-700">
            Description:
            <textarea id="expenseDescription" placeholder="Enter description..." className='w-full p-2 rounded-md font-200 text-black'></textarea>
          </label>
        </div>

     
        <div className='mb-2 flex items-center'>
          <input type="checkbox" id="licenseAgree" className='mr-2 h-5 w-5' />
          <label htmlFor="licenseAgree" className="block font-bold text-gray-700 text-xl">
            I agree with the terms and conditions
          </label>
        </div>

       
        <div className='mb-2'>
          <button type="button" className='bg-blue-500 text-white p-2 rounded-md font-bold text-xl'>
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddExpenses;
