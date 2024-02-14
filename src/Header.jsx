import React from 'react'
import HeadItems from './Components/HeadItems'

export default function Header() {
  return (
    <div className='h-16 flex items-center justify-between px-4 w-full border-b-4'>
    <div className='font-bold text-2xl'>ExP</div>
    <div className='flex items-end justify-around gap-4'>
    <HeadItems image="./src/assets/setting.png" />
    <HeadItems image="./src/assets/search.jpg" />
    <HeadItems image="./src/assets/bell.png" />
    <HeadItems image="./src/assets/profile.png" />
    </div>
    </div>
  )
}