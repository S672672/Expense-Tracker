import React, { useState } from 'react';

function SignUp() {
  // State for form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSignUp = (e) => {
    e.preventDefault();
    // Add your signup logic here, such as making an API request
    console.log('Signup submitted:', { username, email, password });
    // Reset form fields after submission if needed
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <label className="block mb-2">
          <span className="text-gray-700">Username:</span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input mt-1 block w-full"
            required
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Email:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input mt-1 block w-full"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Password:</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input mt-1 block w-full"
            required
          />
        </label>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
