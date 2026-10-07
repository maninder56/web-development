
import InfoCard from '@/components/ui/infoCard';
import CustomersReviewCard from '@/features/home/customersReviewCard';
import FavouriteCoffeeCards from '@/features/home/favouriteCoffeeCards';
import MenuNavigation from '@/features/menu/menuNavigation';


export default function Menu() {
    return (
        <div className='mt-4 sm:m-4 md:m-8 transition-[margin] duration-500 ease-in-out flex justify-center'>
            <section className='flex-1 max-w-5xl m-1'>
                <div className='text-center lg:text-start'>
                    <h1 className='font-heading text-3xl md:text-4xl text-text-primary'>Our Menu</h1>
                    <p className='font-body text-base md:text-lg text-text-secondary'>Good coffee, good food, and something for every kind of day.</p>
                </div>
                <div className='flex justify-center'>
                    <MenuNavigation />
                </div>
            </section>
        </div>
    ); 
}