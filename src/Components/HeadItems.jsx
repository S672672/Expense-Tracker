import React from 'react'

export default function HeadItems({image}) {
  return (
    <div className='cursor-pointer'>
        <img src={image} className='h-8 w-fit rounded-full'></img>
    </div>
  )
}