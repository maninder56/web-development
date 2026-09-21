
import PrimaryButton from '@/components/ui/primaryButton';
import '@/styles/variables.css'; 

export default function Home() {
  return (
    <div>
      <section className='animate-reveal-drop'>
        <div className='m-8 flex justify-center'>
          <div className='flex-1 max-w-5xl flex justify-between'>
            <div className='max-w-xl'>
              <h2 className='font-heading font-medium text-3xl text-text-primary'>A place to meet, pause, and stay awhile.</h2>
              <p className='font-body font-medium text-lg text-text-secondary'>From your first morning cup to an afternoon catch-up, we&apos;re here to make your day a little better.</p>
            </div>
            <PrimaryButton className='mt-auto'>
              <span className='m-auto mr-2'>Our Favourite</span>
              <svg width='30' height='30' viewBox='0 0 20 19' fill='none'
                className='m-auto'>
                <path d='M9.573 1.263A.47.47 0 0 1 10.001 1a.48.48 0 0 1 .427.263l2.08 4.17c.136.275.338.513.588.693s.54.297.847.341l4.648.674a.48.48 0 0 1 .386.322.47.47 0 0 1-.121.484l-3.362 3.243a1.89 1.89 0 0 0-.55 1.674l.794 4.581a.47.47 0 0 1-.19.465.48.48 0 0 1-.504.035l-4.156-2.165a1.93 1.93 0 0 0-1.775 0l-4.155 2.165a.48.48 0 0 1-.666-.24.47.47 0 0 1-.027-.26l.793-4.58a1.87 1.87 0 0 0-.55-1.675L1.146 7.948a.471.471 0 0 1 .264-.808l4.648-.673a1.9 1.9 0 0 0 .848-.34c.25-.181.452-.419.59-.693z' 
                  stroke='#f7deb7' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
              </svg>
            </PrimaryButton>
          </div>
        </div>
        <div>Photo</div>
        <div>Cards</div>
      </section>
    </div>
  );
}
