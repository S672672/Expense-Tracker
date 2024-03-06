import React from 'react'

function Expenses() {
  return (
    <div className='flex flex-col items-start justify-start m-5 p-3'>
    <div className='font-black text-3xl '>Your Expenses</div>
    <div className='mr-5 my-3 bg-black h-12 w-full py-2'>
    <ul className='flex items-center justify-around text-white text-xl font-bold'>
        <li>Expenses</li>
        <li>Amount</li>
        <li>description</li>
        <li>Date</li>
        <li>action</li>
        </ul>
    </div>
    </div>
  )
}

export default Expenses