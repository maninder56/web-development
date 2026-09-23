'use client'

import '@/styles/variables.css'; 
import { WebsitePages } from '@/types/global';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { act, useLayoutEffect, useRef, useState } from 'react';

export default function Navigation() {
    return (
        <nav className='min-h-20 animate-reveal-drop'>
            <div className='sm:hidden'>
                <MobileNavigation />
            </div>
            <div className='hidden sm:flex justify-center'>
                <DesktopNavigation />
            </div>
        </nav>
    ); 
}

function MobileNavigation() {
    const homePage: WebsitePages = '/'; 
    const menuPage: WebsitePages = '/menu';
    const aboutPage: WebsitePages = '/about'; 
    const visitUsPage: WebsitePages = '/visitus'; 

    const [isNavOpen, setIsNavOpen] = useState(false); 

    return (
        <div className='p-2 flex justify-between'>
            <Link href={homePage} 
                className={` 
                    flex 
                    text-2xl
                    font-heading text-text-on-brand
                    px-3 py-2 rounded-2xl 
                    transition ease-in 
                    hover:scale-105 active:scale-95
                    bg-surface-brand
            `}>
                <span className='mt-auto mb-auto mr-1 text-nowrap'>Mi Coffee</span>
                <svg viewBox='0 0 24 24' fill='none' 
                    className='m-auto w-8 md:w-10 lg:w-12'>
                    <path d='M10 2v2m4-2v2m2 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2' 
                        className='transition ease-in' 
                        stroke={'#f7deb7'} 
                        strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                </svg>
            </Link>
            <button type='button'
                onClick={() => setIsNavOpen(!isNavOpen)}
                className='my-auto w-10 h-10 relative z-10 min-w-0'>
                <span className={`
                    absolute left-1/2 top-1/2 h-0.5 w-6
                    origin-center -translate-x-1/2 -translate-y-1/2
                    rounded-full bg-surface-brand
                    transition-transform duration-300
                    ${isNavOpen ? 'rotate-45' : '-translate-y-2.5'}
                `}/>

                <span className={`
                    absolute left-1/2 top-1/2 h-0.5 w-6
                    origin-center -translate-x-1/2 -translate-y-1/2
                    rounded-full bg-surface-brand
                    duration-100 transition-all
                    ${isNavOpen ? ' opacity-0' : 'opacity-100'}
                `}/>

                <span className={`
                    absolute left-1/2 top-1/2 h-0.5 w-6
                    origin-center -translate-x-1/2 -translate-y-1/2
                    rounded-full bg-surface-brand
                    transition-transform duration-300
                    ${isNavOpen ? '-rotate-45' : 'translate-y-2'}
                `}/>
            </button>
            <div className={`
                fixed inset-0 
                w-screen h-screen
                bg-surface-primary
                transition-transform duration-300
                ${isNavOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
                <ul className={`
                    m-4 mt-30
                    flex flex-col gap-12
                    font-heading text-text-primary text-2xl
                `}>
                    <li className='flex justify-center'>
                        <Link href={menuPage} 
                            onClick={() => setIsNavOpen(false)}
                            className={`
                                px-3 py-1
                            `}
                        >Menu</Link>
                    </li>
                    <li className='flex justify-center'>
                        <Link href={aboutPage} 
                            onClick={() => setIsNavOpen(false)}
                            className={`
                                px-3 py-1
                            `}
                        >About</Link>
                    </li>
                    <li className='flex justify-center'>
                        <Link href={visitUsPage} 
                            onClick={() => setIsNavOpen(false)}
                            className={`
                                px-3 py-1
                            `}
                        >Visit Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    ); 
}

function DesktopNavigation(){
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

    // start instant so first paint is correct
    const [instant, setInstant] = useState(true); 

    const [firstRender, setFirstRender] = useState(true); 

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

            if (!container || !pill) return; 

            if (!activeRef) {
                pill.style.display = 'none'; 
                return; 
            }

            pill.style.display = 'block'; 
            pill.style.transform = `translate(${activeRef.offsetLeft}px, ${activeRef.offsetTop}px)`;
            pill.style.width = `${activeRef.offsetWidth}px`; 
            pill.style.height = `${activeRef.offsetHeight}px`; 
        }

        updatePill(); 
        setTimeout(() => {
            setFirstRender(false); 
        }, 200);

        let resizeTimeout: ReturnType<typeof setTimeout>; 

        const observer = new ResizeObserver(() => {
            setInstant(true);  // kill transition so pill doesn't lag behind
            updatePill(); 
            clearTimeout(resizeTimeout); 
            resizeTimeout = setTimeout(() => {
                setInstant(false)
            }, 200);
        }); 

        if (containerRef.current) {
            observer.observe(containerRef.current); 
        }

        return () => observer.disconnect(); 
    },[pathName]); 


    // after the very first paint, allow transitions for route changes
    useLayoutEffect(() => {
        const id = requestAnimationFrame(() => setInstant(false));
        return () => cancelAnimationFrame(id);
    }, []);


    return (
        <div ref={containerRef} className='m-2 md:m-4 flex-1 flex justify-between max-w-6xl relative'>
            <div ref={pillRef} className={`
                bg-surface-brand rounded-2xl 
                absolute top-0 left-0
                ${instant ? '' : 'transition-[transform,width,height] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]'}
            `} />
            <div className='mt-auto mb-auto z-10'>
                <Link ref={homeRef} href={homePage} 
                    className={`
                        flex m-auto 
                        text-3xl lg:text-4xl font-heading
                        px-3 py-2 rounded-2xl 
                        transition ease-in 
                        hover:scale-105 active:scale-95
                        ${isHomePage ? 'text-text-on-brand' : 'text-text-primary hover:bg-surface-hover'}
                        ${firstRender && isHomePage? 'bg-surface-brand' : ''}
                    `}
                    
                >
                    <span className='mt-auto mb-auto mr-1 text-nowrap'>Mi Coffee</span>
                    <svg viewBox='0 0 24 24' fill='none' 
                        className='m-auto w-8 md:w-10 lg:w-12'>
                        <path d='M10 2v2m4-2v2m2 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2' 
                            className='transition ease-in' 
                            stroke={isHomePage ? '#f7deb7' : '#603e0a'} 
                            strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                    </svg>
                </Link>
            </div>
            <ul className={`
                max-w-sm lg:max-w-md
                flex-1 flex justify-between 
                font-heading text-text-primary
                text-2xl lg:text-3xl`}>
                <li className='flex mt-auto mb-auto'>
                    <Link ref={menuRef} href={menuPage} 
                        className={`
                            px-3 py-1 rounded-2xl z-10
                            transition ease-in 
                            hover:scale-105 active:scale-95
                            ${pathName === menuPage ? 'text-text-on-brand' : 'hover:bg-surface-hover'}
                            ${firstRender && pathName === menuPage ? 'bg-surface-brand' : ''}
                        `}
                    >Menu</Link>
                </li>
                <li className='flex mt-auto mb-auto'>
                    <Link ref={aboutRef} href={aboutPage} 
                        className={`
                            px-3 py-1 rounded-2xl z-10
                            transition ease-in 
                            hover:scale-105 active:scale-95
                            ${pathName === aboutPage ? 'text-text-on-brand' : 'hover:bg-surface-hover'}
                            ${firstRender && pathName === aboutPage ? 'bg-surface-brand' : ''}
                        `}
                    >About</Link>
                </li>
                <li className='flex mt-auto mb-auto'>
                    <Link ref={visitUsRef} href={visitUsPage} 
                        className={`
                            px-3 py-1 rounded-2xl z-10
                            transition ease-in 
                            hover:scale-105 active:scale-95
                            ${pathName === visitUsPage ? 'text-text-on-brand' : 'hover:bg-surface-hover'}
                            ${firstRender && pathName === visitUsPage ? 'bg-surface-brand' : ''}
                        `}
                    >Visit Us</Link>
                </li>
            </ul>
        </div>
    ); 
}