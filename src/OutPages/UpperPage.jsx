import React from 'react'
import { Link } from 'react-router-dom'

function UpperPage() {
  return (
    <div className='h-2/3 w-full flex justify-center items-center p-20 bg-slate-800 gap-10'>
    <div className='flex flex-col items-center gap-5'>
    <h1 className='text-3xl text-white font-mono'>Effortlessy manage and track your expenses with our powerfull expense tracker.Get insights,save money and achieve financial freedom.</h1>
    
    <Link to = '' activeClassName="active">
    <button className='bg-emerald-400 rounded-lg cursor-pointer text-2xl font-bold text-white p-2'>Get started</button>
    </Link>
    </div>
    <img src='./src/assets/imgflandingpage.png' className='rounded-md h-2/3/2 w-2/3' />
    </div>
  )
}

export default UpperPage