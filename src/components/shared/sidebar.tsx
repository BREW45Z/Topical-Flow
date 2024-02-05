import React from 'react';
import plusicon from '../assets/plus.svg'
import { Link } from 'react-router-dom';


const Sidebar: React.FC = () => {
  return (
    <div className="w-72 h-80 pt-2 flex-col justify-start items-start gap-5 inline-flex">
  <div className="w- px-5 justify-center items-center gap-2 inline-flex">
    <div className="w-8 h-8 relative" />
    <div className="text-black text-xl font-normal font-['Droid Serif'] leading-tight">Topicalflow</div>
  </div>
  <div className="self-stretch h-96 flex-col justify-start items-start gap-16 flex">
    <div className="self-stretch h-11 px-6 flex-col justify-start items-start flex">
      <div className="w-56 justify-center items-center inline-flex">
        <div className="grow shrink basis-0 self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-violet-500 justify-start items-center gap-2 inline-flex">
          <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
            <div className="w-5 h-5 relative" />
            <div className="text-slate-700 text-base font-medium font-['Inter'] leading-normal">New article</div>
            <img src={plusicon} alt="plus-icon"  className='px-5'/>

          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch h-72 px-4 flex-col justify-start items-start flex">
      <div className="self-stretch h-32 flex-col justify-start items-start flex">
        <div className="self-stretch px-3 py-2 bg-white rounded-md justify-start items-center gap-28 inline-flex">
          <div className="justify-start items-center gap-3 flex">
            <div className="w-6 h-6 justify-center items-center flex">
              <div className="w-6 h-6 relative">
              </div>
            </div>
            <Link to="/dashboard">
            <div className="text-slate-700 text-base font-medium font-['Inter'] leading-normal">Home</div>
            </Link>
          </div>
        </div>
        <div className="self-stretch px-3 py-2 bg-gray-100 rounded-md justify-start items-center gap-28 inline-flex">
          <div className="justify-start items-center gap-3 flex">
            <div className="w-6 h-6 justify-center items-center flex">
              <div className="w-6 h-6 relative">
              </div>
            </div>
            <div className="text-slate-700 text-base font-medium font-['Inter'] leading-normal">Generate article</div>
          </div>
        </div>
        <div className="self-stretch px-3 py-2 bg-white rounded-md justify-start items-center gap-28 inline-flex">
          <div className="justify-start items-center gap-3 flex">
            <div className="w-6 h-6 justify-center items-center flex">
              <div className="w-6 h-6 relative">
              </div>
            </div>
            <div className="text-slate-700 text-base font-medium font-['Inter'] leading-normal">Project</div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-32 flex-col justify-start items-start gap-1 flex">
        <div className="self-stretch px-3 py-2 bg-white rounded-md justify-start items-center gap-28 inline-flex">
          <div className="justify-start items-center gap-3 flex">
            <div className="w-6 h-6 justify-center items-center flex">
              <div className="w-6 h-6 relative">
              </div>
            </div>
            <div className="text-slate-700 text-base font-medium font-['Inter'] leading-normal">My account</div>
          </div>
        </div>
        <div className="self-stretch px-3 py-2 bg-white rounded-md justify-start items-center gap-28 inline-flex">
          <div className="justify-start items-center gap-3 flex">
            <div className="w-6 h-6 justify-center items-center flex">
              <div className="w-6 h-6 relative">
              </div>
            </div>
            <div className="text-slate-700 text-base font-medium font-['Inter'] leading-normal">Integration</div>
          </div>
        </div>
        <div className="self-stretch px-3 py-2 bg-white rounded-md justify-start items-center gap-28 inline-flex">
          <div className="justify-start items-center gap-3 flex">
            <div className="w-6 h-6 justify-center items-center flex">
              <div className="w-6 h-6 relative">
              </div>
            </div>
            <div className="text-slate-700 text-base font-medium font-['Inter'] leading-normal">Billing</div>
          </div>
        </div>

        <div className="self-stretch px-3 py-2 bg-white rounded-md justify-start items-center gap-28 inline-flex">
          <div className="justify-start items-center gap-3 flex">
            <div className="w-6 h-6 justify-center items-center flex">
              <div className="w-6 h-6 relative">
              </div>
            </div>
            <div className="text-slate-700 text-base font-medium font-['Inter'] leading-normal">Support</div>
          </div>
        </div>

        <div className="self-stretch px-3 py-2 bg-white rounded-md justify-start items-center gap-28 inline-flex">
          <div className="justify-start items-center gap-3 flex">
            <div className="w-6 h-6 justify-center items-center flex">
              <div className="w-6 h-6 relative">
              </div>
            </div>
            <div className="text-slate-700 text-base font-medium font-['Inter'] leading-normal">Settings</div>
          </div>
        </div>


<section>
     {/** Nav featured Card */}
     <div className="NavFeaturedCard w-60 h-40 px-5 py-5 bg-gray-100 rounded-lg flex-col justify-center mt-30 items-start gap-4 inline-flex">
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

   )

   }
   export default Sidebar;