import Link from 'next/link';
import React from 'react';
import Card from '../common/Card';

const NewItemsDrop = () => {
    return (
        <div className='flex flex-col  lg:gap-8 gap-6  '>
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
            <div className='grid lg:gap-4 gap-y-6 gap-x-4 lg:grid-cols-4 grid-cols-2'>

                <Card />
                <Card />
                <Card />
                <Card />
            </div>

        </div>
    );
};

export default NewItemsDrop;