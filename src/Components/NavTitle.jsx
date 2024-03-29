import React from 'react'

export default function NavTitle({NavTitle}) {
  return (
    <div className='h-20 border-b-2 border-gray-300 flex items-center mx-5'>
    <div className='text-bold text-black text-3xl ml-8 font-bold'>{NavTitle}</div>
    </div>
  )
}