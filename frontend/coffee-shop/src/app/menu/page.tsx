
import InfoCard from "@/components/ui/infoCard";
import FavouriteCoffeeCards from "@/features/home/favouriteCoffeeCards";


export default function Menu() {
    return (
        <section>
            <h1 className='text-5xl'>Menu Page</h1>
            <FavouriteCoffeeCards />
        </section>
    ); 
}