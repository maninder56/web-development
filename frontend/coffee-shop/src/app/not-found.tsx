

import PrimaryLinkButton from '@/components/ui/primaryLinkButton';

export default function NotFound() {
  return (
    <div className='min-h-[75vh] flex items-center justify-center px-4 py-16'>
      <section className='w-full max-w-2xl mx-auto text-center'>
        <h1 className='font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary'>
          Page not found
        </h1>

        <p className='mt-5 max-w-lg mx-auto font-body text-base sm:text-lg text-text-secondary leading-relaxed'>
          Oops! We can&apos;t seem to find the page you&apos;re looking for. It
          may have been moved, deleted, or the link might be incorrect.
        </p>

        <div className='mt-8 flex justify-center'>
          <PrimaryLinkButton
            href={'/'}
          >
            <span>Back to Home</span>
          </PrimaryLinkButton>
        </div>

        <p className='mt-12 text-sm font-body text-text-secondary'>
          Think this is a mistake? Try returning to the homepage.
        </p>
      </section>
    </div>
  );
}
