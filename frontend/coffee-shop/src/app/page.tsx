
import PrimaryButton from '@/components/ui/primaryButton';
import '@/styles/variables.css'; 
import Image from 'next/image';

export default function Home() {
  return (
    <div className='m-1 mt-4 sm:m-4 md:m-8 transition-[margin] duration-500 ease-in-out'>
      <section className='animate-reveal-drop'>
        <div className='flex justify-center mb-4'>
          <div className='flex-1 max-w-5xl flex flex-col sm:flex-row justify-between'>
            <div className='m-auto sm:m-0 sm:mr-2 max-w-xl text-center sm:text-start'>
              <h2 className='font-heading font-medium text-2xl md:text-3xl text-text-primary'>A place to meet, pause, and stay awhile.</h2>
              <p className='font-body font-medium text-base md:text-lg text-text-secondary'>From your first morning cup to an afternoon catch-up, we&apos;re here to make your day a little better.</p>
            </div>
            <PrimaryButton className='m-auto mt-4 sm:mt-auto sm:m-0'>
              <span className='m-auto mr-2 text-lg sm:text-xl'>Our Favourite</span>
              <svg viewBox='0 0 20 19' fill='none'
                className='m-auto w-5 sm:w-7'>
                <path d='M9.573 1.263A.47.47 0 0 1 10.001 1a.48.48 0 0 1 .427.263l2.08 4.17c.136.275.338.513.588.693s.54.297.847.341l4.648.674a.48.48 0 0 1 .386.322.47.47 0 0 1-.121.484l-3.362 3.243a1.89 1.89 0 0 0-.55 1.674l.794 4.581a.47.47 0 0 1-.19.465.48.48 0 0 1-.504.035l-4.156-2.165a1.93 1.93 0 0 0-1.775 0l-4.155 2.165a.48.48 0 0 1-.666-.24.47.47 0 0 1-.027-.26l.793-4.58a1.87 1.87 0 0 0-.55-1.675L1.146 7.948a.471.471 0 0 1 .264-.808l4.648-.673a1.9 1.9 0 0 0 .848-.34c.25-.181.452-.419.59-.693z' 
                  stroke='#f7deb7' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
              </svg>
            </PrimaryButton>
          </div>
        </div>
        <div className='flex justify-center relative'>
          <Image className={`
            max-w-5xl h-150 sm:h-200 w-full object-cover
            transition-all duration-500 ease-in-out
            rounded-xl sm:rounded-2xl 
          `} 
            src={'/pictures/coffeeCup.avif'} width={1287} height={1931} alt='Coffee picture' />
        </div>
        <div className='mt-4 flex justify-center apply-borders'>
          <div className='max-w-5xl flex-1'>
            Cards
          </div>
        </div>
      </section>
    </div>
  );
}
