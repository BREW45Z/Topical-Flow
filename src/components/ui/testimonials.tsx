// Testimonials.tsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import avatar1 from '../assets/Avatar (1).png'

const Testimonials: React.FC = () => {
  const testimonialsData = [
    {
      message: "As a blogger, time is of the essence. With this AI tool, I've seen a significant boost in my writing productivity.The suggestions and refinements have made my content more polished and captivating",
      name: "Jenny",
      image: avatar1
    },
    {
      message: "Short testimonial 2.",
      name: "Jane",
      image: "url-to-image2.jpg",
    },
    // Add more short testimonials as needed
  ];

  const sliderSettings = {
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    dots: true,
    className: 'mx-auto w-[450px] justify-center items-center text-white primary-font',


  };

  return (
    <div className="mx-auto w-[400px] justify-center items-center text-white primary-font">
      <Slider {...sliderSettings}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="text-center primary-font justify-center">
            <p className='primary-font text-xl'>{testimonial.message}</p>
            <img src={testimonial.image} alt='testimonial 1' className="mx-auto mt-4 rounded-full" />
            <p className="font-bold text-white primary-font mt-4">{testimonial.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
