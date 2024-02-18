// DonutChart.js

import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const BarChart = () => {
  const data = {
    labels: ['Food', 'Utilities', 'Rent', 'Entertainment', 'Others'],
    datasets: [
      {
        data: [300, 150, 500, 200, 250],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9C27B0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9C27B0'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div>
      <h2>Expense Types</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default BarChart;
