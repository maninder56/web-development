import InfoCard from '@/components/ui/infoCard';


export default function CoffeeInfoCards() {
    const svgColour = '#7f3e0d'; 
    const cardInfoAndDetails: {
        title: string, 
        cardFrontDetails: string, 
        svg: React.ReactNode, 
        detailParagraphs: string[],
    }[] = [
        {
            title: 'Coffee info', 
            cardFrontDetails: 'Discover what makes every cup unique.', 
            svg:    
                <svg className='w-7' viewBox='0 0 24 24' fill='none'>
                    <path d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-6v-4m0-4h.01' 
                        stroke={svgColour} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                </svg>, 
            detailParagraphs: [
                'Coffee begins with the beans, and every bean has its own character. Where it is grown can influence its aroma, acidity, and flavour. The way the coffee is processed also changes how it tastes.', 
                'Some coffees can be bright and fruity, while others are rich and chocolatey. Roasting brings out different flavours and aromas from the beans. A lighter roast often keeps more of the bean\'s original character.', 
                'A darker roast creates deeper, bolder and more roasted flavours. Grinding the beans correctly is important for a balanced cup. The brewing method then brings all these flavours together. Every step plays a part in creating the coffee you enjoy.',
            ]
        }, 
        {
            title: 'How It\'s Made', 
            cardFrontDetails: 'See the craft behind every cup.', 
            svg: 
                <svg className='w-7' viewBox='0 0 30 30' fill='none' >
                    <path d='M4.416.002c-1.524-.07-2.558 1.684-1.76 2.94l2.756 4.47L.286 22.443l-.003.01C-.936 26.152 1.94 30 5.92 30h14.996c3.98 0 6.856-3.848 5.638-7.547l-.003-.01L21.68 8.158a1 1 0 0 0 .077-.07l2.47-2.408c.355.27.805.657 1.294 1.255 1.04 1.268 2.11 3.29 2.11 6.5a1.13 1.13 0 0 0 .341.828 1.2 1.2 0 0 0 .843.344 1.2 1.2 0 0 0 .844-.344 1.15 1.15 0 0 0 .34-.828c0-3.724-1.298-6.324-2.627-7.945-1.329-1.62-2.765-2.334-2.765-2.334a1.21 1.21 0 0 0-1.366.217l-1.917 1.87v-1.23c0-1.355-1.05-2.514-2.426-2.678C11.102.405 6.562.102 4.416.002m.658 2.38c2.212.112 6.207.372 13.537 1.247.2.023.344.178.344.383v2.104H7.377zm2.488 6.045h11.714l2.364 6.934H5.198zM4.41 17.673h18.018l1.872 5.49c.747 2.268-.941 4.526-3.383 4.526H5.92c-2.442 0-4.13-2.258-3.384-4.527v-.001z' 
                        fill={svgColour} />
                </svg>, 
            detailParagraphs: [
                'Making great coffee starts with choosing the right beans. The beans are carefully roasted to develop their natural flavours. Before brewing, they are ground to the right size for the method being used.', 
                'The amount of coffee and water needs to be measured carefully. Water temperature can also have a big effect on the final flavour. During brewing, water draws flavour from the freshly ground coffee.', 
                'Too little extraction can make coffee taste sharp or sour. Too much extraction can make it bitter and overpowering. Our baristas pay attention to these details with every cup. The result is a balanced coffee made to be enjoyed from the first sip.', 
            ],
        },
        {
            title: 'Benefits', 
            cardFrontDetails: 'More than just your morning ritual.', 
            svg: 
                <svg className='w-7' viewBox='0 0 24 24' fill='none'>
                    <path d='M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10' 
                        stroke={svgColour} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                    <path d='M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12' 
                        stroke={svgColour} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                </svg>, 
            detailParagraphs: [
                'For many people, coffee is a simple part of their daily routine. The caffeine in coffee can help you feel more awake and alert. It may also temporarily improve attention and concentration.',
                'Coffee naturally contains compounds with antioxidant properties. For some people, a cup of coffee can be a welcome moment to pause. It can be enjoyed slowly during a quiet morning or shared with friends.', 
                'The effects of caffeine can vary from person to person. Too much caffeine may cause restlessness or make it harder to sleep.', 
                'Finding the right amount is therefore part of enjoying coffee well. For many coffee lovers, the best benefit is simply a great cup of coffee.', 
            ],
        }
    ]

    return (
        <div className='mt-4 flex justify-center'>
          <div className='max-w-5xl flex-1 flex flex-col items-center sm:flex-row'>
            {
              cardInfoAndDetails.map((card, index) => {
                return (
                  <InfoCard key={index} className='m-2 h-full w-11/12 min-[450px]:w-90 sm:w-full' 
                    face={
                      <div className='h-full px-4 py-5 sm:py-2 flex'>
                        <div className='my-auto'>
                            {card.svg}
                          <h2 className='mt-3 font-heading font-medium text-2xl md:text-3xl text-text-primary'>{card.title}</h2>
                          <p className='font-body font-medium text-base md:text-lg text-text-secondary'>{card.cardFrontDetails}</p>
                        </div>
                      </div>
                    } 
                    cardDetails={
                      <div className='p-4 flex'>
                        <div className='flex-1'>
                          <h2 className='mb-4 font-heading font-medium text-2xl md:text-3xl text-text-primary text-center'>
                            {card.title}
                          </h2>
                          <div className='font-body font-medium text-base md:text-lg text-text-secondary text-center'>
                            {
                                card.detailParagraphs.map((p, i) => <p key={i} className='mb-2'>{p}</p>)
                            }
                          </div>
                        </div>
                      </div>
                    } 
                  />
                ); 
              })
            }
          </div>
        </div>
    ); 
}