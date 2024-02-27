import React from 'react'

function ConnectCard({name}) {
  return (
    <div className='flex items-start my-4 gap-2 cursor-pointer bg-gray-50 ml-2 hover:bg-blue-50'>
    <div className='h-12 w-12 rounded-full bg-green-500 text-white p-1 font-black text-3xl flex justify-center items-center'>e</div>
    <div className='font-bold text-black text-xl'>{name}</div>
    </div>
  )
}

export default ConnectCard;