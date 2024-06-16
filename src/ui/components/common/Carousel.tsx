"use client";
import React, { useRef } from 'react';


const scrollToIndex = (index: number, ref: any, items: any) => {
    const container = ref.current;
    const scrollAmount = container.scrollWidth / items.length;
    container.scrollTo({
        left: scrollAmount * index,
        behavior: 'smooth',
    });
};

export const Carousel = ({ items }: any) => {
    const carouselRef = useRef(null);

    return (
        <CarouselContainer>
            <PrevButton onClick={() => scrollToIndex(0, carouselRef, items)}>Prev</PrevButton>
            <CarouselWrapper ref={carouselRef}>
                {items.map((item, index) => (
                    <CarouselItem key={index}>{item}</CarouselItem>
                ))}
            </CarouselWrapper>
            <NextButton onClick={() => scrollToIndex(items.length - 1)}>Next</NextButton>
        </CarouselContainer>
    );
};


export const PrevButton = ({ child }) => {
    return (
        <div>Carousel</div>
    );
}



