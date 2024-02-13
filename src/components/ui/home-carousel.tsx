import React from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
import avatar1 from '../assets/Avatar (1).png';
import starpurple from '../assets/star_purple500.svg';
import starhalf from '../assets/star_half.svg'
import avatar2 from '../assets/Avatar (2).png'
import avatar3 from '../assets/Avatar (3).png'


const NextArrow: React.FC<CustomArrowProps> = ({ style, onClick }) => {
  return (
    <div 
      className="slick-arrow next-arrow absolute flex top-20 right-4 cursor-pointer bg-white px-3 py-2  mb-10 rounded-md shadow-md bg-transparent hover:bg-gray-100 transition"
      style={{ ...style, color: '' }}
      onClick={onClick}
    >
      Next
    </div>
  );
};

const PrevArrow: React.FC<CustomArrowProps> = ({ style, onClick }) => {
  return (
    <div
      className="slick-arrow prev-arrow  absolute flex top-20 cursor-pointer bg-black p-3 rounded-md shadow-md hover:bg-gray-100 transition"
      style={{ ...style, color: '' }}
      onClick={onClick}
    >
      Prev
    </div>
  );
};

const Carousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="bg-yellow-50 p-10 relative">
      <div className='mb-3'>
        <h1 className='  px-20 secondary-font text-black-200 text-4xl '>Our Customer Feedback</h1>
        <h5 className=' px-20 primary-font text-sm'>Don’t take our word for it. Trust our customers</h5>
      </div>
      <div className="max-w-screen-xl relative">
        <Slider {...settings}>
          {/* Card 1 */}
          <div className="w-full px-4 relative ">
            <div className=" items-center bg-white p-8 rounded-lg shadow">
              <div className='flex justify-between'>
                <div className=''>
                <img src={avatar1} alt='avatar1' />

                </div>
                <div className='flex'>
                <img src={starpurple} alt="stars1" />
              <img src={starpurple} alt="stars1" />
              <img src={starhalf} alt="stars1" />
              <img src={starhalf} alt="stars1" />
              </div>
              </div>
             
            <div>
            <h1 className='text-2xl primary-font'>Sarah .D</h1>
              <p className="text-gray-600">I was amazed by how the AI-powered tool transformed my writing process. It helped me craft engaging content faster than ever
               before. This tool is a game-changer for content creators like me.</p>
            </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full px-4 ">
            <div className=" items-center bg-white p-8 rounded-lg shadow">
              <div className='flex justify-between'>
                <div className=''>
                <img src={avatar2} alt='avatar2' />

                </div>
                <div className='flex'>
                <img src={starpurple} alt="stars1" />
              <img src={starpurple} alt="stars1" />
              <img src={starhalf} alt="stars1" />
              <img src={starhalf} alt="stars1" />
              </div>
              </div>
             
            <div>
            <h1 className='text-2xl primary-font'>Mike .H</h1>
              <p className="text-gray-600">As a blogger, time is of the essence. With this AI tool, I've seen a significant boost in my writing productivity. 
              The suggestions and refinements have made my content more polished and captivating.</p>
            </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="w-full px-4 ">
            <div className=" items-center bg-white p-8 rounded-lg shadow">
              <div className='flex justify-between'>
                <div className=''>
                  <img src={avatar3} alt="avatar3" />
                </div>
                <div className='flex'>
                <img src={starpurple} alt="stars1" />
              <img src={starpurple} alt="stars1" />
              <img src={starpurple} alt="stars1" />
              <img src={starhalf} alt="stars1" />
              </div>
              </div>
             
            <div>
            <h1 className='text-2xl primary-font'>Diana .M</h1>
              <p className="text-gray-600">Running a business leaves little time for content creation. Thanks to the AI tool, I can now create high-quality posts effortlessly.
               It has become an indispensable part of my content strategy</p>
            </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;