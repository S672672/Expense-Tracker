import React from 'react'

export default function ShowAll({title,amount,share,ShowIcon}) {
  return (
    <div className='w-3/12 h-24 bg-white flex items-center justify-between rounded-md px-4 my-10 mx-5'>
    <div className='flex flex-col'>
    <div className='font-bold text-gray-400 text-xl'>{title}</div>
    <div className='flex gap-2'>
        <div className='font-bold text-black text-2xl'>{amount}</div>
        <div className='bg-green-200 text-bold text-black'>{share}</div>
    </div>
    </div>
    <img src={ShowIcon} alt='show'></img>
    </div>
  )
}