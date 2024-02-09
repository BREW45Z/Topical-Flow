import React, { useState } from 'react';
import plusicon from '../assets/plus.svg'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'


const Sidebar: React.FC = () => {

  const [activeItem, setActiveItem] = useState<string>('');

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);

  };


  return (
    <section>
    <div className="w-72 h-80 pt-2 flex-col  justify-start items-start gap-2 inline-flex">
  <div className=" px-5 justify-center items-center gap-2 inline-flex ">
    <div className="w-8 h-8  mt-7 relative" />
    <img src={logo} alt="logo" />
    <div className=" primary-font text-primary leading-tight">Topicalflow</div>
  </div>
  <div className=" flex-col justify-start items-start gap-5 flex">
    <div className="self-stretch h-11 px-6 flex-col justify-start items-start flex">
      <div className="w-56 justify-center items-center inline-flex">
        <div className="grow shrink basis-0 self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-violet-500 justify-start items-center gap-2 inline-flex">
          <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
            <div className="w-5 h-5 relative" />
            <div className=" text-primary">New article</div>
            <img src={plusicon} alt="plus-icon"  className='px-5'/>

          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch h-72 px-4 flex-col justify-start items-start flex">
      <div className="self-stretch h-32 flex-col justify-start items-start flex">
        <div className={`self-stretch px-3 py-2 rounded-md justify-start items-center gap-28 inline-flex ${
          activeItem === 'home' ? 'bg-gray-200' : ''
        }`}
        >
          <div className="justify-start items-center gap-2 flex"  onClick={() => handleItemClick('home')}>
            <div className="w-6 h-6 justify-center items-center flex">
              <div className="w-6 h-6 relative">
              </div>
            </div>
            <Link to="/dashboard">
            <div className=" text-primary text-sm secondary-font">Home</div>
            </Link>
          </div>
        </div>

          
        <div className={`self-stretch px-3 py-2  rounded-md justify-start items-center gap-28 inline-flex ${
          activeItem === 'generate-article' ? 'bg-gray-200' : ''
        }`}
        >
          <div className="justify-start items-center gap-2 flex"  onClick={() => handleItemClick('generate-article')}>
            <div className="w-6 h-6 justify-center items-center flex">
              <div className="w-6 h-6 relative">
              </div>
            </div>
            <Link to="/generate-article">
            <div className=" text-primary text-sm secondary-font">Generate article</div>
            </Link>
          </div>
        </div>
       
        <div className={`self-stretch px-3 py-2  rounded-md justify-start items-center gap-28 inline-flex ${
          activeItem === 'project' ? 'bg-gray-200' : ''
        }`}
        >
          <div className="justify-start items-center gap-2 flex"  onClick={() => handleItemClick('project')}>
            <div className="w-6 h-6 justify-center items-center flex">
              <div className="w-6 h-6 relative">
              </div>
            </div>
            <Link to="/project">
            <div className=" text-primary text-sm secondary-font">Project</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="self-stretch h-32 flex-col justify-start items-start gap-1 flex">
      <div className={`self-stretch px-3 py-2 rounded-md justify-start items-center gap-28 inline-flex ${
          activeItem === 'my-account' ? 'bg-gray-500' : ''
        }`}
        >
          <div className="justify-start items-center gap-2 flex"  onClick={() => handleItemClick('my-account')}>
            <div className="w-6 h-6 justify-center items-center flex">
              <div className="w-6 h-6 relative">
              </div>
            </div>
            <Link to="/my-account">
            <div className=" text-primary text-sm secondary-font">My account</div>
            </Link>
          </div>
        </div>

        <div className={`self-stretch px-3 py-2 rounded-md justify-start items-center gap-28 inline-flex ${
          activeItem === 'integration' ? 'bg-gray-200' : ''
        }`}
        >
          <div className="justify-start items-center gap-2 flex"  onClick={() => handleItemClick('integration')}>
            <div className="w-6 h-6 justify-center items-center flex">
              <div className="w-6 h-6 relative">
              </div>
            </div>
            <Link to="/integration">
            <div className=" text-primary text-sm secondary-font">Integration</div>
            </Link>
          </div>
        </div>

        <div className={`self-stretch px-3 py-2 rounded-md justify-start items-center gap-28 inline-flex ${
          activeItem === 'support' ? 'bg-gray-200' : ''
        }`}
        >
          <div className="justify-start items-center gap-2 flex"  onClick={() => handleItemClick('billing')}>
            <div className="w-6 h-6 justify-center items-center flex">
              <div className="w-6 h-6 relative">
              </div>
            </div>
            <Link to="/support">
            <div className=" text-primary text-sm secondary-font">Billing</div>
            </Link>
          </div>
        </div>

        <div className={`self-stretch px-3 py-2 rounded-md justify-start items-center gap-28 inline-flex ${
          activeItem === 'support' ? 'bg-gray-200' : ''
        }`}
        >
          <div className="justify-start items-center gap-2 flex"  onClick={() => handleItemClick('home')}>
            <div className="w-6 h-6 justify-center items-center flex">
              <div className="w-6 h-6 relative">
              </div>
            </div>
            <Link to="/support">
            <div className=" text-primary text-sm secondary-font">Support</div>
            </Link>
          </div>
        </div>
        <div className={`self-stretch px-3 py-2 rounded-md justify-start items-center gap-28 inline-flex ${
          activeItem === 'setting' ? 'bg-gray-200' : ''
        }`}
        >
          <div className="justify-start items-center gap-2 flex"  onClick={() => handleItemClick('setting')}>
            <div className="w-6 h-6 justify-center items-center flex">
              <div className="w-6 h-6 relative">
              </div>
            </div>
            <Link to="/setting">
            <div className=" text-primary text-sm secondary-font">Setting</div>
            </Link>
          </div>
        </div>

     <section>
     {/** Nav featured Card */}
     <div className="NavFeaturedCard w-60 h-40 px-5 py-5 bg-gray-100 rounded-lg flex-col justify-center mt-5 items-start gap-4 inline-flex">
  <div className="TextAndSupportingText self-stretch h-16 flex-col justify-start items-start gap-1 flex">
    <div className="Title self-stretch justify-start items-start gap-1 inline-flex">
      <div className="Text grow shrink basis-0 text-gray-900 text-sm font-medium font-['Inter'] leading-tight">Used credit</div>
      <div className="XClose justify-center items-center flex">
        <div className="ButtonCloseX p-2 rounded-lg justify-center items-center inline-flex">
          <div className="X w-5 h-5 relative" />
        </div>
      </div>
    </div>
    <div className="SupportingText self-stretch text-gray-500 text-sm font-normal font-['Inter'] leading-tight">You have used 80% of your available credit</div>
  </div>
  <div className="ProgressBar self-stretch justify-start items-center gap-3 inline-flex">
    <div className="ProgressBar w-52 h-2 relative rounded-lg">
      <div className="Background w-52 h-2 left-0 top-0 absolute bg-purple-100 rounded" />
      <div className="Progress w-44 h-2 left-0 top-0 absolute bg-violet-500 rounded" />
    </div>
  </div>
  <div className="Actions justify-start items-start gap-3 inline-flex">
    <div className="NavFeaturedCardButton justify-center items-center gap-2 flex">
      <div className="Text text-gray-500 text-sm font-medium font-['Inter'] leading-tight">Dismiss</div>
    </div>
    <div className="NavFeaturedCardButton justify-center items-center gap-2 flex">
      <div className="Text text-violet-700 text-sm font-medium font-['Inter'] leading-tight">Upgrade plan</div>
    </div>
  </div>
  </div>
    </section>

<section>
<div className=" mt-5 Account w-60 h-10 px-2 justify-between items-start inline-flex">
  <div className="AvatarLabelGroup justify-start items-center gap-3 flex">
    <img className="Avatar w-10 h-10 rounded-full" src="https://via.placeholder.com/40x40" />
    <div className="TextAndSupportingText flex-col justify-start items-start inline-flex">
      <div className="Text text-gray-900 text-sm font-medium font-['Inter'] leading-tight">Olivia Rhye</div>
      <div className="SupportingText text-gray-500 text-sm font-normal font-['Inter'] leading-tight">olivia@untitledui.com</div>
    </div>
  </div>
  <div className="Icon justify-center items-center flex">
    <div className="Button rounded-lg justify-start items-start inline-flex">
      <div className="ButtonBase p-2 rounded-lg justify-center items-center gap-2 flex">
        <div className="LogOut w-5 h-5 relative" />
      </div>
    </div>
  </div>
</div>

</section>
 
      </div>
    </div>
  </div>
</div>
</section>

   )

   }
   export default Sidebar;