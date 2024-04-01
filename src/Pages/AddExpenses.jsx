import React, { useState } from 'react';
import axios from 'axios';

function AddExpenses() {
  // State variables to manage form data
  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState('');
  const [bill, setBill] = useState(null);
  const [expenseType, setExpenseType] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  // Function to handle file input change
  const handleFileChange = (event) => {
    setBill(event.target.files[0]);
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('expense', expense);
      formData.append('amount', amount);
      formData.append('bill', bill);
      formData.append('expenseType', expenseType);
      formData.append('date', date);
      formData.append('description', description);

      const response = await axios.post('http://localhost:3001/add-expense', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Log response data
      console.log('Expense added:', response.data);

      // Reset form fields
      setExpense('');
      setAmount('');
      setBill(null);
      setExpenseType('');
      setDate('');
      setDescription('');
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  return (
    <div className='m-3'>
      <form className='m-5 p-2' onSubmit={handleSubmit}>
        {/* Your form inputs */}
        {/* Expense */}
        <label htmlFor="expenses" className="block mb-2 font-bold text-xl text-gray-700">
          Add Expenses:
          <input id="expenses" value={expense} onChange={(e) => setExpense(e.target.value)} placeholder="Expenses" className='w-full p-2 rounded-md font-400 text-black' />
        </label>
        {/* Expense Amount */}
        <div className='flex flex-wrap mb-2 gap-2'>
          {/* Amount */}
          <div className='w-1/2 pr-2'>
            <label htmlFor="expensesAmount" className="block font-bold text-xl text-gray-700">
              Expenses Amount(Rs.):
              <input id="expensesAmount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Amount in(Rs.)' className='w-full p-2 rounded-md font-400 text-black' />
            </label>
          </div>
          {/* Upload Bill */}
          <div className='w-1/3 pl-2'>
            <label htmlFor='uploadBill' className="block font-bold text-xl text-gray-700">
              Upload Bill:
              <input id='uploadBill' type='file' onChange={handleFileChange} className='w-full p-2 rounded-md bg-white' />
            </label>
          </div>
        </div>
        {/* Expense Type */}
        <div className='flex flex-wrap mb-2 gap-2'>
          <div className='w-1/2 pr-2'>
            <label htmlFor="expenseType" className="block font-bold text-xl text-gray-700">
              Type of Expenses:
              <select id="expenseType" value={expenseType} onChange={(e) => setExpenseType(e.target.value)} className='w-full p-2 rounded-md bg-white'>
                <option value="" disabled hidden>Choose...</option>
                <option value="food">Food</option>
                <option value="travel">Travel</option>
              </select>
            </label>
          </div>
          {/* Date of Expenses */}
          <div className='w-1/3 pl-2'>
            <label htmlFor="dateOfExpenses" className="block font-bold text-xl text-gray-700">
              Date of Expenses:
              <input id="dateOfExpenses" type='date' value={date} onChange={(e) => setDate(e.target.value)} placeholder='Select Date' className='w-full p-2 rounded-md' />
            </label>
          </div>
        </div>
        {/* Description */}
        <div className='mb-2'>
          <label htmlFor="expenseDescription" className="block font-bold text-xl text-gray-700">
            Description:
            <textarea id="expenseDescription" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description..." className='w-full p-2 rounded-md font-200 text-black'></textarea>
          </label>
        </div>
        {/* Agree Terms */}
        <div className='mb-2 flex items-center'>
          <input type="checkbox" id="licenseAgree" className='mr-2 h-5 w-5' />
          <label htmlFor="licenseAgree" className="block font-bold text-gray-700 text-xl">
            I agree with the terms and conditions
          </label>
        </div>
        {/* Submit Button */}
        <div className='mb-2'>
          <button type="submit" className='bg-blue-500 text-white p-2 rounded-md font-bold text-xl'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddExpenses;
