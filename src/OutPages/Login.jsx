import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberDevice: false,
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
    };

    return (
        <div className="flex justify-center items-center gap-20 h-screen bg-gray-100">
        <div className='flex flex-col items-center justify-center'>
        <NavLink to = "/" activeClassName="active">
      <div className='h-24 w-24 p-2 mb-5 bg-sky-600 flex items-center justify-center rounded-full'>
        <h1 className='font-black text-5xl text-white'>ExP</h1>
      </div>
      </NavLink>
      <div className='text-5xl font-black mx-10'>Invest with control</div>
      </div>
            <div className="bg-white p-8 rounded shadow-md shadow-lg w-1/4">
                <h2 className="text-2xl font-semibold mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                            required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                            required />
                    </div>
                    <div className='flex items-center justify-between'>
                    <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            id="remember-device"
                            name="rememberDevice"
                            checked={formData.rememberDevice}
                            onChange={handleChange}
                            className="mr-2" />
                        <label htmlFor="remember-device">Remember device</label>
                    </div>
                    <div className='underline text-blue-400 font-bold text-lg cursor-pointer'>Forgot password?</div>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Login
                    </button>
                    <div className='flex flex-start gap-3'>
                        <div>Not registered yet?</div>
                        <NavLink to = '/signup' activeClassName='active'>
                        <div className='underline text-blue-400 font-bold'>Create Account</div>
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
