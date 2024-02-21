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
      case '/dashboard':
        return 'Dashboard';
      case '/exp':
        return 'Add Expense';
      case '/wallet':
        return 'Wallet';
      case '/profile':
        return 'Profile';
      case '/setting':
        return 'Setting';
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
