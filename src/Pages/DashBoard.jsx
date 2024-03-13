import React from 'react'
import ShowAll from '../Components/ShowAll'
import BarChart from '../Components/BarChart'
import NavTitle from '../Components/NavTitle'

export default function DashBoard() {
  return (
    <div className='flex flex-col m-3'>
    <div className='flex m-2'>
    <ShowAll title = "Total" amount="$30,300" share="+2.4%" ShowIcon="💲" />
    <ShowAll title = "Weekly++" amount="$3,300" share="+2.6%" ShowIcon="👥" />
    <ShowAll title = "Other" amount="$29,300" share="+26.4%" ShowIcon="📈" />
    <ShowAll title = "Monthly" amount="$22,300" share="+62.4%" ShowIcon="🗂" />
    </div>
    <BarChart />
    </div>
  )
}