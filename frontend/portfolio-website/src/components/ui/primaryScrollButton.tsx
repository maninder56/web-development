'use client'


import PrimaryButton from './primaryButton';


export default function PrimaryScrollButton({
    children, 
    tagId,
    className, 
}: {
    children: React.ReactNode; 
    tagId: string; 
    className?: string; 
}) {

    function handleClick() {
        document.getElementById(tagId)?.scrollIntoView({
            behavior: 'smooth', 
        }); 
    }

    return (
        <PrimaryButton className={className} onClick={handleClick}>
            {children}
        </PrimaryButton>
    ); 
}