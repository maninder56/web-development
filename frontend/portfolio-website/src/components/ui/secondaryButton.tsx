
import { ReactNode} from 'react';
import { motion } from 'motion/react'

export default function SecondaryButton({
    children, 
    className, 
    onClick, 
    disabled, 
}: {
    children: ReactNode;  
    className?: string; 
    onClick?: () => void; 
    disabled?: boolean; 
}) {
    return (
        <motion.button
            whileHover={disabled ? undefined : { scale: 1.04 }}
            whileTap={disabled ? undefined : { scale: 0.96 }}
            onClick={onClick}
            disabled={disabled}
            className={`
                ${className} 
                flex justify-center
                px-5 py-2
                text-center text-lg text-text-primary text-nowrap
                bg-surface-primary
                rounded-2xl
                cursor-pointer

                disabled:opacity-40
                disabled:cursor-not-allowed
                disabled:shadow-none
                disabled:hover:shadow-none
            `}>
            {children}
        </motion.button>
    )
}