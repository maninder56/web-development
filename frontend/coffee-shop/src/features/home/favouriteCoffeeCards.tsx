'use client'

import PrimaryButton from '@/components/ui/primaryButton';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react'

const cardArray: {
  id: number;
  title: string;
  detail: string;
  imageUrl: string;
}[] = [
  {
    id: 1,
    title: 'Caramel Latte',
    detail: 'Smooth espresso blended with steamed milk and rich caramel syrup, finished with a delicate layer of foam.',
    imageUrl: '/pictures/products/caramel-latte.jpg',
  },
  {
    id: 2,
    title: 'Iced Vanilla Latte',
    detail: 'Freshly pulled espresso, chilled milk, and sweet vanilla syrup served over ice for a refreshing coffee break.',
    imageUrl: '/pictures/products/iced-matcha-latte.jpg',
  },
  {
    id: 3,
    title: 'Chocolate Fudge Cake',
    detail: 'Moist chocolate sponge layered with rich chocolate ganache and finished with delicate chocolate shavings.',
    imageUrl: '/pictures/products/chocolate-fudge-cake.jpg',
  },
  {
    id: 4,
    title: 'Butter Croissant',
    detail: 'A golden, flaky pastry with buttery layers, freshly baked to a crisp outside and a soft, airy centre.',
    imageUrl: '/pictures/products/butter-croissant.jpg',
  },
  {
    id: 5,
    title: 'Berry Lemonade',
    detail: 'A refreshing blend of juicy berries and fresh lemon, served over ice for a bright and fruity finish.',
    imageUrl: '/pictures/products/berry-lemonade.jpg',
  },
  {
    id: 6,
    title: 'Blueberry Muffin',
    detail: 'A soft, golden muffin packed with juicy blueberries and finished with a lightly sweet, crumbly top.',
    imageUrl: '/pictures/products/blueberry-muffin.jpg',
  },
]; 

const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 50 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -50 }),
}

export default function FavouriteCoffeeCards() {
    const [[index, direction], setPage] = useState<[number, number]>([0, 1]); 
    const card = cardArray[index]; 
    
    function paginate(dir: number) {
        setPage(([prev]) => [
            (prev + dir + cardArray.length) % cardArray.length, 
            dir
        ]); 
    }

    function handleButtonClick(dir: 1 | -1) {
        paginate(dir); 
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            paginate(1); 
        }, 5000);

        return () => clearInterval(timer); 
    }, [index]); 

    return (
        <div 
            className={`
                grid grid-cols-2 gap-4 w-full max-w-lg 
                m-0 p-2 
                overflow-hidden
                lg:grid-cols-5 lg:max-w-4xl
            `}
        >
            <div 
                className={`
                    flex justify-center
                    col-span-2 justify-self-center mb-5 w-full
                    lg:col-start-2 lg:col-span-3
                `}
                aria-live='polite'
            >
                <AnimatePresence mode='wait' custom={direction}>
                    <motion.div key={card.id}
                        custom={direction}
                        variants={variants}
                        initial='enter'
                        animate='center'
                        exit='exit'
                        transition={{ duration: 0.1 }}
                        className='p-5 bg-surface-primary rounded-2xl sm:rounded-3xl shadow-lg max-w-lg'
                    >
                        <h2 className='mt-4 font-heading text-2xl md:text-3xl text-text-primary text-center'>{card.title}</h2>
                        <p className='my-2 font-body text-base md:text-lg text-text-secondary text-center'>{card.detail}</p>
                        <div className='mt-8 mb-4 flex justify-center'>
                            <Image src={card.imageUrl} alt={`${card.title} picture`} 
                                width={1287} height={1931}
                                className='max-w-sm h-100 w-full object-cover rounded-2xl sm:rounded-3xl'
                            /> 
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div 
                className={`
                    flex justify-center
                    lg:col-start-1 lg:row-start-1
                    lg:flex-col lg:items-center
                `}
            >
                {/* Back button */}
                <PrimaryButton onClick={() => handleButtonClick(-1)} className='w-22 h-15 sm:w-25 md:w-30 md:h-17'>
                    <svg className='m-auto w-4 md:w-5'  viewBox='0 0 8 14' fill='none'>
                        <path d='M7 13 1 7l6-6' stroke='#f7deb7' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                    </svg>
                </PrimaryButton>
            </div>
            <div 
                className={`
                    flex justify-center
                    lg:col-start-5 lg:row-start-1
                    lg:flex-col lg:items-center
                `}
            >
                {/* Next button */}
                <PrimaryButton onClick={() => handleButtonClick(1)} className='w-22 h-15 sm:w-25 md:w-30 md:h-17'>
                    <svg className='m-auto w-4 md:w-5' viewBox='0 0 8 14' fill='none' >
                        <path d='m1 1 6 6-6 6' stroke='#f7deb7' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                    </svg>
                </PrimaryButton>
            </div>
        </div>
    ); 
}