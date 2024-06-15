import React from 'react';
import Navbar from '../modules/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import NewItemsDrop from '../modules/NewItemsDrop';

const Hero = () => {
  return (
    <header className=''>
      <section className=' flex flex-col gap-4 '>
        <div>
          <h1 className='text-[15vw] uppercase font-bold font-rubik'>
            Do it<span className='text-kick-blue'>{" "}right</span>
          </h1>
        </div>
        <div className='flex flex-col md:gap-24 gap-6 '>

          <div className='  flex justify-center items-end '>
            <div className='flex  absolute w-full sm:px-16 px-12 lg:px-28 lg:pb-12 sm:pb-12 pb-8 '>
              <div className='flex justify-between w-full items-end gap-2'>

                <div className='flex flex-col lg:gap-6 gap-2 text-kick-white sm:w-1/2 w-full'>
                  <h2 className='lg:text-7xl sm:text-4xl text-2xl font-semibold'>NIKE AIR MAX</h2>
                  <p className='font-font2 lg:text-2xl sm:text-lg text-sm font-semibold '>
                    Nike introducing the new air max for everyone's comfort
                  </p>
                  <Link href={'/'} className='flex justify-center items-center sm:px-6 sm:py-3 px-4 py-2 w-fit bg-kick-blue sm:rounded-lg rounded-md sm:text-sm text-xs font-medium text-kick-white '>Shop Now</Link>
                </div>
                <div className='flex flex-col lg:gap-4 gap-2 min-w-fit'>
                  <Image src={'/assets/hero_sub_img.png'} width={160} height={160} alt='' className='lg:w-[160px] lg:h-[160px] sm:w-[100px] sm:h-[100px] w-[64px] h-[64px]' />
                  <Image src={'/assets/hero_sub_img_2.png'} width={160} height={160} alt='' className='lg:w-[160px] lg:h-[160px] sm:w-[100px] sm:h-[100px] w-[64px] h-[64px]' />
                </div>
              </div>
            </div>


            <Image height={750} width={1320} src={'/assets/Hero_img.png'} alt='' className='w-full lg:max-h-full lg:aspect-auto aspect-square object-cover rounded-3xl' />

            <div className='absolute self-start -left-12 sm:-left-14 lg:-left-6 -rotate-90 lg:mt-36 sm:mt-28 mt-24 bg-kick-black text-kick-white lg:px-4 px-3 lg:py-3 py-2 rounded-b-xl lg:text-base sm:text-sm text-xs' >
              Nike product of the year
            </div>
          </div>
          <NewItemsDrop />
        </div>
      </section>
    </header>
  );
};

export default Hero;