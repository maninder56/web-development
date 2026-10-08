'use client'

import { MenuNavigationSection } from '@/components/types/componentTypes';
import Image from 'next/image';


const itemArray: {
    id: MenuNavigationSection; 
    sectionTitle: string;
    phrase: string;
    sectionItems: {
        id: number; 
        name: string;
        price: number;
        imageUrl: string;
    }[]
}[] = [
    {
        id: 'coffee', 
        sectionTitle: 'Coffee',
        phrase: 'Carefully brewed, always fresh.',
        sectionItems: [
            {
                id: 1, 
                name: 'Espresso',
                price: 5.99,
                imageUrl: ''
            },
            {
                id: 2,
                name: 'Americano',
                price: 4.99,
                imageUrl: ''
            },
            {
                id: 3,
                name: 'Cappuccino',
                price: 5.49,
                imageUrl: ''
            },
            {
                id: 4,
                name: 'Flat White',
                price: 5.49,
                imageUrl: ''
            },
            {
                id: 5,
                name: 'Caffè Latte',
                price: 5.99,
                imageUrl: ''
            },
            {
                id: 6,
                name: 'Mocha',
                price: 6.49,
                imageUrl: ''
            }
        ]
    },
    {
        id: 'freshBakes',
        sectionTitle: 'Fresh bakes',
        phrase: 'Baked fresh for slow mornings.',
        sectionItems: [
            {
                id: 1,
                name: 'Butter Croissant',
                price: 4.25,
                imageUrl: ''
            },
            {
                id: 2,
                name: 'Pain au Chocolat',
                price: 4.75,
                imageUrl: ''
            },
            {
                id: 3,
                name: 'Blueberry Muffin',
                price: 4.5,
                imageUrl: ''
            },
            {
                id: 4,
                name: 'Cinnamon Roll',
                price: 4.95,
                imageUrl: ''
            },
            {
                id: 5,
                name: 'Banana Bread',
                price: 4.75,
                imageUrl: ''
            }
        ]
    },
    {
        id: 'littleBites',
        sectionTitle: 'Little bites',
        phrase: 'Simple, fresh, and made with care.',
        sectionItems: [
            {
                id: 1,
                name: 'Avocado Toast',
                price: 7.95,
                imageUrl: ''
            },
            {
                id: 2,
                name: 'Granola & Yogurt',
                price: 6.95,
                imageUrl: ''
            },
            {
                id: 3,
                name: 'Ham & Cheese Toastie',
                price: 8.5,
                imageUrl: ''
            },
            {
                id: 4,
                name: 'Hummus & Flatbread',
                price: 7.5,
                imageUrl: ''
            },
            {
                id: 5,
                name: 'Chocolate Brownie',
                price: 4.5,
                imageUrl: ''
            },
            {
                id: 6,
                name: 'Berry Oat Bar',
                price: 3.95,
                imageUrl: ''
            }
        ]
    },
    {
        id: 'cold&Refreshing',
        sectionTitle: 'Cold & Refreshing',
        phrase: 'Chilled, bright, and refreshing.',
        sectionItems: [
            {
                id: 1,
                name: 'Iced Latte',
                price: 5.99,
                imageUrl: ''
            },
            {
                id: 2,
                name: 'Iced Americano',
                price: 5.49,
                imageUrl: ''
            },
            {
                id: 3,
                name: 'Cold Brew',
                price: 5.95,
                imageUrl: ''
            },
            {
                id: 4,
                name: 'Iced Matcha',
                price: 6.25,
                imageUrl: ''
            },
            {
                id: 5,
                name: 'Fresh Lemonade',
                price: 4.95,
                imageUrl: ''
            },
            {
                id: 6,
                name: 'Peach Iced Tea',
                price: 4.95,
                imageUrl: ''
            }
        ]
    }
];


export default function MenuItems() {
    return (
        <div className='flex-1 max-w-4xl'>
            {
                itemArray.map(section => 
                    <div key={section.id} id={section.id}
                        className='my-15 scroll-mt-25'
                    >
                        <div className='mb-5'>
                            <h2 className='font-heading text-3xl md:text-4xl text-text-primary'>{section.sectionTitle}</h2>
                            <p className='font-body text-base md:text-lg text-text-secondary'>{section.phrase}</p>
                        </div>
                        <div className='grid grid-cols-[repeat(auto-fill,minmax(240,1fr))] gap-6 sm:mx-5'>
                            {
                                section.sectionItems.map(item => 
                                    <div key={item.id}
                                        className='p-3 max-w-80 w-full rounded-2xl bg-surface-primary m-auto'
                                    >
                                        <Image className='max-w-80 h-60 w-full object-cover m-auto rounded-2xl'
                                            src={'/pictures/coffeeCup.avif'} width={1287} height={1931} alt='Coffee picture' />
                                        <div className='flex justify-between mt-2 mx-2 font-body text-base md:text-lg text-text-primary'>
                                            <p>{item.name}</p>
                                            <p>£{item.price}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </div>
    ); 
}