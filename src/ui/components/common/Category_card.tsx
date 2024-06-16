import Image from 'next/image';
import React from 'react';
import { Link_action } from '../icons/Icons';

const Category_card = () => {
    return (
        <div className='bg-[#ECEEF0] flex min-w-[50%] flex-col p-16 justify-center items-center snap-start '>
            <Image src={'/assets/category_img.png'} width={450} height={450} alt='' className='aspect-square object-cover' />
            <div className='flex w-full text-left justify-between'>
                <h5 className='font-semibold text-4xl'>LIFESTYLE SHOES</h5>
                <Link_action width={16} height={16} strokeWidth={2} className=' bg-kick-black w-10 h-10 flex justify-center items-center rounded-lg' strokeColor='#FAFAFA' />
            </div>
        </div>
    );
};

export default Category_card;