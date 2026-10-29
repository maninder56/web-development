'use client'

import { HomePageNavigationElementID } from '@/types/global';
import { motion } from 'motion/react'; 
import { useState } from 'react';

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

    function handleClick(id: HomePageNavigationElementID) {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth', 
        }); 
    }

    return (
        <nav className='flex justify-center apply-borders fixed left-1/2 right-1/2'>
            <motion.ul 
                className={`
                    flex 
                    p-2
                    border border-surface-primary
                    rounded-2xl bg-surface-secondary 
                    font-body text-text-secondary
                `}
            >
                {
                    sectionIdList.map(section => 
                        <motion.li key={section.id} 
                            layout
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.98 }} 
                            onClick={() => handleClick(section.id)}
                            className='mx-2 rounded-xl cursor-pointer relative p-2'
                        >
                            {section.name}
                            {
                                currentSection === section.id && (
                                    <motion.div layoutId='menuBackgroundBubble' className='absolute inset-0 bg-surface-primary w-full h-full rounded-xl' />
                                )
                            }
                        </motion.li>
                    )
                }
            </motion.ul>
        </nav> 
    ); 
}