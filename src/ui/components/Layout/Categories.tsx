"use client";
import React, { useRef, useState } from 'react';
import { Next_previous } from '../icons/Icons';
import Category_card from '../common/Category_card';

const Categories = () => {
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

    const items: Array<any> = Array(6).fill(5);

    return (
        <section className=' bg-kick-black min-h-[100vh] flex w-full flex-col gap-16  '>
            <div className='mt-24 flex w-full justify-between h-fit items-baseline px-4 lg:px-14'>
                <h5 className='lg:text-7xl sm:text-4xl text-2xl font-semibold w-fit h-fit text-kick-white'>
                    CATEGORIES
                </h5>
                <div className='flex h-fit gap-4 '>

                    <Next_previous onClick={() => {
                        scrollToIndex(count - 4);
                        if (count !== 2) setCount(count - 2);
                    }} width={16} height={16} strokeWidth={2} className=' cursor-pointer bg-kick-white w-10 h-10 flex justify-center items-center rounded-lg' strokeColor='#232321' rotate={180} />
                    <Next_previous onClick={() => {
                        scrollToIndex(count);
                        if (count !== items.length) setCount(count + 2);
                    }} width={16} height={16} strokeWidth={2} className=' cursor-pointer bg-kick-white w-10 h-10 flex justify-center items-center rounded-lg' strokeColor='#232321' />
                </div>
            </div>
            <div ref={carouselRef} className='ml-4 lg:ml-14 overflow-x-auto scroll-smooth    flex rounded-tl-[64px] no-scrollbar snap-x snap-mandatory  '>
                {items.map((item, index) => (

                    <Category_card key={index} />
                ))}

            </div>
        </section>
    );
};

export default Categories;;