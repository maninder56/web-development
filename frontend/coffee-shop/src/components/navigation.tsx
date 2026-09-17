'use client'

import '@/styles/variables.css'; 
import { WebsitePages } from '@/types/global';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLayoutEffect, useRef, useState } from 'react';

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
    
    const containerRef = useRef<HTMLDivElement | null>(null); 

    const pillRef = useRef<HTMLDivElement | null>(null); 

    useLayoutEffect(() => {

        function getActiveRef() {
            switch (pathName) {
                case homePage: 
                    return homeRef.current; 
                case menuPage: 
                    return menuRef.current; 
                case aboutPage: 
                    return aboutRef.current; 
                case visitUsPage: 
                    return visitUsRef.current; 
                default: 
                    return null; 
            }
        }

        function updatePill() {
            const container = containerRef.current; 
            const pill = pillRef.current; 
            const activeRef = getActiveRef(); 

            if (!activeRef || !container || !pill) return; 

            const containerRect = container.getBoundingClientRect(); 
            const activeRect = activeRef.getBoundingClientRect(); 

            pill.style.transform = `
                translate(
                    ${activeRect.left - containerRect.left}px, 
                    ${activeRect.top - containerRect.top}px
                )
            `; 

            pill.style.width = `${activeRect.width}px`; 
            pill.style.height = `${activeRect.height}px`; 
        }

        updatePill(); 

        const observer = new ResizeObserver(() => {
           
            updatePill(); 

        }); 

        if (containerRef.current) {
            observer.observe(containerRef.current); 
        }

        return () => observer.disconnect(); 
    },[pathName]); 


    return (
        <nav className='min-h-20 flex justify-center bg-surface-background'>
            <div ref={containerRef} className='m-2 flex-1 flex justify-between max-w-250 relative animate-gracefulldown'>
                <div ref={pillRef} className={`
                    bg-surface-brand rounded-2xl 
                    absolute top-0 left-0
                    transition-[transform,width,height]
                    duration-300 delay-50
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                `} />
                <div className='mt-auto mb-auto z-10'>
                    <Link ref={homeRef} href={homePage} 
                        className={`
                            flex m-auto 
                            text-4xl font-heading
                            pl-3 pr-3 pt-2 pb-2 rounded-2xl 
                            transition ease-in 
                            hover:scale-105 active:scale-100
                            ${isHomePage ? 'text-text-on-brand' : 'text-text-primary hover:bg-surface-hover'}
                        `}
                        
                    >
                        <span className='mt-auto mb-auto mr-1'>Mi Coffee</span>
                        <svg width='50' height='50' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M10 2v2m4-2v2m2 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2' 
                                className='transition ease-in' 
                                stroke={isHomePage ? '#f7deb7' : '#603e0a'} 
                                strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                        </svg>
                    </Link>
                </div>
                <ul className='max-w-100 flex-1 flex justify-between text-3xl font-heading text-text-primary'>
                    <li className='flex mt-auto mb-auto'>
                        <Link ref={menuRef} href={menuPage} 
                            className={`
                                pl-3 pr-3 pt-1 pb-1 rounded-2xl z-10
                                transition ease-in 
                                hover:scale-105 active:scale-100
                                ${pathName === menuPage ? 'text-text-on-brand' : 'hover:bg-surface-hover'}
                            `}
                        >Menu</Link>
                    </li>
                    <li className='flex mt-auto mb-auto'>
                        <Link ref={aboutRef} href={aboutPage} 
                            className={`
                                pl-3 pr-3 pt-1 pb-1 rounded-2xl z-10
                                transition ease-in 
                                hover:scale-105 active:scale-100
                                ${pathName === aboutPage ? 'text-text-on-brand' : 'hover:bg-surface-hover'}
                            `}
                        >About</Link>
                    </li>
                    <li className='flex mt-auto mb-auto'>
                        <Link ref={visitUsRef} href={visitUsPage} 
                            className={`
                                pl-3 pr-3 pt-1 pb-1 rounded-2xl z-10
                                transition ease-in
                                hover:scale-105 active:scale-100
                                ${pathName === visitUsPage ? 'text-text-on-brand' : 'hover:bg-surface-hover'}
                            `}
                        >Visit Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    ); 
}
