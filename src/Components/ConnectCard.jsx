import React from 'react'

function ConnectCard({name}) {
  return (
    <div className='flex items-start my-4 gap-2 cursor-pointer bg-gray-50 ml-2 hover:bg-blue-50'>
    <div className='h-10 w-10 rounded-full bg-yellow-400'></div>
    <div className='font-bold text-black text-xl'>{name}</div>
    </div>
  )
}

export default ConnectCard;