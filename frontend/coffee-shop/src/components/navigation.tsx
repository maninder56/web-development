'use client'

import '@/styles/variables.css'; 
import { WebsitePages } from '@/types/global';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const pathName = usePathname(); 

    const homePage: WebsitePages = '/'; 
    
    const pages:{ number: number, name:string, link: WebsitePages }[] = [
        { number:1, name: 'Menu', link: '/menu' }, 
        { number:2, name: 'About', link: '/about' }, 
        { number:3, name: 'Visit Us', link: '/visitus'}
    ]; 

    const isHomePage = pathName === homePage; 

    return (
        <nav className='min-h-20 flex justify-center bg-surface-background'>
            <div className='m-2 flex-1 flex justify-between max-w-250'>
                <div className='mt-auto mb-auto'>
                    <Link href={homePage} 
                        className={`
                            flex m-auto 
                            text-4xl font-heading
                            pl-3 pr-3 pt-2 pb-2 rounded-2xl 
                            transition delay-100 ease-in 
                            ${!isHomePage ? 'hover:bg-surface-hover' : ''}
                            ${isHomePage ? 'text-text-on-brand bg-surface-brand' : 'text-text-primary'}
                        `}
                    >
                        <header className='mt-auto mb-auto mr-1'>Mi Coffee</header>
                        <svg width='50' height='50' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M10 2v2m4-2v2m2 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2' 
                                className='transition delay-100 ease-in' stroke={isHomePage ? '#f7deb7' : '#603e0a'} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                        </svg>
                    </Link>
                </div>
                <ul className='max-w-100 flex-1 flex justify-between text-3xl font-heading text-text-primary'>
                    {
                        pages.map((page) => {
                            const active = pathName === page.link; 
                            return (
                                <li key={page.name} className='flex mt-auto mb-auto'>
                                    <Link href={page.link} 
                                        className={`
                                            pl-3 pr-3 pt-1 pb-1 rounded-2xl 
                                            transition delay-100 ease-in 
                                            ${!active ? 'hover:bg-surface-hover': ''}
                                            ${active ? 'text-text-on-brand bg-surface-brand' : ''}
                                        `}
                                    >{page.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    ); 
}

