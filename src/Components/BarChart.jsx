import * as React from 'react';
import { BarChart as MuiBarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
  xAxis: [
    {
      label: 'Months',
    },
  ],
  width: 50,
  height: 40,
};

const expensesDataset = [
  {
    category: 'Housing',
    January: 12,
    February: 11,
    March: 13,
    April: 10,
    May: 10,
    June: 12,
    July: 13,
    August: 11,
    September: 11,
    October: 10,
    November: 12,
    December: 10,
  },
  {
    category: 'Utilities',
  },
];

const valueFormatter = (value) => `$${value}`;

const chartOptions = {
  animation: false, // Disable animations
};

export default function BarChart() {
  return (
    <div className="bg-white p-4 rounded-md my-10 mx-8 h-96 w-96">
      <MuiBarChart
        dataset={expensesDataset}
        yAxis={[{ scaleType: 'band', dataKey: 'category' }]}
        series={[
          { dataKey: 'January', label: 'January', valueFormatter },
          // ... add more series for each month
        ]}
        layout="vertical"
        options={chartOptions} // Pass the chart options
        className="bg-white" // Set background color to white
      />
    </div>
  );
}
