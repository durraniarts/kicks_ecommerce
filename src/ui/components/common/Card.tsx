import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = () => {
    return (
        <section className='flex basis-1/4 flex-col gap-4'>

            <div className='flex w-full sm:border-[10px] border-[6px] border-kick-white rounded-2xl sm:rounded-[28px]'>
                <Image width={450} height={450} alt='' src={'/assets/shoes.png'} className='w-full h-auto' />
            </div>
            <div className='flex flex-col sm:gap-4 gap-2'>
                <h4 className='font-semibold text-kick-black text-lg sm:text-xl lg:text-2xl'>ADIDAS 4DFWD X PARLEY RUNNING SHOES</h4>
                <Link href={'/'} className=' bg-kick-black flex-grow flex text-white text-xs sm:text-sm font-medium sm:py-4 py-3 justify-center items-center gap-1 rounded-lg'>View Product - <span className='text-kick-yellow'>{" $125"}</span></Link>
            </div>
        </section>
    );
};

export default Card;