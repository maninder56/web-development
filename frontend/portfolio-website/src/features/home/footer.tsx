'use client'


export default function Footer() {
    const currentYear = new Date().getFullYear(); 

    return (
        <footer className='mt-10 mb-5 w-full m-auto max-w-5xl'>
            <p className='font-body text-text-primary text-center text-base'>
                &copy; {currentYear} Maninder Singh | Designed and built with Next.js And ASP.NET
            </p>
        </footer>
    ); 
}