import React from 'react';
import { Logo } from '../icons/Logo';
import Link from 'next/link';
import { Facebook, Instagram, Music2, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <div className='mx-4 lg:mx-14 mt-32' style={{ fontFamily: 'var(--font1)' }}>
            <div className=' bg-kick-blue lg:rounded-[48px] rounded-[24px] pb-20 '>
                <div className=' md:p-12 p-4 lg:p-16  flex justify-between lg:items-center items-start lg:flex-row flex-col lg:gap-4 gap-8'>
                    <div className='lg:w-2/5 w-full flex flex-col gap-4 '>
                        <h4 className='text-kick-white md:text-4xl text-3xl lg:text-5xl font-semibold uppercase'>Join our KicksPlus Club & get 15% off</h4>
                        <p className='font-semibold text-xl text-kick-white'>Sign up for free! Join the community.</p>
                        <div className='flex md:flex-row flex-col gap-2 min-h-12 mt-4 '>
                            <input className=' h-12 border border-kick-white md:rounded-xl rounded-md flex-grow bg-transparent ' />
                            <button className='md:text-lg text-sm font-medium px-6 py-2 bg-kick-black text-kick-white md:rounded-xl rounded-md'>
                                Submit
                            </button>
                        </div>
                    </div>

                    <Logo width={'auto'} height={88} fillColor={'#FAFAFA'} className=' lg:w-[300px] max-w-[300px] h-auto' />
                </div>
            </div>

            <div className=' bg-kick-black rounded-[48px] -mt-20 flex flex-col justify-center items-center' >
                <div className='h-3/4 flex flex-col lg:grid lg:grid-cols-5  p-10 w-full pb-0 gap-10 lg:gap-2'>
                    <div className='lg:col-span-2  flex flex-col md:gap-4 gap-2'>
                        <h6 className='text-kick-yellow font-semibold md:text-4xl text-2xl'>About us</h6>
                        <p className='font-semibold md:text-xl text-base text-kick-white w-3/4' style={{ fontFamily: 'var(--font2)' }}>
                            We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.
                        </p>
                    </div>
                    <div className='lg:col-span-1 flex flex-col md:gap-4 gap-2'>
                        <h6 className='text-kick-yellow font-semibold md:text-2xl text-xl'>Categories</h6>
                        <ul className='font-semibold md:text-xl text-base text-kick-white flex flex-col gap-2' style={{ fontFamily: 'var(--font2)' }}>
                            <li className=''>
                                Runners
                            </li>
                            <li className=''>
                                Sneakers
                            </li>
                            <li className=''>
                                Basketball
                            </li>
                            <li className=''>
                                Outdoor
                            </li>
                        </ul>
                    </div>
                    <div className='lg:col-span-1 flex flex-col md:gap-4 gap-2'>
                        <h6 className='text-kick-yellow font-semibold md:text-2xl text-xl'>Company</h6>
                        <ul className='font-semibold md:text-xl text-base text-kick-white flex flex-col gap-2' style={{ fontFamily: 'var(--font2)' }}>
                            <li className=''>
                                About
                            </li>
                            <li className=''>
                                Contact
                            </li>

                            <li className=''>
                                Blogs
                            </li>
                        </ul>
                    </div>
                    <div className='lg:col-span-1 flex flex-col md:gap-4 gap-2'>
                        <h6 className='text-kick-yellow font-semibold  md:text-2xl text-xl'>Follow Us</h6>
                        <ul className='  flex  gap-3' style={{ fontFamily: 'var(--font2)' }}>
                            <li className=''>
                                <Facebook color='white' width={30} height={30} />
                            </li>
                            <li className=''>
                                <Instagram color='white' width={30} height={30} />
                            </li>
                            <li className=''>
                                <Twitter color='white' width={30} height={30} />
                            </li>
                            <li className=''>
                                <Music2 color='white' width={30} height={30} />
                            </li>
                        </ul>
                    </div>

                </div>
                <div className='overflow-hidden h-fit w-full flex justify-center'>
                    <Logo width={'auto'} height={300} fillColor={'#FAFAFA'} className=' relative -bottom-24
                     w-[90%]' />
                </div>
            </div>
        </div>
    );
};

export default Footer;