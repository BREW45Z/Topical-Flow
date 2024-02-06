import React from 'react';
import Sidebar from '../shared/sidebar';
import PlusWhite from '../assets/whiteplus.svg';
import arrowright from '../assets/arrow-right.svg';
import infocircle from '../assets/info-circle.svg';
import noarticle from '../assets/no-article.png'
import plus from '../assets/plus.svg'


const Dashboard: React.FC = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Section 1 */}
        <div className='flex justify-between items-center '>
          <div className='justify-center items-center py-2 px-4'>
            <h1 className='text-4xl secondary-font '>Welcome Joseph</h1>
            <h6 className='text-sm py-2'>Track, manage and schedule your articles.</h6>
          </div>
          <div className='px-3'>
            <button className=' w-48 h-12 hover text-white rounded-lg bg-violet-500'>
              <div className=' p-1 inline-flex justify-between items-center'>
              <img src={PlusWhite} alt="plusicon" />
              <h1 className='px-4 justify-center'>New Article</h1></div>
            
            </button>
          </div>
        </div>

        {/** next section */}
        <div>
          <div className="bg-violet-500 h-400 w-full text-white secondary-font rounded-md p-5">
            <div className='py-4  justify-center'>
            <h1 className='text-2xl'>Unlock the power of writing with Topical flow</h1>
            <h6 className='text-sm'>Revolutionize your content creation with topical flow: The ultimate article writing tool</h6>
              
            </div>
            <div className='flex  mt-10 items-center gap-48'>
            <h1 className='text-3xl'>6 Articles left</h1>
            <button className='boarder-purple-500 rounded-md outline w-45 py-3 px-3 border-3 inline-flex gap-3  justify-center items-center'>
              Buy more articles
              <img src={arrowright} alt="" />
             </button>
            </div>     
             </div>
        </div>

        <div className='mt-4'>
            <div className='bg-purple-200 px-4'>
              <div className='p-3 flex gap-3'>
                <img src={infocircle} alt="infocircle" className='bg-purple-200 px-1' />
           <h1 className='text-sm text-purple-500'>Upgrade your account to have access to more tools from topical flow</h1>
              </div>
             </div>
        </div>

        <div className='justify-center px-20 py-10 flex flex-col items-center'>
          <img src={noarticle} alt="no-article" className='w-50 h-40' />
          <h2 className='text-md'>No recent article found</h2>
        </div>

        <div className='flex justify-center'>
          <button className='  text-primary border-violet-500 flex justify-center  bg-purple-50 rounded-md px-20 py-3 items-center flex inline-flex outline-purple-100 border-2'>
                      <img src={plus} alt="white-plus" className='bg-white' />
            <h1>Create article</h1>
          </button>

        </div>
        

      </div>
    </div>
  );
};

export default Dashboard;