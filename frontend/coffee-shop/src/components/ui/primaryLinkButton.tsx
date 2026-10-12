'use client'


import { motion } from 'motion/react'; 




export default function PrimaryLinkButton({
    children, 
    className, 
    href, 
}: {
    children: React.ReactNode; 
    className?: string; 
    href: string; 
}) {

    return (
        <motion.a href={href} 
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className={`
                ${className} 
                flex justify-center
                px-5 py-2
                text-center text-lg font-medium text-text-on-brand text-nowrap
                bg-surface-brand
                rounded-2xl
                cursor-pointer
            `}
        >
            {children}
        </motion.a>
    ); 
}