"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Link_action, Next_previous } from '../icons/Icons';
import Category_card from '../common/Category_card';
import CategoryCardVertical from '../common/CategoryCardVertical';
import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';
import Link from 'next/link';

const Categories = () => {
    const isAbove = useMediaQuery("(min-width: 768px)");
    const carouselRef = useRef<any>(null);
    const [count, setCount] = useState<number>(2);

    const scrollToIndex = (index: number) => {
        const container: any | null = carouselRef.current;
        const scrollAmount = carouselRef.current.children[0].clientWidth;

        container.scrollTo({
            left: scrollAmount * index,
            behavior: 'smooth',
        });
    };

    const items: Array<any> = Array(4).fill(5);

    return (
        <section className=' bg-kick-black  flex w-full flex-col md:gap-16 gap-10  '>
            <div className='mt-24 flex w-full justify-between h-fit items-baseline px-4 lg:px-14 '>
                <h5 className='font-semibold lg:text-7xl xs:text-3xl sm:text-5xl text-2xl uppercase text-kick-white'>
                    CATEGORIES
                </h5>
                <div className='flex h-fit gap-4 '>

                    <Next_previous onClick={() => {
                        scrollToIndex(count - 4);
                        if (count !== 2) setCount(count - 2);
                    }} width={16} height={16} strokeWidth={2} className=' cursor-pointer bg-kick-white w-10 h-10 flex justify-center items-center rounded-lg' strokeColor='#232321' rotate={180} />
                    <Next_previous onClick={() => {
                        scrollToIndex(count);
                        if (count !== items.length) {
                            if (window.innerWidth > 768) setCount(count + 2);
                        };
                    }} width={16} height={16} strokeWidth={2} className=' cursor-pointer bg-kick-white w-10 h-10 flex justify-center items-center rounded-lg' strokeColor='#232321' />
                </div>
            </div>

            {isAbove && (
                <div ref={carouselRef} className='mx-4 lg:mx-0  lg:ml-14 overflow-x-scroll scroll-smooth    flex  rounded-tl-[64px] no-scrollbar snap-x snap-mandatory  '>
                    {items.map((item, index) => (

                        <Category_card key={index} />
                        // </div>
                    ))}
                </div>)
            }

            {
                !isAbove && (

                    <div className=' flex pb-8  mx-4 overflow-x-scroll scroll-smooth rounded-tl-[42px] no-scrollbar snap-x snap-mandatory' ref={carouselRef}>

                        {items.map((item, index) => (
                            <div className='flex  flex-col min-w-full'>
                                <div className='bg-[#ECEEF0] flex min-w-[50%] flex-col p-10 justify-center items-center snap-start '>
                                    <Image src={'/assets/category_img.png'} width={450} height={450} alt='' className='aspect-square object-cover' />
                                    <div className='flex w-full text-left justify-between'>
                                        <h5 className='font-semibold text-2xl sm:text-3xl'>LIFESTYLE SHOES</h5>
                                        <Link href={'/'}>
                                            <Link_action width={12} height={12} strokeWidth={2} className=' cursor-pointer bg-kick-black w-8 h-8 flex justify-center items-center rounded-lg' strokeColor='#FAFAFA' />
                                        </Link>
                                    </div>
                                </div>
                                <div className='bg-[#F6F6F6] flex min-w-[50%] flex-col p-10 justify-center items-center snap-start '>
                                    <Image src={'/assets/category_img2.png'} width={450} height={450} alt='' className='aspect-square object-cover' />
                                    <div className='flex w-full text-left justify-between'>
                                        <h5 className='font-semibold text-2xl sm:text-3xl'>LIFESTYLE SHOES</h5>
                                        <Link href={'/'}>
                                            <Link_action width={12} height={12} strokeWidth={2} className=' cursor-pointer bg-kick-black w-8 h-8 flex justify-center items-center rounded-lg' strokeColor='#FAFAFA' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                )
            }
        </section>
    );
};

export default Categories;;