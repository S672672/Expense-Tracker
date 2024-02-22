import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="flex justify-between items-center">
      <div className="p-8 rounded m-10 ml-32">
      <div className='flex'>
      <NavLink to = "/" activeClassName="active">
      <div className='h-24 w-24 p-2 mb-5 bg-sky-600 flex items-center justify-center rounded-full'>
        <h1 className='font-black text-5xl text-white'>ExP</h1>
      </div>
      </NavLink>
      </div>
        <h2 className="text-4xl font-bold mb-6 font-mono">Welcome to expense tracker</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex">
            <div className="w-1/2 mr-2">
              <label htmlFor="first-name" className="text-left block text-gray-600 font-bold text-lg">
                First Name:
              </label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-gray-100"
                required
              />
            </div>
            <div className="w-1/2 ml-2">
              <label htmlFor="last-name" className="text-left block text-gray-600 font-bold text-lg">
                Last Name:
              </label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-gray-100"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-left block text-gray-600 font-bold text-lg">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-100"
              required
            />
          </div>
          <div className="mb-4 flex">
            <div className="w-1/2 mr-2">
              <label htmlFor="password" className="text-left block text-gray-600 font-bold text-lg">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-gray-100"
                required
              />
            </div>
            <div className="w-1/2 ml-2">
              <label htmlFor="confirm-password" className="text-left block text-gray-600 font-bold text-lg">
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-gray-100"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <input
              type="checkbox"
              id="terms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <label htmlFor="terms" className="text-left text-lg font-semibold text-gray-600">
              I want to recieve email about events,product updates and company announcement
            </label>
          </div>
          <div className='text-lg font-bold text-gray-500'>By creating an account,you agree to our terms and conditions,and privacy policy</div>
          <div className='flex flex-start items-center gap-3 my-3'>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Sign Up
          </button>
          <div className='font-bold text-gray-600 text-lg'>Already have an account?</div>
          <NavLink to = "/login" activeClassName="active">
          <div className='underline cursor-pointer font-bold text-blue-400 hover:text-black texxt-lg'>Login</div>
          </NavLink>
          </div>
        </form>
      </div>
      <img src='./src/assets/signupphoto.png' alt='' className='h-screen'></img>
    </div>
  );
};

export default SignupPage;
