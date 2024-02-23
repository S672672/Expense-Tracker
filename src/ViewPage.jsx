import React from 'react';
import Header from './Header';
import NavTitle from './Components/NavTitle';
import DashBoard from './Pages/DashBoard'
import AddExpenses from './Pages/AddExpenses';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function ViewPage() {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/app/dashboard':
        return 'Dashboard';
      case '/app/exp':
        return 'Add Expense';
      case '/app/wallet':
        return 'Wallet';
      case '/app/profile':
        return 'Profile';
      case '/app/setting':
        return 'Setting';
      case '/app/logout':
        return 'logout';
      default:
        return 'Dashboard';
    }
  };
  return (
    <div className="flex flex-col w-screen bg-gray-100">
      <Header />
      <NavTitle NavTitle={getPageTitle()} />
      <Outlet/>
    </div>
    
  );
}

export default ViewPage;
