import React from 'react';
import ShowAll from '../Components/ShowAll';
import BarChart from '../Components/BarChart';
import NavTitle from '../Components/NavTitle';
import PieChart from '../Components/PieChart';
import LineChart from '../Components/LineChart';
import ApexChart from '../Components/ApexChart';

export default function DashBoard() {
  return (
    <div className='flex flex-col m-3'>
      <div className='flex m-2'>
        <ShowAll title="Total" amount="$30,300" share="+2.4%" ShowIcon="💲" />
        <ShowAll title="Weekly++" amount="$3,300" share="+2.6%" ShowIcon="👥" />
        <ShowAll title="Other" amount="$29,300" share="+26.4%" ShowIcon="📈" />
        <ShowAll title="Monthly" amount="$22,300" share="+62.4%" ShowIcon="🗂" />
      </div>
      <div className='flex flex-col gap-2 m-8 p-3'>
        <div className="flex items-stretch gap-4">
          <div className="flex-1 bg-white rounded-md dark:bg-darker" x-data="{ isOn: false }">
            <div className="flex items-center justify-between p-4 border-b dark:border-primary">
              <h4 className="text-lg font-semibold text-gray-500 dark:text-light">Monthly Expense </h4>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500 dark:text-light">Last year</span>
              </div>
            </div>
            <div className="relative">
              <LineChart />
            </div>
          </div>

          <div className="flex-1 bg-white rounded-md dark:bg-darker" x-data="{ isOn: false }">
            <div className="flex items-center justify-between p-4 border-b dark:border-primary">
              <h4 className="text-lg font-semibold text-gray-500 dark:text-light">Weekly Expense</h4>
            </div>
            <div className="relative flex flex-col-on-small justify-around lg:pl-11 sm:flex-row pt-10">
              <PieChart />
            </div>
          </div>
        </div>

        <ApexChart />
      </div>
    </div>
  );
}
