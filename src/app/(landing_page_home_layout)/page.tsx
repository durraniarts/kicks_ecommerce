import { Check, Dropdown, Heart, Profile, Search, Star } from '@/ui/components/icons/Icons';
import { Logo } from '@/ui/components/icons/Logo';
import Categories from '@/ui/components/Layout/Categories';
import Hero from '@/ui/components/Layout/Hero';
import ReviewsSection from '@/ui/components/modules/ReviewsSection';

import Image from 'next/image';
import React from 'react';

const Landing = () => {
  return (
    <div className='mt-6 w-full ' style={{ fontFamily: 'var(--font1)' }}>
      <Hero />
      <Categories />
      <ReviewsSection />
    </div>
  );
};

export default Landing;