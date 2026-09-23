import { WebsitePages } from '@/types/global';
import Link from 'next/link';

export default function Footer() {
    const homePage: WebsitePages = '/'; 
    const aboutPage: WebsitePages = '/about'; 
    const contactPage: WebsitePages = '/contact'; 


    return (
        <footer className='min-h-20 flex justify-center animate-reveal-drop'>
            <div className='m-1 sm:m-2 flex-1 flex justify-between max-w-5xl'>
                <div className='my-auto'>
                    <Link href={homePage} 
                        className={`
                            flex text-nowrap
                            text-xl sm:text-2xl
                            font-heading
                            px-3 py-2 rounded-xl 
                            transition ease-in
                            hover:scale-102 hover:bg-surface-hover active:scale-98
                            text-text-primary
                        `}
                    >
                        <span className='my-auto mr-1'>Mi Coffee</span>
                        <svg className='m-auto w-6 sm:w-8' viewBox='0 0 24 24' fill='none'>
                            <path d='M10 2v2m4-2v2m2 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2' 
                                className='transition ease-in' 
                                stroke={'#603e0a'} 
                                strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                        </svg>
                    </Link>
                </div>
                 <ul className={`
                    flex justify-between gap-1 sm:gap-3
                    text-md sm:text-xl
                    font-heading text-text-primary
                `}>
                    <li className='flex my-auto'>
                        <Link href={contactPage} 
                            className={`
                                px-3 py-1 rounded-xl 
                                transition ease-in 
                                hover:scale-102 hover:bg-surface-hover active:scale-98
                            `}
                        >Contact</Link>
                    </li>
                    <li className='flex my-auto'>
                        <Link href={aboutPage} 
                            className={`
                                px-3 py-1 rounded-xl
                                transition ease-in 
                                hover:scale-102 hover:bg-surface-hover active:scale-98
                            `}
                        >About</Link>
                    </li>
                </ul>
            </div>
        </footer>
    ); 
}