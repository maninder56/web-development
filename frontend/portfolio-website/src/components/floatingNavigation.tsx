'use client'

import { HomePageNavigationElementID } from '@/types/global';
import { motion, useMotionValueEvent, useScroll } from 'motion/react'; 
import { useEffect, useRef, useState } from 'react';

const sectionIdList: {
    id: HomePageNavigationElementID; 
    name: string; 
}[] = [
    {
        id: 'home', 
        name: 'Home',
    }, 
    {
        id: 'work', 
        name: 'Work', 
    }, 
    {
        id: 'about', 
        name: 'About', 
    }, 
    {
        id: 'contact', 
        name: 'Contact', 
    }, 
]; 

export default function FloadingNavigation() {
    const [currentSection, setCurrentSection] = useState<HomePageNavigationElementID>('home'); 
    const [isVisible, setIsVisible] = useState(false); 
    const { scrollY } = useScroll(); 
    const isNavigatingRef = useRef(false); 

    function handleClick(id: HomePageNavigationElementID) {
        isNavigatingRef.current = true; 

        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth', 
        }); 

        setCurrentSection(id); 

        setTimeout(() => {
            isNavigatingRef.current = false; 
        }, 1000); 
    }

    useMotionValueEvent(scrollY, 'change', (latest) => {
        // threshold for when navigation will appear
        setIsVisible(latest > 500); 
    }); 

    useEffect(() => {
        const navSections = sectionIdList.map(item => document.getElementById(item.id))
            .filter(Boolean); 

        const observer = new IntersectionObserver(entries => {
            if (isNavigatingRef.current) return; 

            const visibleSections = entries
                .filter(entry => entry.isIntersecting)
                .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top)); 

            if (visibleSections.length > 0) {
                setCurrentSection(visibleSections[0].target.id as HomePageNavigationElementID);  
            }
        }, {
            rootMargin: '-30% 0px -50% 0px',
            threshold: 0,
        }); 

        navSections.forEach(section => {
            if (section) observer.observe(section); 
        }); 

        return () => observer.disconnect(); 
    }, []); 

    return (
        <motion.nav layout
            className='flex justify-center fixed left-1/2 right-1/2 top-5'
            initial={{ y: -100, opacity: 0 }}
            animate={{
                y: isVisible ? 0 : -100, 
                opacity: isVisible ? 1 : 0, 
            }}
            transition={{
                duration: 0.3, 
                ease: 'easeInOut', 
            }}
        >
            <motion.ul 
                className={`
                    flex py-2
                    shadow-surface-primary shadow-[0px_0px_5px]
                    rounded-2xl bg-surface-secondary 
                    font-body text-base sm:text-lg
                `}
            >
                {
                    sectionIdList.map(section => {
                        const isCurrentSection = currentSection === section.id; 
                        return (
                            <motion.li key={section.id} 
                                layout
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.98 }} 
                                onClick={() => handleClick(section.id)}
                                className={`
                                    mx-1.5 px-2 py-1.5 sm:mx-2 sm:px-4
                                    rounded-xl cursor-pointer relative z-10
                                    transition-colors duration-500
                                    ${isCurrentSection ? 'text-text-primary' : 'text-text-secondary'}
                                    `}
                            >
                                {section.name}
                                {
                                    isCurrentSection && (
                                        <motion.div layoutId='menuBackgroundBubble' 
                                            className='absolute inset-0 bg-surface-primary w-full h-full rounded-xl -z-10' />
                                    )
                                }
                            </motion.li>
                        )
                    })
                }
            </motion.ul>
        </motion.nav> 
    ); 
}