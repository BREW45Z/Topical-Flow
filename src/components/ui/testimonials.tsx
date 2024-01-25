
import React from 'react';
import star_half from '../assets/star_half.svg'
import person1 from '../assets/person1.png'
import person2 from '../assets/person2.png'
import person3 from '../assets/person3.png'




const Testimonials: React.FC = () => {
  return (
    <div>

    <div className=" items-center mt-10 flex justify-center px-10  bg-yellow-100">
      {/* Testimonial 1 */}
      <div className=" mt-10 mr-10 w-[350px] h-[250px] mb-4 bg-white [295.69px] ">
      <div className=' absolute justify-start flex '>
      <img src={star_half} alt="star_half" className='' />
      <img src={star_half} alt="star_half" className='' />
      <img src={star_half} alt="star_half" className='' />
    </div>

  <div className=' mb-10 mr-10  justify-between items-center w-full '>
    <div className=' px-4 relative flex-col mt-10'>
      <img src={person1} alt="person1"  className=' top-10'/>
      <h4 className='primary-font text-2xl '>Sara .D</h4>
      <p className='text-sm justify-center items-center'>
      I was amazed by how the AI-powered tool transformed my writing process. It helped me craft engaging content faster 
      than ever before. This tool is a game-changer for content creators like me
      </p>
    </div>
  </div>
</div>


<div className="  mt-10 mr-10  w-[350px] h-[250px] mb-4 bg-white [295.69px] border-1 ">
      <div className=' absolute justify-start flex '>
      <img src={star_half} alt="star_half" className='' />
      <img src={star_half} alt="star_half" className='' />
      <img src={star_half} alt="star_half" className='' />
    </div>

  <div className=' mb-10 justify-between items-center w-full '>
    <div className=' px-4 relative flex-col mt-10'>
      <img src={person2} alt="person1"  className=' top-10'/>
      <h4 className='primary-font text-2xl '>Mike .H</h4>
      <p className='text-sm justify-center items-center'>
      As a blogger, time is of the essence. With this AI tool, I've seen a significant boost in my writing productivity. The suggestions 
      and refinements have made my content more polished and captivating
      </p>
    </div>
  </div>
</div>


<div className="  mt-10 w-[350px] h-[250px] mb-4 bg-white [295.69px] border-1 ">
      <div className=' absolute justify-start flex '>
      <img src={star_half} alt="star_half" className='' />
      <img src={star_half} alt="star_half" className='' />
      <img src={star_half} alt="star_half" className='' />
    </div>

  <div className=' mb-10 justify-between items-center w-full '>
    <div className=' px-4 relative flex-col mt-10'>
      <img src={person3} alt="person1"  className=' top-10'/>
      <h4 className='primary-font text-2xl '>Daniel .K</h4>
      <p className='text-sm justify-center items-center'>
      Running a business leaves little time for content creation. Thanks to the AI tool, I can now create high-quality posts effortlessly. 
      It has become an indispensable part of my content strategy
      </p>
    </div>
  </div>
</div>
</div>
</div>

  );
};

export default Testimonials;
