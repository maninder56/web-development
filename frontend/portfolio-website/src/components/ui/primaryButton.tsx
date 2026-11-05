
import { ReactNode} from 'react';
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
                px-4 py-1.5
                text-center text-lg text-text-secondary text-nowrap
                bg-surface-secondary
                rounded-2xl
                cursor-pointer
            `}>
            {children}
        </motion.button>
    )
}