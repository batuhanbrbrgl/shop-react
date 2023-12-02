import React from 'react';
import ImgHero from '../img/heros.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return <div className=' h-[765px] bg-hero bg-no-repeat py-16 bg-cover bg-center'>
    <div className='container mx-auto flex justify-around h-full'>
    <div className='flex flex-col justify-center'>
      <div>
        <div className='font-semibold flex items-center uppercase'>
          <div className='w-10 bg-red-500 h-[2px] mr-3'>

          </div>
          New Season
        </div>
        <h1 className='text-[70px] leading-[1.1] font-light mb-4'>NEW SALE STYLISH
          <br />
          <span className='font-semibold'>
            WOMENS
          </span>
       
        </h1>
      </div>
      <Link className='self-start uppercase font-semibold border-b-2 border-primary' to={'/'}
       >
         Discover More
        </Link>
    </div>
    <div className='hidden lg:block'>
          <img className=' ' src={ImgHero} alt='hero' />
      </div>
    </div>

  </div>;
};

export default Hero;
