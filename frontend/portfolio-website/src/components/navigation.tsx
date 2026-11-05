'use client'; 

import { HomePageNavigationElementID } from "@/types/global";
import { motion } from 'motion/react'; 

export default function Navigation() {

    function handleClick(tagId: HomePageNavigationElementID) {
        document.getElementById(tagId)?.scrollIntoView({
            behavior: 'smooth', 
        }); 
    }

    return (
        <nav className='w-full flex justify-between p-2 sm:p-4 md:px-5 max-w-6xl m-auto font-body text-base sm:text-lg text-text-primary'>
            <span>Full-Stack Developer</span>
            <div className='flex flex-col sm:flex-row gap-2 sm:gap-4'>
                <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }} 
                    className='text-end cursor-pointer px-4'
                    onClick={() => handleClick('work')}
                >
                    Work
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }} 
                    className='text-end cursor-pointer px-4'
                    onClick={() => handleClick('about')}
                >
                    About
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }} 
                    className='text-end cursor-pointer px-4'
                    onClick={() => handleClick('contact')}
                >
                    Contact
                </motion.button>
            </div>
        </nav>
    ); 
}
