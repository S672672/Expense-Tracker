import React from 'react';

export default function ShowAll({ title, amount, share, ShowIcon }) {
  return (
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-3/12 xl:w-3/12 h-24 bg-white flex items-center justify-between rounded-md px-4 my-2 mx-2 md:mx-4 lg:mx-6 xl:mx-8 flex-wrap shadow-md hover:bg-gray-100 cursor-pointer'>
      <div className='flex flex-col'>
        <div className='font-bold text-gray-400 text-lg md:text-xl'>{title}</div>
        <div className='flex gap-2'>
          <div className='font-bold text-black text-xl md:text-2xl'>{amount}</div>
          <div className='bg-green-200 text-bold text-black'>{share}</div>
        </div>
      </div>
      <img className='w-8 h-8 md:w-10 md:h-10' src={ShowIcon} alt='show' />
    </div>
  );
}
