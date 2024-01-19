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
import purplebox from '../assets/purplebox.svg';
import line1 from '../assets/line1.svg';
import line2 from '../assets/line2.svg';
import longline1 from '../assets/line1.svg';
import longline2 from '../assets/longline2.svg'












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




        <div className=' mt-10 flex primary-font justify-center items-center'>
        <p className='text-2xl'> More than a million articles generated using topicalflow, tested by the best companies</p>
        </div>
    
     {/* Next Section - Logo carousel */}
     <div className="flex justify-center items-center opacity-70 hover:opacity-100">
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
<div className=" flex justify-center items-center  bg-purple-100 mr-2 ml-2 ">
  {/* Left Column */}
  <div className=" flex flex-col items-center ml-2 mr-2">
    <div className="px-5">
      <h4 className="text-4xl font-bold  px-3 mb-3">About topicaflow</h4>
      <div className='w-full flex h-full'>
        <p className=" px-4 text-gray-400 text-2xl primary-font flex-wrap ">
          "TopicalFlow" is an AI-driven content generation tool aimed
          at helping users build topical authority. The web application
          enables users to create projects within a specific niche,
          for which the AI system will then suggest relevant topics.
        </p>
      </div>
      <div className='px-4'>
      <Link to="/signup">
            <button className=" bg-primary text-white px-7 py-4 mt-3 rounded-full hover:bg-3B2385 hover:text-white transition duration-300">
              Learn more
            </button>
          </Link>
      </div>
    </div>
    {/* Add more text or content as needed */}
  </div>

 {/* Right Column */}
<div className=" relative p-4 m px-40 mr-20">
  <div className='py-3'>
  <p className=' absolute mt-5 ml-10  px-14 text-primary'>topicaflow</p>
  </div>
  <div className="relative bg-gray-100 w-[340.35px] h-[360.58px] border-primary">

    {/* Notebook Page */}
    <div className=" top-0 left-0 right-0 bottom-0 overflow-hidden">
      <div className="bg-gray-100 h-full w-full">
        {/* Writing Lines */}
        <div className="h-full flex flex-col justify-between">
    
        </div>
      </div>

      <div className="bottom-0 left-0 text-white mt-2 p-2 ml-4">
      <div className='flex justify-center p-5 space-x-10 mt-3 items-center'>
        <div>
          <p className='justify-center text-primary primary-font'>topicalflow</p>
        <img src={purplebox} alt="box" className="w-24 h-auto opacity-70 hover:opacity-100" />
        </div>
        <div>
        <img src={line2} alt="product" className="w-full h-auto mb-4 opacity-70 hover:opacity-100" />
        <img src={line1} alt="product" className="w-24 h-auto opacity-70 hover:opacity-100" />
       
        </div>
        
         </div>

      </div>
   
       <div className=' relative mt-3 items-center justify-center px-5 w-full'>
        <img src={longline2} alt="product" className=" flex w-full mb-4 h-full opacity-70 hover:opacity-100" />
        <img src={longline1} alt="product" className=" flex  w-40 h-auto mb-4 opacity-70 hover:opacity-100" />
        <img src={longline2} alt="product" className=" flex w-full h-auto mb-4 opacity-70 hover:opacity-100" />
        <img src={longline1} alt="product" className=" flex  w-40 h-auto mb-4 opacity-70 hover:opacity-100" />
        <img src={longline1} alt="product" className=" flex  w-40 h-auto mb-4 opacity-70 hover:opacity-100" />
        </div>


        {/*edge of notebook */}
    
    </div>
        </div>
        <div className=" absolute w-[150px] h-[100px] top-2/3  right-1 left-1 ml-10 border-primary flex bg-white">
      <div className='flex justify-center p-5  items-center'>
        <div>
        <img src={line1} alt="product" className="w-24 h-auto opacity-70  mb-3 hover:opacity-100" />
        <img src={line1} alt="product" className="w-24 h-auto opacity-70 hover:opacity-100" />

       
        </div>
        </div>
      </div>


    </div>
  </div>
</div>



  );
};

export default Home;