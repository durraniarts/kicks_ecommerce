import Link from 'next/link';
import React from 'react';

const NewItemsDrop = () => {
    return (
        <div className='flex flex-col min-h-[100vh] '>
            <div className='w-full flex items-end justify-between gap-2'>
                <div className='flex basis-2/3'>
                    <h3 className='font-semibold lg:text-7xl xs:text-3xl sm:text-5xl text-2xl text-kick-black  uppercase'>
                        Don’t miss out new drops
                    </h3>
                </div>
                <Link href={'/'} className='bg-kick-blue text-kick-white px-4 py-2 sm:px-6 sm:py-3  rounded-md sm:rounded-lg sm:text-sm text-xs font-medium text-nowrap'>
                    Shop New Drops
                </Link>
            </div>

        </div>
    );
};

export default NewItemsDrop;