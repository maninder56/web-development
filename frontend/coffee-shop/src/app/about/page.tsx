import PrimaryLinkButton from '@/components/ui/primaryLinkButton';
import Image from 'next/image';


export default function About() {
    return (
        <div className='mt-4'>
            <section className='text-center'>
                <div className='flex justify-center'>
                    <div className='sm:m-4 md:m-8 max-w-5xl'>
                        <h1 className='font-heading text-4xl md:text-5xl text-text-primary mb-10'>Our Story</h1>
                        <h2 className='font-heading text-2xl md:text-3xl text-text-primary mb-2'>Coffee made with intention</h2>
                        <div className='font-body text-base md:text-lg text-text-secondary mb-8'>
                            <p className='mb-5'>We believe great coffee is about more than what&apos;s in the cup. It&apos;s about the care behind every detail, the people you share it with, and the little moments that make an ordinary day feel special.</p>
                            <p>From thoughtfully sourced beans to a welcoming space, everything we do is made with intention.</p>
                        </div>
                </div>
                </div>
                <Image src={'/pictures/insideShop/shopCounter.jpg'} alt={'shop counter'} width={5128} height={3045}
                    className='h-130 sm:h-150 lg:h-170 xl:h-200 w-full object-cover'
                />
            </section>
            <section className='mt-20 flex justify-center'>
                <div className='m-1 sm:m-4 md:m-8 max-w-5xl'>
                    <h2 className='font-heading text-4xl md:text-5xl text-text-primary mb-5 lg:mb-10 text-center'>How It Started</h2>
                    <div className='flex flex-col lg:flex-row justify-between gap-10'>
                        <Image src={'/pictures/insideShop/inside-shop-about-page.jpg'} alt={'shop lights'} width={1228} height={982}
                            className='h-80 sm:h-100 w-full object-cover rounded-2xl'
                        />
                        <div className='text-center lg:text-start m-auto'>
                            <h3 className='font-heading text-xl md:text-2xl text-text-primary mb-5'>A small idea, brewed one cup at a time.</h3>
                            <div className='font-body text-sm md:text-base text-text-secondary'>
                                <p className='mb-4'>What started with a simple love for good coffee became a place we wanted to share with others.</p>
                                <p className='mb-4'>
                                    We wanted to create a coffee shop that felt welcoming from the moment you walked through the door — 
                                    somewhere you could grab your morning coffee, settle in for a quiet afternoon, or meet a friend and 
                                    lose track of time.
                                </p>
                                <p>
                                    We work with carefully selected beans, thoughtful ingredients, and people who genuinely care about 
                                    what they create. Every cup is a little reminder that good things are worth taking the time to do properly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mt-15 flex justify-center'>
                <div className='m-1 sm:m-4 md:m-8 max-w-5xl text-center'>
                    <h2 className='font-heading text-2xl md:text-3xl text-text-primary mb-2'>GOOD COFFEE, GOOD COMPANY</h2>
                    <p className='font-heading text-base md:text-lg text-text-primary mb-5'>Come by for a cup. Stay for the conversation.</p>
                    <div className='flex justify-center'>
                        <PrimaryLinkButton href={'visitus'}>
                            <span className='mr-3'>Visit Us</span>
                            <svg className='w-5 m-auto' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
                                <path d='M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 01-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0112 0'/>
                                <path d='M4.474 15h-.197a1 1 0 00-.969.753l-1.097 4.35a1.5 1.5 0 001.444 1.898L20.344 22a1.5 1.5 0 001.446-1.897l-1.098-4.35a1 1 0 00-.969-.753h-.197'/>
                                <circle cx='12' cy='8' r='2'/>
                            </svg>
                        </PrimaryLinkButton>
                    </div>
                </div>
            </section>
        </div>
        
    ); 
}