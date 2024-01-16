import React from 'react';
import Navbar from '../shared/navbar';
import vector from '../assets/Vector.svg';
import sketch from '../assets/sketch.svg';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex justify-center items-center mt-20 flex-wrap">
        <div className="text-center w-full p-1">
          <div className='border-primary p-4'>
            <div className='border-primary'>
            <p className="text-sm inline-block px-8 text-primary">
              EFFORTLESSLY WRITE ARTICLE WITH OUR AI SOLUTION
            </p>
            </div>
          
          </div>
          <div className='relative primary-font'>
          <h1 className="text-7xl font-bold text-droid-serif mb-6 relative">
            Transform your <span className='text-primary'>writing</span>
          </h1>
           <span className='inline-block flex absolute  sm:right-1/4'>
              <img src={sketch} alt="Sketch" className="w-full h-full" />
              </span>

          <h1 className="text-7xl font-bold mb-6 relative">
            <span className='px-5 mx-2'>with</span>
            <span className='text-primary relative'>   Topicalflow</span>
            <span className='inline-block absolute top-1/2 left-1/3 transform -translate-x-2/4 -translate-y-1/2'>
              <img src={vector} alt="Vector" className="w-full h-full" />
            </span>
          </h1>

          </div>
  
          <h6 className="secondary-font flex-wrap">
            Our AI-driven tool analyzes your input and provides real-time suggestions, turning your thoughts into eloquent prose
          </h6>
        </div>
      </div>

    {/* Next Section - Call to Action */}
<div className="flex justify-center items-center mt-8">
        <div className="relative bg-white text-black rounded-full px-8 py-2 border-t-4 border-black shadow-lg"
          style={{ width: '644px', height: '79px', top: '5px' }}
        >
          <input
            className="absolute top-1/2 left-4 transform -translate-y-1/2 w-full text-secondary px-3 py-3 border-none focus:outline-none"
            type="email"
            placeholder="Enter your email or phone number"
          />
          <Link to="/signup">
            <button className="absolute top-1/2 right-4 transform -translate-y-1/2 px-4 py-2 bg-primary text-white rounded-full">Get Started</button>
          </Link>
        </div>
      </div>

      {/* Next Section - 3 Columns */}
      <div className="flex justify-center items-center mt-10 primary-font">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center">
          {/* Column 1 */}
          <div className="text-black rounded-md p-6">
            <h2 className="text-4xl font-bold mb-1">300k+</h2>
            <p className="text-lg secondary-font text-primary">Registered Users</p>
          </div>

          {/* Column 2 */}
          <div className="bg-white rounded-md p-6 primary-font">
            <h2 className="text-4xl font-bold mb-1">1.8 million</h2>
            <p className="text-lg secondary-font">Articles generated</p>
          </div>

          {/* Column 3 */}
          <div className="bg-white p-6 primary-font">
            <h2 className="text-4xl font-bold mb-1">500</h2>
            <p className="text-lg secondary-font">topics on Topicalflow</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;