import React from 'react';
import { Link } from 'react-router-dom';
import  logo from '../assets/logo.svg'

const Sidebar: React.FC = () => {
  return (
    <nav className='justify-center items-center flex-col p-10 py-20 text-1xl secondary-font text-gray-500'>
        <div className='flex p-2  items-center'>
            <img src={logo} alt="logo" className='p-1' />
            <h5>Topicalflow</h5>
        </div>

        <div className='mt-5'>
        <ul className=''>
        <li className='mb-5 px-5'>
          <Link to="/">Home</Link>
        </li>
        <li className='mb-5 px-5'> 
          <Link to="/generate-article">Generate article</Link>
        </li>
        <li className='mb-5 px-5'>
          <Link to="/project">Project</Link>
        </li>
         <li className='mb-5 px-5'>
          <Link to="/my-account">My account</Link>
        </li>
        <li className='mb-5 px-5'>
          <Link to="/integration">Integration</Link>
        </li>
        <li className='mb-5 px-5'>
          <Link to="/billing">Billing</Link>
        </li>

        <li className='mb-5 px-5'>
          <Link to="/support">Support</Link>
        </li>
        
        <li className='mb-5 px-5'>
          <Link to="/settings">Settings</Link>
        </li>

        {/* Add more sidebar links as needed */}
      </ul>
        </div>
      
    </nav>
  );
};

export default Sidebar;
