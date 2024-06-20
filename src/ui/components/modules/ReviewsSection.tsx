import Link from 'next/link';
import React from 'react';
import ReviewCard from '../common/ReviewCard';

const img_src = ['/assets/review.png', '/assets/review1.png', '/assets/review2.png'];

const ReviewsSection = () => {
    return (
        <section className='mx-4 lg:mx-14 mt-32 gap-12 flex flex-col'>
            <div className='flex justify-between items-center'>
                <h5 className='font-semibold lg:text-7xl xs:text-3xl sm:text-5xl text-2xl text-kick-black  uppercase'>REVIEWS</h5>
                <Link href={'/'} className='bg-kick-blue text-kick-white px-4 py-2 sm:px-6 sm:py-3  rounded-md sm:rounded-lg sm:text-sm text-xs font-medium text-nowrap'>
                    See All
                </Link>
            </div>
            <div className='w-full flex overflow-x-scroll snap-x snap-mandatory gap-4'>
                {
                    img_src.map((src, index) => (
                        <ReviewCard src={src} key={index} />
                    ))
                }


            </div>
        </section>
    );
};

export default ReviewsSection;