'use client'

import { ReactNode } from "react";
import { ArcOptions, motion } from 'motion/react'


export default function PrimaryLinkButton({
    children, 
    className, 
    href,
}: {
    children: ReactNode; 
    href: string; 
    className?: string; 
}) {
    return (
        <motion.a
            href={href}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className={`
            ${className} 
            flex justify-center
            px-4 py-1.5
            text-center text-lg text-text-secondary text-nowrap
            bg-surface-secondary
            rounded-2xl
            cursor-pointer
        `}>
            {children}
        </motion.a>
    ); 
}