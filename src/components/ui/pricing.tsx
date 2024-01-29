import React from 'react';


const Pricing = () => {
  return (
    <section className='text-gray-500 '>
      <div className='p-20 mt-5 justify-center items-center shadow'>
        <div className='border-2 w-[375px] h-[620px] p-10  rounded-md'>
          <div className='flex justify-between'>
            <h5 className='secondary-font mr-10 justify-start text-gray-500'>Basic plan</h5>
            <h6 className='bg-purple-100 ml-5 rounded-md'>popular</h6>
          </div>
          <div className='flex justify-start items-center'>
              <h1 className='text-5xl  mt-5 secondary-font px-1'>$10</h1>
              <h6 className='text-sm secondary-font mt-8'>per month</h6>
            </div>
            <div className='mt-5'>
                <h6 className='text-sm'>Basic features for up to 10 users.</h6>
            </div>
            <button className=' mt-4 mb-4 bg-purple-500 text-white px-24 py-1 items-center justify-center rounded-md'>
                Get started
            </button>
            <button className=' mt-4 mb-4 bg-white border text-base px-20 py-1 items-center justify-center rounded-md'>
                Chat to sales
            </button>

            <div>
                <h6>FEATURES</h6>
                <h6>Everything in Starterplus...</h6>
                
            </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
