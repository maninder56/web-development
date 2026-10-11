'use client'

import PrimaryButton from '@/components/ui/primaryButton';

export default function Contact() {
    return (
      <div className='m-1 sm:m-6 md:m-10 flex justify-center'>
        <section className='w-full max-w-5xl text-center'>
          <h1 className='font-heading text-4xl md:text-5xl text-text-primary'>
            Contact Us
          </h1>

          <p className='mt-3 font-body text-base md:text-lg text-text-secondary'>
            We would love to hear from you. Tell us how we can help.
          </p>

          <div className='flex justify-center mt-8 md:mt-12'>
            <form onSubmit={(e) => {
                e.preventDefault(); 
            }}
                className='w-full max-w-3xl rounded-2xl bg-surface-primary shadow-lg p-2 sm:p-8 md:p-10 text-left'
            >
              <div className='mb-8 text-center'>
                <h2 className='font-heading font-medium text-xl md:text-2xl text-text-primary'>
                  Send us a message
                </h2>
                <p className='mt-2 font-body text-sm md:text-base text-text-secondary'>
                  Fill out the form below and we will get back to you.
                </p>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div className='flex flex-col gap-2'>
                  <label
                    htmlFor='name'
                    className='font-body text-lg font-medium text-text-primary'
                  >
                    Full name <span className='text-red-500'>*</span>
                  </label>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    autoComplete='name'
                    placeholder='John Doe'
                    required
                    className={`w-full rounded-lg border-[1.5px] border-border-primary
                        bg-surface-primary p-2 text-text-primary text-base
                        placeholder:text-text-secondary/50
                        focus:outline-none focus:ring-2 focus:ring-border-secondary
                        focus:border-transparent transition
                    `}
                  />
                </div>

                <div className='flex flex-col gap-2'>
                  <label
                    htmlFor='email'
                    className='font-body text-lg font-medium text-text-primary'
                  >
                    Email address <span className='text-red-500'>*</span>
                  </label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    placeholder='john@example.com'
                    required
                    className={`w-full rounded-lg border-[1.5px] border-border-primary
                        bg-surface-primary p-2 text-text-primary text-base
                        placeholder:text-text-secondary/50
                        focus:outline-none focus:ring-2 focus:ring-border-secondary
                        focus:border-transparent transition
                    `}
                  />
                </div>
              </div>

              <div className='mt-5 flex flex-col gap-2'>
                <label
                  htmlFor='subject'
                  className='font-body text-lg font-medium text-text-primary'
                >
                  Subject
                </label>
                <input
                  id='subject'
                  name='subject'
                  type='text'
                  placeholder='What is your message about?'
                  className={`w-full rounded-lg border-[1.5px] border-border-primary
                        bg-surface-primary p-2 text-text-primary text-base
                        placeholder:text-text-secondary/50
                        focus:outline-none focus:ring-2 focus:ring-border-secondary
                        focus:border-transparent transition
                    `}
                />
              </div>

              <div className='mt-5 flex flex-col gap-2'>
                <label
                  htmlFor='message'
                  className='font-body text-lg font-medium text-text-primary'
                >
                  Message <span className='text-red-500'>*</span>
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={5}
                  placeholder='Tell us how we can help...'
                  required
                  className={`w-full rounded-lg border-[1.5px] border-border-primary
                        bg-surface-primary p-2 text-text-primary text-base
                        placeholder:text-text-secondary/50
                        focus:outline-none focus:ring-2 focus:ring-border-secondary
                        focus:border-transparent transition
                    `}
                />
              </div>

              <div className='mt-6 flex justify-center'>
                <PrimaryButton>
                  <span>Send Message</span>
                </PrimaryButton>
              </div>

              <p className='mt-4 text-center text-sm text-text-secondary'>
                We will only use your details to respond to your enquiry.
              </p>
            </form>
          </div>
        </section>
      </div>
    ); 
}