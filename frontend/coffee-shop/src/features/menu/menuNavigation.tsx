'use client'

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react'
import { MenuNavigationSection } from '@/components/types/componentTypes';


const menuList: {
    id: number; 
    title: string; 
    kind: MenuNavigationSection; 
    svgGroup: React.ReactNode; 
}[] = [
    {
        id: 1, 
        title: 'Coffee', 
        kind: 'coffee', 
        svgGroup: 
            <g>
                <path d='M10 2v2m4-2v2m2 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2' />
            </g>
            
    }, 
    {
        id: 2, 
        title: 'Fresh Bakes', 
        kind: 'freshBakes', 
        svgGroup: 
            <g>
                <path d='M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97 11 11 0 0 1 .132-6.487M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352 11 11 0 0 0-6.486.132' />
                <path d='M18 5c1.06 0 2.078.316 2.828.879S22 7.204 22 8a2 2 0 0 1-2 2 10 10 0 0 0-5.139 1.42M5 18c0 1.06.316 2.078.879 2.828S7.204 22 8 22a2 2 0 0 0 2-2 10 10 0 0 1 1.42-5.14' />
                <path d='M4.927 4.927a10 10 0 0 1 3.782-2.373 1.5 1.5 0 0 1 1.626.676l5.42 9.807a2 2 0 0 1-2.718 2.718l-9.807-5.42a1.5 1.5 0 0 1-.676-1.626 10 10 0 0 1 2.373-3.782' />
            </g>
            
    }, 
    {
        id: 3, 
        title: 'Little Bites', 
        kind: 'littleBites', 
        svgGroup: 
            <g>
                <path d='M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1zM6 17h12' />
            </g>
            
    }, 
    {
        id: 4, 
        title: 'Cold & Refreshing', 
        kind: 'cold&Refreshing', 
        svgGroup: 
            <g>
                <path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8M5 8h14"/>
                <path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0m-5-7 1-6h2"/>
            </g>
            
    }, 
    
    
]

export default function MenuNavigation() {
    const [currentSection, setCurrentSection] = useState<MenuNavigationSection>('coffee'); 
    
    const isNavigatingRef = useRef(false);

    function handleClick(kind: MenuNavigationSection) {
        isNavigatingRef.current = true; 

        setCurrentSection(kind); 

        document.getElementById(kind)?.scrollIntoView({
            behavior: 'smooth', 
            
        }); 
        
        setTimeout(() => {
            isNavigatingRef.current = false; 
        }, 1000);
    }

     useEffect(() => {
        const sections = menuList
            .map(item => document.getElementById(item.kind))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            entries => {
                if (isNavigatingRef.current) return; 

                const visibleSections = entries
                    .filter(entry => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            Math.abs(a.boundingClientRect.top) -
                            Math.abs(b.boundingClientRect.top)
                    );

                if (visibleSections.length > 0) {
                    setCurrentSection(
                        visibleSections[0].target.id as MenuNavigationSection
                    );
                }
            },
            {
                rootMargin: '-10% 0px -70% 0px',
                threshold: 0,
            }
        );

        sections.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <motion.ul 
            className={`
                flex-1 max-w-75 sm:max-w-170 
                flex justify-between 
                mt-4 p-2 sm:p-3 
                border border-surface-primary
                rounded-2xl bg-surface-primary shadow-sm
                font-body text-lg md:text-xl text-text-primary
            `}
        >
            {
                menuList.map(item => 
                    <motion.li key={item.id}
                        layout
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.98 }} 
                        className={`
                            flex rounded-xl cursor-pointer relative
                            ${currentSection === item.kind ? 'text-text-on-brand transition-colors duration-500' : ''} 
                        `}
                        onClick={() => handleClick(item.kind)}
                    >
                        <div className='p-2 z-10 flex'>
                            <span className='m-auto mr-1 hidden sm:block'>{item.title}</span>
                            <svg viewBox='0 0 24 24' fill='none' className='w-7' 
                                stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'>
                                {item.svgGroup}
                            </svg>
                        </div>
                        {
                            currentSection === item.kind && (
                                <motion.div layoutId='menuBackgroundBubble' className='absolute inset-0 bg-surface-brand w-full h-full rounded-xl' />
                            )
                        }
                    </motion.li>
                )
            }
        </motion.ul>
    ); 
}