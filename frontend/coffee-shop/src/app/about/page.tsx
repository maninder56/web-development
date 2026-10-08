import Image from "next/image";


export default function About() {
    return (
        <div className='mt-4 sm:m-4 md:m-8 transition-[margin] duration-500 ease-in-out flex justify-center'>
            <section className='flex-1 max-w-5xl m-1 text-center'>
                <h1 className='font-heading text-4xl md:text-5xl text-text-primary mb-10'>Our Story</h1>
                <h2 className='font-heading text-2xl md:text-3xl text-text-primary mb-2'>Coffee made with intention</h2>
                <div className='font-body text-base md:text-lg text-text-secondary mb-8'>
                    <p className='mb-5'>We believe great coffee is about more than what&apos;s in the cup. It&apos;s about the care behind every detail, the people you share it with, and the little moments that make an ordinary day feel special.</p>
                    <p>From thoughtfully sourced beans to a welcoming space, everything we do is made with intention.</p>
                </div>
                <Image src={'/pictures/insideShop/shopCounter.jpg'} alt={'shop counter'} width={5128} height={3045}
                    className='h-130 sm:h-150 lg:h-170 xl:h-200 w-full object-cover'
                />
            </section>
        </div>
        
    ); 
}