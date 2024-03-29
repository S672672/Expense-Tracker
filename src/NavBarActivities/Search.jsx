import React from 'react'

export default function Search() {
  return (
    <div className='fixed top-16 right-4 z-50 w-1/5 max-h-[95vh] shadow-3xl shadow-gray-400 bg-white p-2 mb-8 my-1 mr-3'>
      <div className='h-24 w-full flex items-center justify-between'>
        <input className='text-lg font-bold font-mono mx-3 p-3 rounded-lg bg-gray-100 border-5 w-full' placeholder='search'/>
        <div className='flex items-center justify-between gap-3'>
        </div>
      </div>
      <hr />
      <div className='flex flex-col w-full mt-2'>
      </div>
    </div>
  )
}