'use client'

import PrimaryButton from '@/components/ui/primaryButton';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react'

const reviewArray: {
    id: number; 
    name: string; 
    review: string; 
    imageId: number; 
    imageUrl: string
}[] = [
    {
        id: 1,
        name: 'Sarah Johnson',
        review: 'Absolutely loved my experience! The quality was excellent and everything arrived exactly as described. I\'ll definitely be ordering again.',
        imageId: 10, 
        imageUrl: ''
    },
    {
        id: 2,
        name: 'Michael Thompson',
        review: 'Great service from start to finish. The product exceeded my expectations and the delivery was surprisingly quick.',
        imageId: 20, 
        imageUrl: ''
    },
    {
        id: 3,
        name: 'Emily Davis',
        review: 'I\'m really impressed with the quality. It looks even better in person and feels very well made. Highly recommended!',
        imageId: 30, 
        imageUrl: ''
    },
    {
        id: 4,
        name: 'James Wilson',
        review: 'A fantastic experience overall. The website was easy to use, my order arrived on time, and the product was exactly what I wanted.',
        imageId: 40, 
        imageUrl: ''
    },
]; 


const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 50 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -50 }),
}

export default function CustomersReviewCard() {
    const [[index, direction], setPage] = useState<[number, number]>([0, 1]); 
    const review = reviewArray[index]; 
    
    function paginate(dir: number) {
        setPage(([prev]) => [
            (prev + dir + reviewArray.length) % reviewArray.length, 
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
        <div className='m-1 px-2 py-6 w-full max-w-md bg-surface-primary rounded-2xl overflow-hidden'>
            <AnimatePresence mode='wait' custom={direction}>
                <motion.div key={review.imageId} 
                    custom={direction}
                    variants={variants}
                    initial='enter'
                    animate='center'
                    exit='exit'
                    transition={{ duration: 0.1 }}
                    className='flex justify-center'>
                    <Image src={'/pictures/coffeeCup.avif'} alt='picture'
                        width={1287} height={1931} 
                        className='max-w-sm h-96 w-full object-cover rounded-2xl'
                    />
                </motion.div>
            </AnimatePresence>
            <AnimatePresence mode='wait' custom={direction}>
                <motion.div key={review.id} 
                    custom={direction}
                    variants={variants}
                    initial='enter'
                    animate='center'
                    exit='exit'
                    transition={{ duration: 0.1 }}
                    className='mx-1 my-6 text-text-primary min-[450px]:mx-4'>
                    <svg className='w-5' viewBox='0 0 800 744' fill='none'>
                        <path d='M344.448 32.7743V166.269C344.448 184.374 329.772 199.043 311.667 199.043C247.071 199.043 211.934 265.295 207.064 396.056H311.667C329.772 396.056 344.448 410.739 344.448 428.837V710.704C344.448 728.8 329.772 743.472 311.667 743.472H32.7743C14.6626 743.472 0 728.788 0 710.704V428.837C0 366.153 6.31148 308.63 18.7534 257.847C31.5139 205.776 51.1015 160.248 76.9547 122.524C103.557 83.7543 136.834 53.3313 175.867 32.1372C215.163 10.8148 260.861 0 311.678 0C329.772 0 344.448 14.6695 344.448 32.7743ZM767.217 199.045C785.312 199.045 800 184.362 800 166.271V32.7766C800 14.6718 785.314 0.00229049 767.217 0.00229049C716.42 0.00229049 670.715 10.8194 631.432 32.1395C592.392 53.3336 559.098 83.7566 532.491 122.526C506.647 160.251 487.059 205.781 474.296 257.863C461.861 308.662 455.55 366.185 455.55 428.839V710.706C455.55 728.802 470.231 743.474 488.331 743.474H767.214C785.31 743.474 799.984 728.791 799.984 710.706V428.837C799.984 410.741 785.312 396.056 767.214 396.056H664.104C668.9 265.298 703.524 199.045 767.217 199.045Z' 
                            fill='#603e0a'/>
                    </svg>
                    <div className='mx-3 my-2 sm:mx-3'>
                        <p>{review.review}</p>
                        <p className='mt-4'>{review.name}</p>
                    </div>
                </motion.div>
            </AnimatePresence>
            <div className='flex justify-around'>
                {/* Back button */}
                <PrimaryButton onClick={() => handleButtonClick(-1)} className='w-15 h-12'>
                    <svg className='m-auto w-4'  viewBox='0 0 8 14' fill='none'>
                        <path d='M7 13 1 7l6-6' stroke='#f7deb7' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                    </svg>
                </PrimaryButton>
                {/* Next button */}
                <PrimaryButton onClick={() => handleButtonClick(1)} className='w-15 h-12'>
                    <svg className='m-auto w-4' viewBox='0 0 8 14' fill='none' >
                        <path d='m1 1 6 6-6 6' stroke='#f7deb7' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                    </svg>
                </PrimaryButton>
            </div>
        </div>
    ); 
}