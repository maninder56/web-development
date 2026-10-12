'use client';

import PrimaryButton from '@/components/ui/primaryButton';
import { useEffect } from 'react';

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='min-h-[75vh] flex items-center justify-center px-4 py-16 '>
      <section
        className='w-full max-w-xl mx-auto text-center rounded-2xl bg-surface-primary p-8 sm:p-12'
        role='alert'
        aria-live='assertive'
      >
        <div
          className='mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10'
        >
          <svg
            width='40'
            height='40'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.7'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='text-red-500'
            aria-hidden='true'
          >
            <circle cx='12' cy='12' r='9' />
            <path d='M12 8v4' />
            <path d='M12 16h.01' />
          </svg>
        </div>

        <h1
          className='font-heading text-3xl sm:text-4xl font-semibold text-text-primary'
        >
          Something went wrong!
        </h1>

        <p
          className='mt-4 max-w-md mx-auto font-body text-base sm:text-lg leading-relaxed text-text-secondary'
        >
          We&apos;re sorry, but something unexpected happened. Please try again.
          If the problem persists, come back in a little while.
        </p>

        <div className='mt-8 flex justify-center'>
          <PrimaryButton onClick={() => retry()}>
            <span className='inline-flex items-center justify-center gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                aria-hidden='true'
              >
                <path d='M20 7v5h-5' />
                <path d='M4 17v-5h5' />
                <path d='M5.6 9a7 7 0 0 1 11.6-2L20 12' />
                <path d='M4 12l2.8 5a7 7 0 0 0 11.6-2' />
              </svg>
              <span>Try again</span>
            </span>
          </PrimaryButton>
        </div>

        <p className='mt-6 font-body text-sm text-text-secondary'>
          Your patience is appreciated.
        </p>
      </section>
    </div>
  );
}
