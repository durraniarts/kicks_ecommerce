import Image from 'next/image';
import React from 'react';

const ReviewCard = ({ src }: any) => {
    return (
        <div className='flex  flex-col md:min-w-[50%] lg:min-w-[30%] min-w-full  lg:w-1/3 overflow-scroll  rounded-[32px] bg-kick-white snap-start' >
            <div className='flex gap-2 justify-between p-8'>
                <div className='flex flex-col gap-2'>
                    <h6 className='font-semibold text-xl'>Good Quality</h6>
                    <p className='font-normal text-base'>I highly recommend shopping from kicks</p>
                    <div className='flex items-center gap-2'>⭐⭐⭐⭐⭐ <span className='font-semibold text-base'>5.0</span></div>
                </div>
                <div className=' border rounded-full border-zinc-500 min-w-16 h-16'>
                    <Image height={64} width={64} alt='' src={'/assets/review_avatar.png'} className='w-full h-full' />
                </div>
            </div>
            <div>
                <Image height={500} width={500} alt='' src={src} className='h-[325px] w-full content-center object-cover rounded-b-[32px]' />
            </div>
        </div>
    );
};

export default ReviewCard;