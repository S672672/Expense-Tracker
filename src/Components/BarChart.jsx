import * as React from 'react';
import { BarChart as MuiBarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
  xAxis: [
    {
      label: 'Months',
    },
  ],
  width: 500,
  height: 400,
};

const expensesDataset = [
  {
    category: 'Housing',
    January: 1200,
    February: 1100,
    March: 1300,
    April: 1000,
    May: 1050,
    June: 1200,
    July: 1300,
    August: 1150,
    September: 1100,
    October: 1000,
    November: 1200,
    December: 1250,
  },
  {
    category: 'Utilities',
    // ... similarly add expense values for each month
  },
  // ... add more categories as needed
];

const valueFormatter = (value) => `$${value}`;

export default function ExpenseTrackerChart() {
  return (
    <MuiBarChart
      dataset={expensesDataset}
      yAxis={[{ scaleType: 'band', dataKey: 'category' }]}
      series={[{ dataKey: 'January', label: 'January', valueFormatter },
               { dataKey: 'February', label: 'February', valueFormatter },
               // ... add more series for each month
      ]}
      layout="horizontal"
    />
  );
}
