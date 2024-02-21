import React from 'react';
import { NavLink } from 'react-router-dom';

function LandingNav() {
  return (
    <div className='w-full h-20 bg-black flex items-center justify-between'>
      <div className='text-2xl font-black text-white'>
        Expense Tracker
      </div>
      <div className='flex items-center justify-around gap-5 mx-10'>
        <button className='bg-black rounded-md text-white text-bold text-lg border-solid border-gray-400 shadow-lg shadow-cyan-500/100'>
          SignUp
        </button>
        <NavLink to="/app" activeClassName="active">
          <button className='bg-purple-400 rounded-md text-white text-bold text-lg border-solid border-gray-400 shadow-lg'>
            Login
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default LandingNav;
