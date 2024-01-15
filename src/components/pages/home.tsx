import React from 'react';
import Navbar from '../shared/navbar';
import vector from '../assets/Vector.svg'

const Home: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <div className="flex justify-center items-center mt-20 flex-wrap ">
        <div className="text-center w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-1">
          <div className='border-primary'>
          <p className="text-sm inline-block px-8  text-primary">
            EFFORTLESSLY WRITE ARTICLE WITH OUR AI SOLUTION
          </p>
          </div>
        
          <h1 className="text-6xl font-bold text-droid-serif mb-6">
            Transform your <span className='text-primary'>writing</span>
          </h1>
          <h1 className="text-6xl font-bold  mb-6">
          <span>with</span> 
          <span className='text-primary relative'>Topicalflow</span>
          <span className=' inline-block'>
          <img src={vector} alt="Vector" className="w-15 h-" />
          </span>
          </h1>
          <h6 className="text-base sm:w-1/2 md:w-full ">
            Our AI-driven tool analyzes your input and provides real-time
            suggestions, turning your thoughts into eloquent prose
          </h6>
          {/* Additional content or styling for the hero section */}
        </div>
      </div>

      {/* Other sections of your webpage */}
    </div>
  );
};

export default Home;
