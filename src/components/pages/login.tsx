import React from 'react';
import logowhite from '../assets/Logowhite.svg';
import googleicon from '../assets/google.png';
import { Link } from 'react-router-dom';
import Testimonials from '../shared/testimonials'; // Adjust the path as needed

const Login: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Left side - Login Form with Testimonials */}
      <div className="flex-1 bg-primary">
        <div className='flex mt-2 px-6 py-6 items-center'>
          <img src={logowhite} alt="" className='px-2' />
          <h1 className='text-white primary-font'>Topicalflow</h1>
        </div>
        <div className='w-full justify-center items-center mt-40'>
        <Testimonials />
        </div>
      </div>

      {/* Right side - Logo and Title */}
      <div className="flex-1 bg-white text-black flex flex-col justify-center items-center">
        <div>
          <h1 className='text-2xl primary-font bg-parimary text-primary'>Welcome</h1>
          <h6> Welcome back! Please enter your details.</h6>
    
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <input type="email" className="mt-1 p-2 w-[360px] border rounded-md" />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-600">Password</label>
                <input type="password" className="mt-1 p-2 w-[360px] border rounded-md" />
              </div>


                <div className='flex justify-between justify-center items-center'>
                <div className="mt-2  text-sm flex items-center">
                <input type="checkbox" id="rememberCheckbox" className="mr-2" />
                <label htmlFor="rememberCheckbox" className="text-sm text-gray-600">
                  Remember for 30 days
                </label>
              </div>

              {/* Link for "Forgot your password" */}
              <div className="mt-2 text-sm  text-primary text-gray-600">
                <Link to="/forgot-password">Forgot your password?</Link>
              </div>
                </div>


              <div className="mt-6">
                <button className="bg-primary text-white p-2 rounded-md w-full mb-2">Create account</button>
                <div>
                <button className="text-black flex p-2 border justfy-center items-center rounded-md w-full">
                  <img src={googleicon} alt="googleicon" className='px-10 items-center' />
                  Sign Up with Google</button>
                </div>
                <div className="mt-4 text-sm text-gray-600">
              <span>Don't have an account? </span>
              <Link to="/signup" className="text-primary">Sign up</Link>
            </div>
              </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
