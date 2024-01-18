import React from 'react';
import Navbar from '../shared/navbar';
import vector from '../assets/Vector.svg';
import sketch from '../assets/sketch.svg';
import { Link } from 'react-router-dom';
import Novartis from '../assets/Novartis.svg';
import Figma from '../assets/Figma svg.svg';
import Pfizer from '../assets/Pfizer svg.svg';
import webflow from '../assets/Webflow svg.svg';
import verizon from '../assets/Verizon svg.svg';
import hashicorp from '../assets/HashiCorp svg.svg';
import product from '../assets/product.svg';







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

      {/* Next Section - Columns */}
      <div className="flex justify-center items-center mt-10 primary-font">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center">
          {/* Column 1 */}
          <div className="text-black rounded-md p-6">
            <h2 className="text-4xl font-bold mb-1">300k+</h2>
            <p className="text-lg  text-gray-800 secondary-font text-opacity-75">Registered Users</p>
          </div>

          {/* Column 2 */}
          <div className="bg-white rounded-md p-6 primary-font">
            <h2 className="text-4xl font-bold mb-1">1.8 million</h2>
            <p className="text-lg  text-gray-800 secondary-font text-opacity-75">Articles generated</p>
          </div>

          {/* Column 3 */}
          <div className="bg-white p-6 primary-font">
            <h2 className="text-4xl font-bold mb-1">500</h2>
            <p className="text-lg  text-gray-800 secondary-font text-opacity-75">topics on topicalflow</p>
          </div>
        </div>
        </div>

    
     {/* Next Section - Logo carousel */}
     <div className="flex justify-center items-center mt-10 opacity-70 hover:opacity-100">
        <div className="flex space-x-10">
          <img src={Figma} alt="Figma" className="w-24 h-24 opacity-70 hover:opacity-100" />
          <img src={Novartis} alt="Novartis" className="w-24 h-auto " />
          <img src={verizon} alt="verizon" className="w-24 h-auto opacity-70 hover:opacity-100" />
          <img src={webflow} alt="webflow" className="w-24 h-auto opacity-70 hover:opacity-100" />
          <img src={Pfizer} alt="pfizer" className="w-24 h-auto opacity-70 hover:opacity-100" />
          <img src={hashicorp} alt="hashicorp" className="w-24 h-auto opacity-70 hover:opacity-100" />
          <img src={product} alt="product" className="w-24 h-auto opacity-70 hover:opacity-100" />
        </div>
      </div>

{/* Two Columns Section */}
    {/* Two Columns Section */}
<div className="flex justify-center items-center mt-10 bg-gray-100">
  {/* Left Column */}
  <div className="flex flex-col items-start  ml-4 px-6">
    <div className=" py-4 px-4 mt-4">
      <h4 className="text-4xl font-bold  px-1 mb-3">About topicaflow</h4>
      <div className='w-full flex h-full'>
        <p className="text-gray-700 text-2xl primary-font flex-wrap ">
          "TopicalFlow" is an AI-driven content generation tool aimed
          at helping users build topical authority. The web application
          enables users to create projects within a specific niche,
          for which the AI system will then suggest relevant topics.
        </p>
      </div>
    </div>
    {/* Add more text or content as needed */}
  </div>

 {/* Right Column */}
<div className="p-4 rounded-md px-40">
  <div className="relative w-[391.35px] h-[429.58px] border-primary border-4">
    {/* Notebook Page */}
    <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
      <div className="bg-white h-full w-full p-4">
        {/* Writing Lines */}
        <div className="h-full flex flex-col justify-between">
    
        </div>
      </div>
    </div>

    {/* Rectangle Box at the Left Bottom Edge */}
    <div className="absolute bottom-0 left-0 bg-blue-500 text-white p-2">
      {/* Your content goes here */}
      <p>This is the box</p>
    </div>
  </div>
</div>

  </div>
</div>

  );
};

export default Home;