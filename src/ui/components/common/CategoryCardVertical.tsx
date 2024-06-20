import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Link_action } from '../icons/Icons';

const CategoryCardVertical = () => {
    return (
        <div className='flex flex-col w-full '>
            <div className='bg-[#ECEEF0] flex min-w-[200px] flex-col p-10 justify-center items-center snap-start '>
                <Image src={'/assets/category_img.png'} width={450} height={450} alt='' className='aspect-square object-cover' />
                <div className='flex w-full text-left justify-between'>
                    <h5 className='font-semibold text-4xl'>LIFESTYLE SHOES1</h5>
                    <Link href={'/'}>
                        <Link_action width={16} height={16} strokeWidth={2} className=' cursor-pointer bg-kick-black w-10 h-10 flex justify-center items-center rounded-lg' strokeColor='#FAFAFA' />
                    </Link>
                </div>
            </div>
            <div className='bg-[#ECEEF0] flex min-w-full flex-col p-10 justify-center items-center snap-start '>
                <Image src={'/assets/category_img.png'} width={450} height={450} alt='' className='aspect-square object-cover' />
                <div className='flex w-full text-left justify-between'>
                    <h5 className='font-semibold text-4xl'>LIFESTYLE SHOES2</h5>
                    <Link href={'/'}>
                        <Link_action width={16} height={16} strokeWidth={2} className=' cursor-pointer bg-kick-black w-10 h-10 flex justify-center items-center rounded-lg' strokeColor='#FAFAFA' />
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default CategoryCardVertical;