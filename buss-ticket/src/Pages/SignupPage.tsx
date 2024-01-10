// src/components/SignupPage.tsx

import React, { useState } from 'react';
import AuthService from '../service/AuthService';
import { Link, useNavigate } from 'react-router-dom';

const SignupPage: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const register = () => {
    const user = { firstName, lastName, email, password };
    const registrationSuccessful = AuthService.register(user);

    if (registrationSuccessful) {
      navigate('/login');

    } else {
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className=" h-screen flex items-center justify-center" style={{backgroundColor:"#D23B38"}}>
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Signup</h2>

        <form>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              E-Mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <button type="button" onClick={register} className="bg-blue-500 text-white px-4 py-2 rounded">
            Register
          </button>
          <div className=' text-red-800 mt-2 flex  text-center justify-center'>
            <Link to={'/login'} >Zaten Kayıtlı mısın?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
