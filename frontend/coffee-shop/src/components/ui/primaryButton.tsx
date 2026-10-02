'use client'

import { ReactNode, useId } from 'react';
import { motion } from 'motion/react'

export default function PrimaryButton({
    children, 
    className, 
    onClick,
}: {
    children: ReactNode;  
    className?: string; 
    onClick?: () => void; 
}) { 
    return (
        <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onClick}
            className={`
                ${className} 
                flex justify-center
                px-5 py-2
                text-center text-lg font-medium text-text-on-brand text-nowrap
                bg-surface-brand
                rounded-2xl
                cursor-pointer
            `}>
            {children}
        </motion.button>
    ); 
}