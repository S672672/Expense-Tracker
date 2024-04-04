import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const LogoutConfirmation = ({ onClose }) => {
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:3001/logout', null, {
        withCredentials: true // Send cookies
      });

      if (response.status === 200) {
        // Logout successful
        navigate('/login'); // Redirect to login page
      } else {
        console.error('Logout failed');
        // Handle logout failure
      }
    } catch (error) {
      console.error('Error during logout:', error);
      // Handle error
    }
  };

  return (
    <>
      <div className="overlay fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"></div>
      <div className="confirmation-box fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 shadow-md z-50 rounded-lg">
        <div className="confirmation-content text-center">
          <span className="close absolute top-0 right-1 text-7xl text-gray-600 cursor-pointer" onClick={onClose}>&times;</span>
          <p className="mb-5 text-3xl font-bold m-5">Are you sure,<br />you want to logout?</p>
          <NavLink to="" activeClassName="active">
            <button className="btn-yes bg-blue-500 hover:bg-blue-700 text-white font-black text-lg py-2 px-4 rounded mx-2" onClick={handleLogout}>Yes</button>
          </NavLink>
          <button className="btn-no bg-gray-500 hover:bg-gray-700 text-white font-black text-lg py-2 px-4 rounded mx-2" onClick={onClose}>No</button>
        </div>
      </div>
    </>
  );
};

export default LogoutConfirmation;
