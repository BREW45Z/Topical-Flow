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
import dashbimg from '../assets/dasboardimg.png'
import AIicon1 from '../assets/aiicons1.svg';
import AIicon2 from '../assets/aiicons2.svg';
import AIicon3 from '../assets/aiicons3.svg';
import AIicon4 from '../assets/aiicons4.svg';
import infoperson2 from '../assets/infoperson2.svg';
import Pricing from '../ui/pricing';
import Carousel from '../ui/home-carousel';
import Footer from '../ui/footer';






  const Home: React.FC = () => {

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex justify-center items-center mt-20 flex-wrap">
        <div className="text-center w-full p-1">
          <div className='border-primary'>
            <div className='border-primary'>
              <div>
              <p className="text-sm bg-violet-200 rounded-md py-1 inline-block px-8 text-primary">
              EFFORTLESSLY WRITE ARTICLE WITH OUR AI SOLUTION </p>
              </div>  
            </div>
          </div>

          <div className='relative primary-font '>
            <div>
          
          <img src={sketch} alt="Sketch" className="w-full h-1/2 absolute left-1/4 ml-20 mb-8 bottom-20" />
          <h1 className="text-7xl font-bold primary-font mb-6 relative">
          Create niched content<span className='text-primary'></span>
          </h1>
           <span className='inline-block flex absolute  sm:right-1/4'>
              </span>

          <h1 className="text-7xl font-bold mb-6 relative">
            <span className='px-5 mx-2'>with</span>
            <span className='text-primary relative'>Topicalflow</span>

            <span className='inline-block absolute top-1/2 left-1/3 transform -translate-x-2/4 -translate-y-1/2'>
              <div>
              <img src={vector} alt="Vector" className="w-22 ml-12 h-full md:w-22 ml-22" />
              </div>
            </span>
          </h1>
          </div>

          </div>
  
          <h6 className="secondary-font flex-wrap text-gray-500">
            Our AI-driven tool analyzes your input and provides real-time suggestions, turning your thoughts into eloquent prose
          </h6>
        </div>
      </div>

      {/* Next Section - Call to Action */}
      <div className="flex justify-center items-center mt-8">
        <div className="relative text-black rounded-full px-8 py-2 border-2  shadow-lg"
          style={{ width: '644px', height: '79px', top: '5px' }}
        >
          <input
            className="absolute top-1/2 left-4  -translate-y-1/2 w-full outline-none primary-font px-3 py-3"
            type="email"
            placeholder="Enter your email or phone number"
          />
          <Link to="/signup">
            <button className="absolute top-1/2 right-3 transform -translate-y-1/2 px-6 py-2 bg-primary text-white rounded-full">Get Started</button>
          </Link>
        </div>
      </div>

      {/* Next Section - Columns */}
      <div className="flex justify-center items-center mt-10  primary-font">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center">
          {/* Column 1 */}
          <div className="text-black rounded-md p-6">
            <h2 className="text-4xl font-bold ">300k+</h2>
            <p className="text-lg  text-gray-800 secondary-font text-opacity-75">Registered Users</p>
          </div>

          {/* Column 2 */}
          <div className="bg-white rounded-md p-6 primary-font">
            <h2 className="text-4xl font-bold ">1.8 million</h2>
            <p className="text-lg  text-gray-800 secondary-font text-opacity-75">Articles generated</p>
          </div>

          {/* Column 3 */}
          <div className="bg-white p-6 primary-font ">
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
<div className=" flex w-full items-center justify-center p-20 bg-purple-100">
  {/* Left Column */}
  <div className=" flex ">
    <div className="justify-center items-center p-20 ">
      <h4 className=" text-3xl primary-font mb-3">About Topicaflow</h4>
      <div className=''>
        <p className=" flex-wrap text-gray-500 text-1xl  primary-font ">
          "TopicalFlow" is an AI-driven content generation tool aimed
          at helping users build topical authority. The web application
          enables users to create projects within a specific niche,
          for which the AI system will then suggest relevant topics.
        </p>
        
      </div>
      <div className='px-20'>
      <Link to="/signup">
            <button className=" bg-primary text-white  px-12  py-4 mt-3  rounded-md hover:bg-white hover:text-black transition duration-300">
              Learn more
            </button>
          </Link>
      </div>
    </div>
    {/* Add more text or content as needed */}
  </div>

 {/* Right Column */}

  <div className='w-full flex flex-wrap'>
    <img src={dashbimg} alt="dashboard-image" className="w-[800px] h-[430x]" />
 </div>

</div>

    {/*Next Section*/}
          {/*Description and Specifications section*/}
<div className='justify-center items-center bg-gray-100'>
<div className=' flex items-center justify-center'>
  <h1 className='text-3xl primary-font items-center font-bold mt-12'>Discover more with Topicalflow</h1>
  </div>
 <div className='flex justify-center items-center bg-gray-100 mt-2'>
  <p className='text-2xl primary-font text-center sm:text-left sm:mx-auto'>
    We have all you need to get your article and all other written content done effortlessly
  </p>
</div>

{/* Boxes*/}
<div className='flex justify-center items-center p-4 mt-10  bg-gray-300'> 
<div className='mt-5 flex text-white justify-center self-strech flex-wrap gap-3 items-center'>
<div className='flex flex-col rounded-md items-center px-3 bg-gray-900 mr-10 w-[250px] h-[250px]'>
  <div className='bg-gray-700 mt-9  w-12 h-12 rounded-full'>
    <img src={AIicon4} alt="aiicon" className='flex p-4' />
  </div>
    <p className='justify-center items-center mt-4 '>Ai article writer</p>
    <p className=' flex mt-4 text-xs'>Exceptionally generate an hyper-personalized article that captivate the ideas of it audience</p>

    </div>
    <div className='flex  flex-col rounded-md items-center px-3 bg-gray-900 mr-10 w-[250px] h-[250px]'>
  <div className='bg-gray-700 mt-9  w-12 h-12 rounded-full'>
    <img src={AIicon2} alt="aiicon" className='flex p-2' />
  </div>
    <p className='justify-center items-center mt-4 '>Article Summarizer</p>
    <p className=' flex mt-4 text-xs'>Summarize articles and other written content with ease using our Article Summarizer tool</p>

    </div>
    <div className='flex  flex-col rounded-md items-center px-3 bg-gray-900 mr-10 w-[250px] h-[250px]'>
  <div className='bg-gray-700 mt-9  w-12 h-12 rounded-full'>
    <img src={AIicon3} alt="aiicon" className='flex p-2' />
  </div>
    <p className='justify-center items-center mt-4 '>Generate attractive topics</p>
    <p className=' flex mt-4 text-xs'>Topicalflow effortlessly generate eye catching topics in your articles across several industry.</p>

    </div>

    <div className='flex  flex-col rounded-md items-center px-3 bg-gray-900 mr-10 w-[250px] h-[250px]'>
  <div className='bg-gray-700 mt-9  w-12 h-12 rounded-full'>
    <img src={AIicon1} alt="aiicon" className='flex p-2' />
  </div>
    <p className='justify-center items-center mt-4 '>Seamless integration</p>
    <p className=' flex mt-4 text-xs'> Topicalflow allows you to easily publish your integrated website just in few clicks</p>
    </div>

</div>
</div>


</div>



{/* How it Works */}
{/* How it Works */}
<div className='items-center justify-center mt-20'>
  <div className='flex justify-center'>
    <h1 className="text-3xl font-bold primary-font text-primary mb-2">How it Works</h1>
  </div>
  <div className='flex justify-center items-center'>
    <h1 className="text-sm font-bold primary-font">Embark on your journey into the realm of exceptionally streamlined article writing now.</h1>
  </div>

  {/* Steps */}
  <div className='flex items-center p-5 justify-center flex-wrap mt-10 '>
    {/* Step 1 */}

    <div className='flex-col px-4 mb-8  sm:w-full sm:flex-col md:w-1/2 lg:w-1/4'>
      <div className='mt-2'>
        <h1 className='secondary-font text-primary'>01.</h1>
        <h4 className="font-bold mb-2">Input Your Ideas</h4>
      </div>
      <div className='justify-center mt-2'>
        <p>Enter your ideas, keywords, or drafts into our user-friendly AI interface. Whether you're starting fresh or refining existing content, our tool is here to help.</p>
      </div>
    </div>

    {/* Step 2 */}
    <div className='flex-col px-4 mb-8 sm:w-full md:w-1/2 lg:w-1/4'>
      <div className='mt-2'>
        <h1 className='secondary-font text-primary'>02.</h1>
        <h4 className="font-bold mb-2">Analyze Suggestions</h4>
      </div>
      <div className=' mt-2'>
        <p>Our smart AI delves into your input, analyzing themes. It suggests attention-grabbing headlines and fresh angles for your content.</p>
      </div>
    </div>

    {/* Step 3 */}
    <div className='flex-col px-4 mb-8 sm:w-full md:w-1/2 lg:w-1/4'>
      <div className='mt-2'>
        <h1 className='secondary-font text-primary'>03.</h1>
        <h4 className="font-bold  mb-2">Content Refinement</h4>
      </div>
      <div className=' mt-2'>
        <p>Witness AI's real-time magic. As you write, our tool refines grammar, style, and impact. See your writing transform.</p>
      </div>
    </div>

    {/* Step 4 */}
    <div className='flex-col px-4 mb-8 sm:w-full md:w-1/2 lg:w-1/4'>
      <div className='mt-2'>
        <h1 className='secondary-font text-primary'>04.</h1>
        <h4 className="font-bold mb-2">Preview and Approve</h4>
      </div>
      <div className=' mt-2'>
        <p>Your polished content is primed for the world. Export in different formats or seamlessly publish to preferred platforms. AI-crafted, captivating content awaits your audience.</p>
      </div>
    </div>
  </div>

  {/* Call to Action */}
  <div className='flex justify-center items-center p-10'>
    <Link to="/signup">
      <button className="bg-primary text-white px-14 py-3 text-xl rounded-md hover:bg-3B2385 primary-font hover:text-white transition duration-300">
        Get Started now
      </button>
    </Link>
  </div>
</div>



{/** Next Section*/}
<div className='flex p-4 bg-gray-100 '>
  <div className='flex items-center justify-center mt-4 md:w-full sm:w-full'>
    <div className=' m-20 text-bold primary-font text-base '>
      <h1 className='text-lg md:text-3xl lg:text-4xl xl:text-5xl flex flex-wrap'>
        <span className="block">Write fluently.</span>
        <span className="block">Communicate with confidence.</span>
        <span className="block">We write for various Industries.</span>
      </h1>
      <p className='text-sm mt-4 mb-5'>Generate your top-notch article with no restrictions,
      <span className='block'>create  well structured content from your mobile phone.</span></p> 
      <Link to="/signup">
            <button className="bg-primary text-white px-4 py-4 rounded-md hover:bg-3B2385 hover:text-white transition duration-300">
              Sign up for free
            </button>
          </Link>
    </div>
    <div className='w-full h-full mr-20 mt-10 p-4 '>
      <img src={infoperson2} alt="infoperson2" className='justify-center' />
    </div>
  </div>
</div>

{/** Next Section - Pricing */}
<div>
<Pricing />
</div>
<section>
  <Carousel />
 </section>

 <section>
  <div className='flex justify-center'>
    <h1 className=' primary-font text-black p-4 text-6xl text-center mt-20 items-center justify-center'>Be part of the future of the <span className='block '> Topicalflow
      </span></h1>
  </div>
  <div>
    <h6 className='justify-center p-2  text-purple-500 flex secondary-font'>Unleash the power of AI within topicalflow. Upgrade your <span className='block '>     productivity with topicalflow</span></h6>
  </div>
  <div>
    <div className='bg-bg-gradient-to-r from-blue-500 via-purple-500 to-pink py-3 px-3'>


    </div>
  </div>
 </section>

 <footer>
  <Footer />
 </footer>
</div>

);
};

export default Home;