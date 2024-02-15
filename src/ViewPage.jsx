import React from 'react'
import Header from './Header'
import DashBoard from './DashBoard'

function ViewPage() {
  return (
    <div className='flex flex-col w-screen'>
    <Header />
    <DashBoard />
    </div>
  )
}

export default ViewPage