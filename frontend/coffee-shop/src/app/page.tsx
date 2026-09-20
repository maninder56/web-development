
import PrimaryButton from '@/components/ui/primaryButton';
import '@/styles/variables.css'; 

export default function Home() {
  return (
    <div>
      <section>
        <div className='m-8 flex justify-center'>
          <div className='flex-1 max-w-5xl flex justify-between'>
            <div className='max-w-xl'>
              <h2 className='font-heading font-medium text-3xl text-text-primary'>A place to meet, pause, and stay awhile.</h2>
              <p className='font-body font-medium text-lg text-text-secondary'>From your first morning cup to an afternoon catch-up, we&apos;re here to make your day a little better.</p>
            </div>
            <PrimaryButton>Our Favourite</PrimaryButton>
          </div>
        </div>
        <div>Photo</div>
        <div>Cards</div>
      </section>
    </div>
  );
}
