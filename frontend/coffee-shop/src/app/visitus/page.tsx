

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API; 

export default function VisitUs() {
    return (
        <div className='m-1 mt-4 sm:m-4 md:m-8 flex justify-center'>
            <section className='max-w-4xl text-center w-full'>
                <h1 className='font-heading text-4xl md:text-5xl text-text-primary mb-10'>Visit Us</h1>
                <div className='flex flex-col items-center gap-10 lg:flex-row lg:justify-between'>
                    <div className='max-w-100 p-4 w-full bg-surface-primary rounded-2xl shadow-xl'>
                        <h3 className='font-heading text-2xl md:text-3xl text-text-primary mb-2'>Location</h3>
                        <p className='font-body text-base md:text-lg text-text-secondary'>18 Rosewood Lane, Notting Hill, London W11 3AB</p>
                    </div>
                    <div className='max-w-100 p-4 w-full bg-surface-primary rounded-2xl shadow-xl'>
                        <h3 className='font-heading text-2xl md:text-3xl text-text-primary mb-2'>Opening Hours</h3>
                        <div className='font-body text-base md:text-lg text-text-secondary'>
                            <p>Monday - Friday : 6:00 - 18:00</p>
                            <p>Saturday - Sunday : 8:00 - 16:00</p>
                        </div>
                    </div>
                </div>
                <iframe className='w-full h-100 sm:h-150 mt-10 rounded-2xl shadow-xl' loading='lazy' allowFullScreen 
                    src={`https://www.google.com/maps/embed/v1/view?zoom=15&center=51.3941%2C0.0240&key=${apiKey}`} />
            </section>
        </div>
    ); 
}