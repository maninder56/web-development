import { WebsitePages } from "@/types/global";
import Link from "next/link";

export default function Footer() {
    const homePage: WebsitePages = '/'; 
    const aboutPage: WebsitePages = '/about'; 
    const contactPage: WebsitePages = '/contact'; 


    return (
        <footer className="min-h-20 flex justify-center bg-surface-background">
            <div className="m-2 flex-1 flex justify-between max-w-250 relative animate-reveal-drop">
                <div className='mt-auto mb-auto z-10'>
                    <Link href={homePage} 
                        className={`
                            flex m-auto text-nowrap
                            text-2xl font-heading
                            pl-3 pr-3 pt-2 pb-2 rounded-2xl 
                            hover:scale-105 hover:bg-surface-hover active:scale-95
                        `}
                    >
                        <span className='mt-auto mb-auto mr-1'>Mi Coffee</span>
                        <svg width='40' height='40' className='m-auto w-full h-full' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M10 2v2m4-2v2m2 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2' 
                                className='transition ease-in' 
                                stroke={'#603e0a'} 
                                strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                        </svg>
                    </Link>
                </div>
                 <ul className='max-w-70 flex-1 flex justify-between text-xl font-heading text-text-primary'>
                    <li className='flex mt-auto mb-auto'>
                        <Link href={contactPage} 
                            className={`
                                pl-3 pr-3 pt-1 pb-1 rounded-2xl z-10
                                transition ease-in 
                                hover:scale-105 hover:bg-surface-hover active:scale-95
                            `}
                        >Contact</Link>
                    </li>
                    <li className='flex mt-auto mb-auto'>
                        <Link href={aboutPage} 
                            className={`
                                pl-3 pr-3 pt-1 pb-1 rounded-2xl z-10
                                transition ease-in 
                                hover:scale-105 hover:bg-surface-hover active:scale-95
                            `}
                        >About</Link>
                    </li>
                </ul>
            </div>
        </footer>
    ); 
}