import '@/styles/variables.css'; 
import { WebsitePages } from '@/types/global';
import Link from 'next/link';

export default function Navigation() {

    const homePage: WebsitePages = '/'; 
    const menuPage: WebsitePages = 'menu'; 
    const aboutPage: WebsitePages = 'about'; 
    const visitusPage: WebsitePages = 'visitus'; 

    return (
        <nav className='min-h-20 flex justify-center'>
            <div>
                <Link href={homePage} className='bg-amber-300 '>
                    Mi Coffee
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2v2m4-2v2m2 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2" 
                            stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Link>
            </div>
        </nav>
    ); 
}

