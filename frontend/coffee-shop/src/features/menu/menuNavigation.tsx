'use client'

import { useState } from "react";


type NavigationSection = 'coffee' | 'freshBakes' | 'littleBites' | 'cold&Refreshing'; 

export default function MenuNavigation() {
    const [currentSection, setCurrentSection] = useState<NavigationSection>('coffee'); 

    return (
        <ul className='flex justify-between mt-4 p-2 w-xl rounded-lg bg-surface-primary font-body text-lg md:text-xl text-text-primary'>
            <li 
                className={`
                    flex p-2 rounded-xl
                    ${currentSection === 'coffee' ? 'text-text-on-brand bg-surface-brand' : ''} 
                `}
                onClick={() => setCurrentSection('coffee')}
            >
                <span>Coffee</span>
            </li>
            <li
                className={`
                    flex p-2 rounded-xl
                    ${currentSection === 'freshBakes' ? 'text-text-on-brand bg-surface-brand' : ''} 
                `}
                onClick={() => setCurrentSection('freshBakes')}
            >
                <span>Fresh Bakes</span>
            </li>
            <li
                className={`
                    flex p-2 rounded-xl
                    ${currentSection === 'littleBites' ? 'text-text-on-brand bg-surface-brand' : ''} 
                `}
                onClick={() => setCurrentSection('littleBites')}
            >
                <span>Little Bites</span>
            </li>
            <li
                className={`
                    flex p-2 rounded-xl
                    ${currentSection === 'cold&Refreshing' ? 'text-text-on-brand bg-surface-brand' : ''} 
                `}
                onClick={() => setCurrentSection('cold&Refreshing')}
            >
                <span>Cold & Refreshing</span>
            </li>
        </ul>
    ); 
}