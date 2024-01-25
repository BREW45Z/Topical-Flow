// Login.tsx
import React from 'react';
import logo from '../assets/logo.svg'


const Login: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Left side - Login Form */}
      <div className="flex-1 bg-gray-200">
        <div className="flex justify-center items-center h-full">
          <div className='flex'>
            <img src={logo} alt="" />
            <h1>Topicalflow</h1>
          </div>
          <div>
            <h1>Sign up</h1>
          </div>
         
        </div>
      </div>

      {/* Right side - Logo and Title */}
      <div className="flex-1 bg-[#101828] text-white flex flex-col justify-center items-center">
        <img src="your-logo.png" alt="Logo" className="mb-4" />
        <h1 className="text-3xl font-bold">Your App Title</h1>
      </div>
    </div>
  );
};

export default Login;
