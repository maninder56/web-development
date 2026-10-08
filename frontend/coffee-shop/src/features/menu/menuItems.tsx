'use client'

import { MenuNavigationSection } from '@/components/types/componentTypes';
import Image from 'next/image';

const GBP = new Intl.NumberFormat('en-GB', {
    style: 'currency', 
    currency: 'GBP', 
}); 

const itemArray: {
  id: MenuNavigationSection;
  sectionTitle: string;
  phrase: string;
  sectionItems: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  }[];
}[] = [
  {
    id: 'coffee',
    sectionTitle: 'Coffee',
    phrase: 'Carefully brewed, always fresh.',
    sectionItems: [
      {
        id: 1,
        name: 'Caramel Latte',
        price: 4.5,
        imageUrl: '/pictures/products/Caramel_Latte.jpg',
      },
      {
        id: 2,
        name: 'Americano',
        price: 3.5,
        imageUrl: '/pictures/products/Americano.jpg',
      },
      {
        id: 3,
        name: 'Cappuccino',
        price: 4.25,
        imageUrl: '/pictures/products/Cappuccino.jpg',
      },
      {
        id: 4,
        name: 'Flat White',
        price: 4.25,
        imageUrl: '/pictures/products/Flat_White.jpg',
      },
      {
        id: 5,
        name: 'Caffè Latte',
        price: 4.25,
        imageUrl: '/pictures/products/Caffè_Latte.jpg',
      },
      {
        id: 6,
        name: 'Mocha',
        price: 4.5,
        imageUrl: '/pictures/products/Mocha.jpg',
      },
    ],
  },

  {
    id: 'freshBakes',
    sectionTitle: 'Fresh bakes',
    phrase: 'Baked fresh for slow mornings.',
    sectionItems: [
      {
        id: 1,
        name: 'Butter Croissant',
        price: 2.75,
        imageUrl: '/pictures/products/Butter_Croissant.jpg',
      },
      {
        id: 2,
        name: 'Chocolate Fudge Cake',
        price: 4.95,
        imageUrl: '/pictures/products/Chocolate_Fudge_Cake.jpg',
      },
      {
        id: 3,
        name: 'Blueberry Muffin',
        price: 3.25,
        imageUrl: '/pictures/products/Blueberry_Muffin.jpg',
      },
      {
        id: 4,
        name: 'Cinnamon Roll',
        price: 3.5,
        imageUrl: '/pictures/products/Cinnamon_Roll.jpg',
      },
      {
        id: 5,
        name: 'Banana Bread',
        price: 3.5,
        imageUrl: '/pictures/products/Banana_Bread.jpg',
      },
    ],
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
        imageUrl: '/pictures/products/Avocado_Toast.jpg',
      },
      {
        id: 2,
        name: 'Granola & Yogurt',
        price: 6.95,
        imageUrl: '/pictures/products/Granola&Yogurt.jpg',
      },
      {
        id: 3,
        name: 'Ham & Cheese Toastie',
        price: 8.5,
        imageUrl: '/pictures/products/Ham&Cheese_Toastie.jpg',
      },
    ],
  },

  {
    id: 'cold&Refreshing',
    sectionTitle: 'Cold & Refreshing',
    phrase: 'Chilled, bright, and refreshing.',
    sectionItems: [
      {
        id: 1,
        name: 'Iced Vanilla Latte',
        price: 4.5,
        imageUrl: '/pictures/products/Iced_Vanilla_Latte.jpg',
      },
      {
        id: 2,
        name: 'Iced Americano',
        price: 3.75,
        imageUrl: '/pictures/products/Iced_Americano.jpg',
      },
      {
        id: 3,
        name: 'Cold Brew',
        price: 4.25,
        imageUrl: '/pictures/products/Cold_Brew.jpg',
      },
      {
        id: 4,
        name: 'Berry Lemonade',
        price: 4.5,
        imageUrl: '/pictures/products/Berry_Lemonade.jpg',
      },
      {
        id: 5,
        name: 'Iced Matcha',
        price: 4.75,
        imageUrl: '/pictures/products/Iced_Matcha.jpg',
      },
    ],
  },
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
                                        className='p-3 max-w-80 h-full w-full rounded-2xl bg-surface-primary m-auto'
                                    >
                                        <Image className='max-w-80 h-60 w-full object-cover m-auto rounded-2xl'
                                            src={item.imageUrl.length === 0 ? '/pictures/coffeeCup.avif' : item.imageUrl} width={1287} height={1931} alt='Coffee picture' />
                                        <div className='flex justify-between mt-2 mx-2 font-body text-base md:text-lg text-text-primary'>
                                            <p>{item.name}</p>
                                            <p>{GBP.format(item.price)}</p>
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