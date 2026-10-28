'use client'

import SecondaryButton from '@/components/ui/secondaryButton';
import SecondaryExternalLinkButton from '@/components/ui/secondaryExternalLinkButton';
import { HomePageNavigationElementID } from '@/types/global';

const contactSectionId: HomePageNavigationElementID = 'contact'; 

export default function Contact() {
    return (
        <div className='text-text-secondary max-w-5xl m-auto py-30 p-2'>
            <h2 id={contactSectionId} 
                className='font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-end scroll-mt-10'
            >
                Let&apos;s work together
            </h2>
            <p className='my-10 font-heading text-center text-xs sm:text-sm'>
                Have a project in mind? Tell me a little about it and I&apos;ll reply within 1-2 working days.
            </p>
            <div className='flex flex-col gap-20 md:gap-10 md:flex-row'>
                <form 
                    className='max-w-xl m-auto w-full'
                    onSubmit={(e) => {
                        e.preventDefault(); 
                    }}
                >
                    <div className='m-2 flex flex-col'>
                        <label 
                            htmlFor='name'
                            className='font-heading ml-4'
                        >
                            Name 
                            <span className='text-red-500 ml-1'>*</span>
                        </label>
                        <input 
                            id='name'
                            name='name' 
                            type='text' 
                            autoComplete='name' 
                            required 
                            className={`
                                font-body m-2 p-2 rounded-lg border-[1.4px] border-border-dark
                                text-base
                                focus:outline-none focus:ring-2 focus:ring-surface-primary
                                focus:border-transparent transition
                            `}
                        />
                    </div>
                    <div className='m-2 mt-5 flex flex-col'>
                        <label 
                            htmlFor='email'
                            className='font-heading ml-4'
                        >
                            Email 
                            <span className='text-red-500 ml-1'>*</span>
                        </label>
                        <input 
                            id='email' 
                            name='email' 
                            type='email' 
                            autoComplete='email' 
                            required 
                            className={`
                                font-body m-2 p-2 rounded-lg border-[1.4px] border-border-dark
                                text-base
                                focus:outline-none focus:ring-2 focus:ring-surface-primary
                                focus:border-transparent transition
                            `}
                        />
                    </div>
                    <div className='m-2 mt-5 flex flex-col'>
                        <label
                            htmlFor='message'
                            className='font-heading ml-4'
                        >
                            Message <span className='text-red-500'>*</span>
                        </label>
                        <textarea 
                            name='message'
                            rows={5}
                            placeholder='Tell me what you have in mind'
                            required
                            maxLength={500}
                            className={`
                                font-body m-2 p-2 rounded-lg border-[1.4px] border-border-dark
                                text-base placeholder:text-text-secondary/60
                                focus:outline-none focus:ring-2 focus:ring-surface-primary
                                focus:border-transparent transition
                            `}
                        />
                    </div>
                    <p className='font-body text-base text-center'>I&apos;ll only use your details to reply to your message.</p>
                    <SecondaryButton className='m-auto mt-5'>
                        <span>Send Message</span>
                    </SecondaryButton>
                </form>
                <div className='flex-1 m-auto'>
                    <div className='text-center mb-15'>
                        <h5 className='font-heading text-lg md:text-xl mb-4'>Email</h5>
                        <p className='font-body text-lg md:text-xl'>maninder123450@gmail.com</p>
                    </div>
                    <div className='m-auto flex'>
                        <SecondaryExternalLinkButton href='https://github.com/maninder56' className='m-auto'>
                            <span className='mr-2'>GitHub</span>
                            <svg className='m-auto w-7' viewBox="0 0 120 116" fill="none">
                                <path d="M60 0C26.86 0 0 26.622 0 59.468c0 26.27 17.187 48.563 41.033 56.433 3.002.537 4.084-1.293 4.084-2.867 0-1.413-.048-5.158-.066-10.113-16.693 3.59-20.218-7.977-20.218-7.977-2.72-6.869-6.66-8.7-6.66-8.7-5.444-3.69.415-3.606.415-3.606 6.028.417 9.186 6.129 9.186 6.129 5.354 9.087 14.053 6.463 17.458 4.943.547-3.846 2.111-6.47 3.82-7.954-13.32-1.497-27.323-6.6-27.323-29.394 0-6.481 2.34-11.8 6.16-15.95-.608-1.508-2.683-7.56.595-15.74 0 0 5.035-1.604 16.495 6.088a58 58 0 0 1 15.015-2.004 58 58 0 0 1 15.015 2.004c11.466-7.698 16.495-6.088 16.495-6.088 3.278 8.18 1.221 14.232.596 15.74 3.85 4.15 6.16 9.463 6.16 15.95 0 22.853-14.017 27.874-27.384 29.346 2.136 1.837 4.06 5.462 4.06 11.007 0 7.953-.071 14.369-.071 16.319 0 1.592 1.07 3.44 4.132 2.856C102.831 108.007 120 85.732 120 59.468 120 26.622 93.14 0 60 0" 
                                    fillRule="evenodd" clipRule="evenodd" fill="#333333"/>
                            </svg>
                        </SecondaryExternalLinkButton>
                    </div>
                </div>
            </div>
        </div>
    ); 
}