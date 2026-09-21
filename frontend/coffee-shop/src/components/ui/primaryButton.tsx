import { ReactNode } from "react";


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
        <button
            onClick={onClick}
            className={`
                ${className} 
                flex justify-center
                px-5 py-2
                text-center text-lg font-medium text-text-on-brand text-nowrap
                bg-surface-brand
                rounded-2xl
                transition ease-in 
                hover:scale-102 hover:bg-surface-button-hover active:scale-100
                cursor-pointer
            `}>
            {children}
        </button>
    ); 
}