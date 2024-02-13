import logo from '../assets/logo.svg'
import twitter from '../assets/Twitter.svg'
import  linkedin from   '../assets/Linkedin.svg'
import instagram from '../assets/Instagram.svg'
import facebook from '../assets/Facebook.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-black-500  justify-center items-center py-8">
      <div className="container mt-12 mx-auto flex justify-between">
        {/* Column 1 */}
        <div className="w-1/2 p-5">
          <div className="flex items-center mb-4">
            {/* Your logo */}
            <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
          
            <h1 className="text-lg seconda">Topicalflow</h1>
          </div>

          <p className="mb-4 primary-font">"TopicalFlow" is an AI-driven content generation tool<span className='block'>aimed
            at helping users build topical authority.</span></p>
          {/* Social Media Icons */}
          <div className="flex px-4 ">
          <Link to={''}>
          <img src={twitter} alt="twitter" className='px-2' />
          </Link>

          <Link to={''}>
          <img src={instagram} alt="twitter" className='px-2' />
          </Link>

          <Link to={''}>
          <img src={facebook} alt="twitter"  className='px-2'/>
          </Link>
          <Link to={''}>
          <img src={linkedin} alt="twitter" className='px-2'/>
          </Link>
          
        
           
          </div>
        </div>

        {/* Column 2 */}
        <div className="w-1/2 mt-3">
          {/* Lists of web pages */}
          <div className="flex">
            <ul className="px-14">
            <h5 className='font-bold secondary-font mb-5'>Get Started</h5>
              <li className="mb-2">Sign up</li>
              <li className="mb-2">Login</li>
              <li className="mb-2">Pricing</li>
              <li className="mb-2">Billing</li>

            </ul>
            <ul className="px-14">
            <h5 className='font-bold secondary-font mb-5'>Company</h5>
              <li className="mb-2">About</li>
              <li className="mb-2">Contact us</li>
              <li className="mb-2">Terms and Condition</li>
              <li className="mb-2">Privacy Policy</li>
              <li className="mb-2">Blog</li>



            </ul>
            <ul className='px-14'>
            <h5 className='font-bold secondary-font mb-5'>Support</h5>
              <li className="mb-2">Privacy Policy</li>
              <li className="mb-2">Terms of Service</li>
              <li className="mb-2">Sitemap</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
