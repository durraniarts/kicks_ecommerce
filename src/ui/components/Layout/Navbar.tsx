import React from 'react';
import { Logo } from '../icons/Logo';
import { Dropdown, Hamburger, Profile, Search } from '../icons/Icons';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='px-4 lg:px-14 ' style={{ fontFamily: 'var(--font1)' }}>
            <section className=' bg-kick-white w-full mt-8 rounded-xl lg:rounded-3xl'>
                <div className='lg:px-16 px-4 lg:py-8 py-4  text-black text-base font-semibold flex  justify-between items-center'>
                    <ul className='hidden w-fit items-center gap-10 lg:flex '>
                        <li>
                            <Link href={'New Drops'}>
                                🔥 New Drops
                            </Link>
                        </li>
                        <li className='flex items-center gap-[2px]'>
                            <Link href={'Men'}>
                                Men
                            </Link>
                            <Dropdown width={12} height={12} rotate={180} />
                        </li>
                        <li className='flex items-center gap-[2px]'>
                            <Link href={'women'}>
                                Women
                            </Link>
                            <Dropdown width={12} height={12} rotate={180} />
                        </li>

                    </ul>

                    <Hamburger height={18} width={18} className='lg:hidden flex items-center' fillColor='black' />

                    <div className='absolute left-1/2 flex justify-center items-center'>
                        <Logo width={128} height={32} className='absolute hidden lg:block' />
                        <Logo width={88} height={20} className='absolute block lg:hidden ' />
                    </div>

                    <div className='hidden gap-10 lg:w-[301px] justify-end items-center lg:flex'>
                        <Search width={28} height={28} strokeWidth={2} />
                        <Profile width={28} height={28} strokeColor='black' />
                    </div>

                    <div className='flex lg:hidden gap-4 lg:w-[301px] justify-end items-center'>
                        <Search width={16} height={16} strokeWidth={2} />
                        <Profile width={16} height={16} strokeColor='black' />
                    </div>
                </div>
            </section>
        </nav>

    );
};

export default Navbar;