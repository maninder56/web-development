'use client'

import { useState } from 'react';
import { motion } from 'motion/react'

type NavigationSection = 'coffee' | 'freshBakes' | 'littleBites' | 'cold&Refreshing'; 

export default function MenuNavigation() {
    const [currentSection, setCurrentSection] = useState<NavigationSection>('coffee'); 

    return (
        <motion.ul className='flex justify-between mt-4 px-3 py-3 w-3xl rounded-2xl bg-surface-primary font-body text-lg md:text-xl text-text-primary'
            layout
        >
            <motion.li
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }} 
                className={`
                    flex p-2 rounded-xl cursor-pointer
                    ${currentSection === 'coffee' ? 'text-text-on-brand bg-surface-brand' : ''} 
                `}
                onClick={() => setCurrentSection('coffee')}
            >
                <span className='m-auto mr-1'>Coffee</span>
                <svg viewBox='0 0 24 24' fill='none' className='w-7' 
                    stroke='currentColor' strokeWidth='1.5' >
                    <path d='M10 2v2m4-2v2m2 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2' 
                    strokeLinecap='round' strokeLinejoin='round'/>
                </svg>
            </motion.li>
            <motion.li
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className={`
                    flex p-2 rounded-xl cursor-pointer
                    ${currentSection === 'freshBakes' ? 'text-text-on-brand bg-surface-brand' : ''} 
                `}
                onClick={() => setCurrentSection('freshBakes')}
            >
                <span className='m-auto mr-1'>Fresh Bakes</span>
                <svg viewBox='0 0 24 24' fill='none' className='w-7' 
                   stroke='currentColor' strokeWidth={1.5}>
                    <path d='M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97 11 11 0 0 1 .132-6.487M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352 11 11 0 0 0-6.486.132' 
                        strokeLinecap='round' strokeLinejoin='round'/>
                    <path d='M18 5c1.06 0 2.078.316 2.828.879S22 7.204 22 8a2 2 0 0 1-2 2 10 10 0 0 0-5.139 1.42M5 18c0 1.06.316 2.078.879 2.828S7.204 22 8 22a2 2 0 0 0 2-2 10 10 0 0 1 1.42-5.14' 
                        strokeLinecap='round' strokeLinejoin='round'/>
                    <path d='M4.927 4.927a10 10 0 0 1 3.782-2.373 1.5 1.5 0 0 1 1.626.676l5.42 9.807a2 2 0 0 1-2.718 2.718l-9.807-5.42a1.5 1.5 0 0 1-.676-1.626 10 10 0 0 1 2.373-3.782' 
                        strokeLinecap='round' strokeLinejoin='round'/>
                </svg>
            </motion.li>
            <motion.li
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className={`
                    flex p-2 rounded-xl cursor-pointer
                    ${currentSection === 'littleBites' ? 'text-text-on-brand bg-surface-brand' : ''} 
                `}
                onClick={() => setCurrentSection('littleBites')}
            >
                <span className='m-auto mr-1'>Little Bites</span>
                <svg viewBox='0 0 24 24' fill='none' className='w-7'
                    stroke='currentColor' strokeWidth={1.5}>
                    <path d='M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1zM6 17h12' 
                        strokeLinecap='round' strokeLinejoin='round'/>
                </svg>
            </motion.li>
            <motion.li
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className={`
                    flex p-2 rounded-xl cursor-pointer
                    ${currentSection === 'cold&Refreshing' ? 'text-text-on-brand bg-surface-brand' : ''} 
                `}
                onClick={() => setCurrentSection('cold&Refreshing')}
            >
                <span className='m-auto mr-1'>Cold & Refreshing</span>
                <svg viewBox="0 0 24 24" fill="none" className='w-7'
                    stroke="currentColor" strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round'>
                    <path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8M5 8h14"/>
                    <path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0m-5-7 1-6h2"/>
                </svg>
            </motion.li>
        </motion.ul>
    ); 
}