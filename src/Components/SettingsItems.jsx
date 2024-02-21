import React from 'react'

export default function SettingsItems({name,isActive}) {
  return (
    <div
      className={`hover:bg-gray-200 flex flex-col md:flex-row items-center justify-between w-11/12 h-10 px-2 mx-5 cursor-pointer rounded-md ${
        isActive ? 'bg-gray-200' : ''
      }`}
    >
    <div className='font-bold text-xl'>{name}</div>
    </div>
  )
}