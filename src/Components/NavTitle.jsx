import React from 'react'

export default function NavTitle({NavTitle}) {
  return (
    <div className='h-20 border-b-4 border-black flex items-center bg-white'>
    <div className='text-bold text-black text-3xl ml-8'>{NavTitle}</div>
    </div>
  )
}