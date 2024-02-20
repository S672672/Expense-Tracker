import React from 'react';
import Header from './Header';
import NavTitle from './Components/NavTitle';
import DashBoard from './Pages/DashBoard'
import AddExpenses from './Pages/AddExpenses';

function ViewPage() {
  return (
    
    <div className="flex flex-col w-screen bg-gray-100">
      <Header />
      <NavTitle NavTitle="DashBoard" />
      <DashBoard />
    </div>
    
  );
}

export default ViewPage;
