// Signup.tsx
import React from 'react';
import logo from '../assets/logo.svg';
import googleicon from '../assets/google.png'
import { Link } from 'react-router-dom';
import handdrawn from '../assets/handdrawn.svg'
import staricon from '../assets/staricon.svg'


const Signup: React.FC = () => {
  return (
    <div className=" relative flex h-screen">
      <img src={handdrawn} alt="handraw" className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 ' />
      {/* Left side - Signup Form */}
      <div className="flex-1">
        <div className="flex items-center px-40 mt-12">
          <div className='text-primary primary-font'>
            <div className='flex mt-10'>
            <img src={logo} alt="logo" className="mb-2 px-3" />
            <h1 className="text-gray-800 text-2xl primary-font">Topicalflow</h1>
            </div>
          
            <div className='mt-10'>
              <div>
              <h1 className="text-2xl mb-2">Sign up</h1>
              <h5>Start your 30-day free trial.</h5>
              </div>
             
              {/* Signup Form Inputs */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-600">Name</label>
                <input type="text" className="mt-1 p-2 w-[360px] border rounded-md" />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <input type="email" className="mt-1 p-2 w-[360px] border rounded-md" />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-600">Password</label>
                <input type="password" className="mt-1 p-2 w-[360px] border rounded-md" />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-600">How did you hear about us?</label>
                <select className="mt-1 p-2 w-[360px] border rounded-md">
                  <option value="word-of-mouth">Word of Mouth</option>
                  <option value="social-media">Social Media</option>
                  <option value="search-engine">Search Engine</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              {/* Signup and Google SSO buttons */}
              <div className="mt-6">
                <button className="bg-primary text-white p-2 rounded-md w-full mb-2">Create account</button>
                <div>
                <button className="text-black flex p-2 border justfy-center items-center rounded-md w-full">
                  <img src={googleicon} alt="googleicon" className='px-10 items-center' />
                  Sign Up with Google</button>
                </div>
                <div className="mt-4 text-sm text-gray-600">
              <span>Already have an account? </span>
              <Link to="/login" className="text-primary">Login</Link>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Logo and Title */}
      <div className="flex-1 bg-[#101828] text-white flex  flex-col justify-start justify-center  items-center">
        <img src={staricon} alt="star" className="mb-4 mr-24 " />
        <div className='justify-start px-20'>
     <h1 className="text-4xl">Start turning your <span className='block'>
       ideas into reality.</span> </h1>
       <h6>Create a free account and get full access to all <span className='block'>
       features for 30-days. No credit card needed.
        </span>Get started in 2 minutes.</h6>
        </div>

        <div>
          
        </div>
   
      </div>
    </div>
  );
};

export default Signup;
