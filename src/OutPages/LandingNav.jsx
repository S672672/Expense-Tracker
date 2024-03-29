import React from 'react';
import { NavLink } from 'react-router-dom';

function LandingNav() {
  return (
    <div className='w-full h-20 bg-black flex items-center justify-around'>
      <div className='text-3xl font-black text-white font-mono'>
        Expense Tracker
      </div>
      <div className='flex items-center justify-around gap-5 mx-10'>
      <NavLink to="signup" activeClassName="active">
        <button className='bg-black rounded-md text-white font-bold text-xl border-solid border-gray-400 shadow-lg shadow-cyan-500/100 p-2 px-3'>
          Signup
        </button>
        </NavLink>
        <NavLink to="/login" activeClassName="active">
          <button className='bg-purple-400 rounded-md text-white font-bold text-xl border-solid border-gray-400 flex items-center justify-center p-2 px-3'>
            Login
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default LandingNav;
