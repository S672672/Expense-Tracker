import React from 'react'
import Header from './Header'
import DashBoard from './DashBoard'

function ViewPage() {
  return (
    <div className='flex flex-col w-screen bg-gray-200'>
    <Header />
    <DashBoard />
    </div>
  )
}

export default ViewPage