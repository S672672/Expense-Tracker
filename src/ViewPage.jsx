import React from 'react'
import DashBoard from './DashBoard'
import Header from './Header'

export default function ViewPage() {
  return (
    <div className='flex flex-col'>
    <Header />
    <DashBoard />
    </div>
  )
}