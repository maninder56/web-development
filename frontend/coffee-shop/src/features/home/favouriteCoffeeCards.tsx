'use client'

import PrimaryButton from '@/components/ui/primaryButton';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, number, Variant } from 'motion/react'

const cardArray: {
        id: number,  
        title: string, 
        detail: string, 
        imageUrl: string, 
}[] = [
    {
        id: 1, 
        title: 'The Cozy Bean',
        detail: 'A warm neighborhood coffee shop serving freshly brewed coffee, pastries, and cozy vibes.',
        imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb'
    },
    {
        id: 2, 
        title: 'Brew & Bloom',
        detail: 'Specialty coffee paired with homemade cakes and a beautiful selection of fresh flowers.',
        imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085'
    },
    {
        id: 3, 
        title: 'Morning Roast',
        detail: 'Start your day with rich espresso, smooth lattes, and freshly baked breakfast treats.',
        imageUrl: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0'
    },
    {
        id: 4, 
        title: 'Caffeine Corner',
        detail: 'A modern coffee bar featuring cold brews, handcrafted drinks, and plenty of workspace.',
        imageUrl: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e'
    },
    {
        id: 5, 
        title: 'The Daily Grind',
        detail: 'Locally roasted beans, delicious cappuccinos, and a relaxed atmosphere for coffee lovers.',
        imageUrl: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247'
    }
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
        <div className='m-1 grid grid-cols-2 gap-4 w-full max-w-lg'>
            <div className='col-span-2 justify-self-center mb-5 w-full' aria-live='polite'>
                <AnimatePresence mode='wait' custom={direction}>
                    <motion.div key={card.id}
                        custom={direction}
                        variants={variants}
                        initial='enter'
                        animate='center'
                        exit='exit'
                        transition={{ duration: 0.1 }}
                        className='p-5 bg-surface-primary rounded-2xl sm:rounded-3xl shadow-xl'
                    >
                        <h2 className='mt-4 font-heading text-2xl md:text-3xl text-text-primary text-center'>{card.title}</h2>
                        <p className='my-2 font-body text-base md:text-lg text-text-secondary text-center'>{card.detail}</p>
                        <div className='mt-8 mb-4 flex justify-center'>
                            <Image src={'/pictures/coffeeCup.avif'} alt={`${card.title} picture`} 
                                width={1287} height={1931}
                                className='max-w-sm h-100 w-full object-cover rounded-2xl sm:rounded-3xl'
                            /> 
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className='flex justify-center'>
                <PrimaryButton onClick={() => handleButtonClick(-1)} className='w-30 h-15'>
                    <span className='m-auto'>Back</span>
                </PrimaryButton>
            </div>
            <div className='flex justify-center'>
                <PrimaryButton onClick={() => handleButtonClick(1)} className='w-30 h-15'>
                    <span className='m-auto'>Next</span>
                </PrimaryButton>
            </div>
        </div>
    ); 
}