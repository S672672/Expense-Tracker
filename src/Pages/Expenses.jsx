import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Expenses() {
  // State to store the expenses
  const [expenses, setExpenses] = useState([]);

  // Function to fetch expenses from the backend
  const fetchExpenses = async () => {
    try {
      const response = await axios.get('http://localhost:3000/expenses/get-expenses'); // Update the URL to match your backend endpoint
      setExpenses(response.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  // Fetch expenses when the component mounts
  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className='flex flex-col items-start justify-start m-5 p-3'>
      <div className='font-black text-3xl '>Your Expenses</div>
      <div className='mr-5 my-3 bg-black h-12 w-full py-2'>
        <ul className='flex items-center justify-around text-white text-xl font-bold'>
          <li>Expenses</li>
          <li>Amount</li>
          <li>Description</li>
          <li>Date</li>
          <li>Action</li>
        </ul>
      </div>
      {/* Render expenses */}
      {expenses.map(expense => (
        <div key={expense._id} className="mr-5 my-3 bg-gray-200 h-12 w-full py-2">
          <ul className='flex items-center justify-around text-black text-xl font-semibold'>
            <li>{expense.expense}</li>
            <li>{expense.amount}</li>
            <li>{expense.description}</li>
            <li>{new Date(expense.date).toLocaleDateString()}</li>
            <li> {/* Add action buttons here */} </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Expenses;
