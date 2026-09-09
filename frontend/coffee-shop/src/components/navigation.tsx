import '@/styles/variables.css'; 
import { WebsitePages } from '@/types/global';
import Link from 'next/link';

export default function Navigation() {

    const homePage: WebsitePages = '/'; 
    const menuPage: WebsitePages = '/menu'; 
    const aboutPage: WebsitePages = '/about'; 
    const visitusPage: WebsitePages = '/visitus'; 

    return (
        <nav className='min-h-20 flex justify-center bg-surface-background'>
            <div className='m-2 flex-1 flex justify-between max-w-250'>
                <div className='mt-auto mb-auto'>
                    <Link href={homePage} 
                        className='
                            flex m-auto 
                            text-4xl font-heading text-text-primary
                            pl-3 pr-3 pt-2 pb-2 rounded-2xl 
                            transition delay-100 ease-in 
                            hover:bg-surface-hover
                        '
                    >
                        <header className='mt-auto mb-auto mr-1'>Mi Coffee</header>
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 2v2m4-2v2m2 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2" 
                                stroke="#603e0a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Link>
                </div>
                <ul className='max-w-100 flex-1 flex justify-between text-3xl font-heading text-text-primary'>
                    <li className='mt-auto mb-auto'>
                        <Link href={menuPage} 
                            className='
                                pl-3 pr-3 pt-1 pb-1 rounded-2xl 
                                transition delay-100 ease-in 
                                hover:bg-surface-hover
                            '
                        >Menu</Link>
                    </li>
                    <li className='mt-auto mb-auto'>
                        <Link href={aboutPage} 
                            className='
                                pl-3 pr-3 pt-1 pb-1 rounded-2xl 
                                transition delay-100 ease-in 
                                hover:bg-surface-hover
                            '
                        >About</Link>
                    </li>
                    <li className='mt-auto mb-auto'>
                        <Link href={visitusPage}
                            className='
                                pl-3 pr-3 pt-1 pb-1 rounded-2xl 
                                transition delay-100 ease-in 
                                hover:bg-surface-hover
                            '
                        >Visit Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    ); 
}

