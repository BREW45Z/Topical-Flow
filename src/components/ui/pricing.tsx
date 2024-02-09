import React from 'react';
import checkicon from '../assets/checkicon.svg'


const Pricing = () => {
    const customStyles = {
        borderRadius: '40px', // You can adjust this value to increase or decrease curvature
      };
  return (
    <section className='text-base'>
        
        <div className='secondary-font p-5'>
            <h5 className='font-bold mb-5 mt-5  text-primary items-center justify-center flex'>Pricing</h5>
            <h2 className=' text-5xl tex-grey-800 font-bold mb-1 items-center justify-center flex'>Plans that fit your scale</h2>
            <h6 className='font-bold text-purple-500 mb-1 items-center justify-center flex'>Simple, transparent pricing that grows with you. Try any plan free for 30 days.</h6>

        </div>
        <div className='flex justify-center items-center p-10 lg:w-full'>

      <div className=' mt-5 justify-center items-center'>
        <div className='border-2 w-[365px] h-[620px] p-10  rounded-lg' style={customStyles}>
          <div className='flex justify-between'>
            <h5 className='secondary-font mr-10 justify-start text-gray-500'>Basic plan</h5>
            <h6 className='bg-purple-100 ml-5 rounded-md'>popular</h6>
          </div>
          <div className='flex justify-start items-center'>
              <h1 className='text-5xl  mt-5 secondary-font px-1'>$10</h1>
              <h6 className='text-sm secondary-font mt-8'>per month</h6>
            </div>
            <div className='mt-5 primary-font'>
                <h6 className='text-sm primary-font'>Basic features for up to 10 users.</h6>
            </div>
            <button className=' mt-2 mb-4 bg-purple-500 text-white px-24 py-1 items-center justify-center rounded-md'>
                Get started
            </button>
            <button className=' mb-4 bg-white border text-base px-20 py-1 items-center justify-center rounded-md'>
                Contact sales
            </button>

            <div className='text-sm primary-font'>
                <h6 className='text-sm'>FEATURES</h6>
                <h6>Everything in <span><strong>Starter</strong></span> plus...</h6>
                <div className=' primary-font flex'>
                    <div className='flex mt-5 py-1'>
                    <img src={checkicon} alt="checkicon"  className=''/>
                    <h6 className='px-3'>2 article per month</h6>
                    </div>
                </div>
                <div className='flex'>
                    <div className='flex mt-5 py-1'>
                    <img src={checkicon} alt="checkicon"  className=''/>
                    <h6 className='px-3'>Regeneration</h6>
                    </div>
                </div>
                <div className=' flex'>
                    <div className='flex mt-5 py-1'>
                    <img src={checkicon} alt="checkicon"  className=''/>
                    <h6 className='px-3'>Support over 100 language</h6>
                    </div>
                </div>
                <div className='flex'>
                    <div className='flex mt-5 py-1'>
                    <img src={checkicon} alt="checkicon"  className=''/>
                    <h6 className='px-3'>20GB individual data each user</h6>
                    </div>
                </div>
                <div className=' flex'>
                    <div className='flex mt-5 py-1'>
                    <img src={checkicon} alt="checkicon"  className=''/>
                    <h6 className='px-3'>Basic chat and email support</h6>
                    </div>
                </div>
            

            </div>

        </div>
      </div>


      {/** SECOND */}
     
      <div className='p-5 mt-5 justify-center items-center'>
        <div className='border-2 w-[365px] h-[620px] p-10  rounded-lg' style={customStyles}>
          <div className='flex justify-between'>
            <h5 className='secondary-font mr-10 justify-start text-gray-500'>Business plan</h5>
          </div>
          <div className='flex justify-start items-center'>
              <h1 className='text-5xl  mt-5 secondary-font px-1'>$20</h1>
              <h6 className='text-sm secondary-font mt-8'>per month</h6>
            </div>
            <div className='mt-5 primary-font'>
                <h6 className='text-sm primary-font'>Basic features for up to 10 users.</h6>
            </div>
            <button className=' mt-2 mb-4 bg-purple-500 text-white px-24 py-1 items-center justify-center rounded-md'>
                Get started
            </button>
            <button className=' mb-4 bg-white border text-base px-20 py-1 items-center justify-center rounded-md'>
                Contact sales
            </button>

            <div className='text-sm primary-font'>
                <h6 className='text-sm'>FEATURES</h6>
                <h6>Everything in <span><strong>Starter</strong></span> plus...</h6>
                <div className=' primary-font flex'>
                    <div className='flex mt-5 py-1'>
                    <img src={checkicon} alt="checkicon"  className=''/>
                    <h6 className='px-3'>2 article per month</h6>
                    </div>
                </div>
                <div className='flex'>
                    <div className='flex mt-5 py-1'>
                    <img src={checkicon} alt="checkicon"  className=''/>
                    <h6 className='px-3'>Regeneration</h6>
                    </div>
                </div>
                <div className=' flex'>
                    <div className='flex mt-5 py-1'>
                    <img src={checkicon} alt="checkicon"  className=''/>
                    <h6 className='px-3'>Support over 100 language</h6>
                    </div>
                </div>
                <div className='flex'>
                    <div className='flex mt-5 py-1'>
                    <img src={checkicon} alt="checkicon"  className=''/>
                    <h6 className='px-3'>20GB individual data each user</h6>
                    </div>
                </div>
                <div className=' flex'>
                    <div className='flex mt-5 py-1'>
                    <img src={checkicon} alt="checkicon"  className=''/>
                    <h6 className='px-3'>Basic chat and email support</h6>
                    </div>
                </div>
            

            </div>

        </div>
      </div>
      {/**3RD */}

      <div className='p-5 mt-5 justify-center items-center '>
        <div className='border-2 w-[365px] h-[620px] p-10  rounded-lg' style={customStyles}>
          <div className='flex justify-between'>
            <h5 className='secondary-font mr-10 justify-start text-gray-500'>Enterprise plan</h5>
          </div>
          <div className='flex justify-start items-center'>
              <h1 className='text-5xl  mt-5 secondary-font px-1'>$40</h1>
              <h6 className='text-sm secondary-font mt-8'>per month</h6>
            </div>
            <div className='mt-5 primary-font'>
                <h6 className='text-sm primary-font'>Basic features for up to 10 users.</h6>
            </div>
            <button className=' mt-2 mb-4 bg-purple-500 text-white px-24 py-1 items-center justify-center rounded-md'>
                Get started
            </button>
            <button className=' mb-4 bg-white border text-base px-20 py-1 items-center justify-center rounded-md'>
                Contact sales
            </button>

            <div className='text-sm primary-font'>
                <h6 className='text-sm'>FEATURES</h6>
                <h6>Everything in <span><strong>Starter</strong></span> plus...</h6>
                <div className=' primary-font flex'>
                    <div className='flex mt-5 py-1'>
                    <img src={checkicon} alt="checkicon"  className=''/>
                    <h6 className='px-3'>2 article per month</h6>
                    </div>
                </div>
                <div className='flex'>
                    <div className='flex mt-5 py-1'>
                    <img src={checkicon} alt="checkicon"  className=''/>
                    <h6 className='px-3'>Regeneration</h6>
                    </div>
                </div>
                <div className=' flex'>
                    <div className='flex mt-5 py-1'>
                    <img src={checkicon} alt="checkicon"  className=''/>
                    <h6 className='px-3'>Support over 100 language</h6>
                    </div>
                </div>
                <div className='flex'>
                    <div className='flex mt-5 py-1'>
                    <img src={checkicon} alt="checkicon"  className=''/>
                    <h6 className='px-3'>20GB individual data each user</h6>
                    </div>
                </div>
                <div className=' flex'>
                    <div className='flex mt-5 py-1'>
                    <img src={checkicon} alt="checkicon"  className=''/>
                    <h6 className='px-3'>Basic chat and email support</h6>
                    </div>
                </div>
            

            </div>

        </div>
      </div>
      </div>

    </section>
  );
};

export default Pricing;
