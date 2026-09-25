'use client'

import { useState } from "react";


export default function FlipCard({
    front, 
    back,
    className, 
}: {
    front: React.ReactNode; 
    back: React.ReactNode; 
    className?: string; 
}) {
    const [flip, setFlip] = useState(false); 

    return (
        <div 
            className={`
                ${className} perspective-distant max-w-md 
                w-100 h-50
                ${flip ? 'fixed inset-0 z-50 m-auto' : ''}
            `}
            onClick={() => setFlip(!flip)}
        >
            <div className={`
                relative w-full h-full 
                transform-gpu
                transform-3d 
                transition-all duration-1000 
                ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]
                ${flip ? 'rotate-y-180 scale-150' : ''}
            `}>
                <div className='absolute inset-0 backface-hidden bg-amber-500'>{front}</div>
                <div className='absolute inset-0 backface-hidden rotate-y-180 bg-blue-500'>{back}</div>
            </div>
        </div>
    ); 
}