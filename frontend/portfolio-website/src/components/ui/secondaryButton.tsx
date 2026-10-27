
import { ReactNode} from 'react';
import { motion } from 'motion/react'

export default function SecondaryButton({
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
                text-center text-lg text-text-primary text-nowrap
                bg-surface-primary
                rounded-2xl
                cursor-pointer
            `}>
            {children}
        </motion.button>
    )
}