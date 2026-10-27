
import { ReactNode} from 'react';
import { ArcOptions, motion } from 'motion/react'

export default function secondaryExternalLinkButton({
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
            target='_blank' 
            rel='noopener noreferrer'
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className={`
                ${className} 
                flex justify-center
                px-5 py-2
                text-center text-lg text-text-primary text-nowrap
                bg-surface-primary
                rounded-2xl
                cursor-pointer
            `}>
            {children}
        </motion.a>
    )
}