'use client'

import '@/styles/variables.css'; 
import { WebsitePages } from '@/types/global';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export default function Navigation() {
    const pathName = usePathname(); 

    const homePage: WebsitePages = '/'; 
    const menuPage: WebsitePages = '/menu';
    const aboutPage: WebsitePages = '/about'; 
    const visitUsPage: WebsitePages = '/visitus'; 

    const isHomePage = pathName === homePage; 

    const homeRef = useRef<HTMLAnchorElement | null>(null); 
    const menuRef = useRef<HTMLAnchorElement | null>(null); 
    const aboutRef = useRef<HTMLAnchorElement | null>(null); 
    const visitUsRef = useRef<HTMLAnchorElement | null>(null); 

    const pageAndRefList = [
        {page: homePage, ref: homeRef},
        {page: menuPage, ref: menuRef},
        {page: aboutPage, ref: aboutRef},
        {page: visitUsPage, ref: visitUsRef},
    ]; 
    
    const containerRef = useRef<HTMLDivElement | null>(null); 

    const pillRef = useRef<HTMLDivElement | null>(null); 
    const [pill, setPill] = useState({
        x: 0, y: 0, width: 0, height: 0,
    }); 
    
    useLayoutEffect(() => {
        const updatePill = () => {
            const activeRef = pageAndRefList.find(item => item.page === pathName)?.ref.current; 

            if (!activeRef || !containerRef.current) return; 

            const containerRect = containerRef.current.getBoundingClientRect(); 
            const activeRect = activeRef.getBoundingClientRect(); 

            setPill({
                x: activeRect.left - containerRect.left,
                y: activeRect.top - containerRect.top,
                width: activeRect.width,
                height: activeRect.height,
            });
        }

        updatePill(); 

        const observer = new ResizeObserver(updatePill); 

        if (containerRef.current) {
            observer.observe(containerRef.current); 
        }

        return () => observer.disconnect(); 
    },[pathName]); 


    return (
        <nav className='min-h-20 flex justify-center bg-surface-background'>
            <div ref={containerRef} className='m-2 flex-1 flex justify-between max-w-250 relative'>
                <div ref={pillRef} className={`
                    bg-amber-300
                    border-solid border-red-600 border
                    absolute top-0 left-0
                    transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                `} style={{
                    transform: `translate(${pill.x}px, ${pill.y}px)`, 
                    width: `${pill.width}px`,
                    height: `${pill.height}px`,

                    transition: 
                        'transform 400ms cubic-bezier(0.22,1,0.36,1), ' +
                        'width 300ms cubic-bezier(0.22,1,0.36,1) 80ms, ' +
                        'height 300ms cubic-bezier(0.22,1,0.36,1) 80ms'

                }} />
            {/* ${!isHomePage ? 'translate-x-90' : ''} */}
                <div className='mt-auto mb-auto z-10'>
                    <Link ref={homeRef} href={homePage} 
                        className={`
                            flex m-auto 
                            text-4xl font-heading
                            pl-3 pr-3 pt-2 pb-2 rounded-2xl 
                            transition delay-100 ease-in 
                        `}
                        
                    >
                        <span className='mt-auto mb-auto mr-1'>Mi Coffee</span>
                        <svg width='50' height='50' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M10 2v2m4-2v2m2 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2' 
                                className='transition delay-100 ease-in' 
                                stroke={'#603e0a'} 
                                // stroke={isHomePage ? '#f7deb7' : '#603e0a'} 
                                strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                        </svg>
                    </Link>
                </div>
                <ul className='max-w-100 flex-1 flex justify-between text-3xl font-heading text-text-primary'>
                    <li className='flex mt-auto mb-auto'>
                        <Link ref={menuRef} href={menuPage} 
                            className={`
                                pl-3 pr-3 pt-1 pb-1 rounded-2xl z-10
                                transition delay-100 ease-in 
                            `}
                        >Menu</Link>
                    </li>
                    <li className='flex mt-auto mb-auto'>
                        <Link ref={aboutRef} href={aboutPage} 
                            className={`
                                pl-3 pr-3 pt-1 pb-1 rounded-2xl z-10
                                transition delay-100 ease-in 
                            `}
                        >About</Link>
                    </li>
                    <li className='flex mt-auto mb-auto'>
                        <Link ref={visitUsRef} href={visitUsPage} 
                            className={`
                                pl-3 pr-3 pt-1 pb-1 rounded-2xl z-10
                                transition delay-100 ease-in 
                            `}
                        >Visit Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    ); 
}


/*
                        ${!isHomePage ? 'hover:bg-surface-hover' : ''}
                            ${isHomePage ? 'text-text-on-brand bg-surface-brand' : 'text-text-primary'}
                        */


                            /*
                                        ${!active ? 'hover:bg-surface-hover': ''}
                                            ${active ? 'text-text-on-brand bg-surface-brand' : ''}
                                        */