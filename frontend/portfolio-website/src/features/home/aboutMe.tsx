'use client'

import { HomePageNavigationElementID } from '@/types/global';


const aboutSectionId: HomePageNavigationElementID = 'about'; 

const skillsList: {
    languagesAndTools: string[], 
    frameworksAndLibraries: string[]; 
} = {
    languagesAndTools: [
        'C#',
        'TypeScript',
        'JavaScript',
        'SQL',
        'HTML',
        'CSS',
        'MySQL',
        'SQLite',
        'Git and GitHub',
        'Docker',
        'Linux',
        'Nginx',
        'Figma',
        'GitHub Actions (CI/CD)',
    ],
    frameworksAndLibraries: [
        'ASP.NET Core',
        '.NET',
        'Entity Framework Core',
        'Razor Pages',
        'React',
        'Next.js',
        'Tailwind CSS',
        'Framer Motion',
        'SignalR',
        'dnd-kit',
        'xUnit',
    ],
}; 

export default function AboutMe() {
    return (
        <div className='max-w-5xl m-auto py-15 p-2 text-text-primary'>
            <h2 id={aboutSectionId} className='font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl scroll-mt-10'>A little about me</h2>
            <div className='mt-5 flex flex-col md:flex-row md:gap-10'>
                <p className='flex-1 font-body text-lg sm:text-xl'>
                    I help businesses get online with
                    websites and web tools that are fast,
                    reliable and built to last. I take care of
                    the whole process, from design to
                    hosting, and I keep up with new
                    technology so your project is built on
                    solid, current foundations. If you have a
                    website to build or a process to simplify,
                    let&apos;s talk. 
                </p>
                <div className='flex-1 mt-10'>
                    <h4 className='font-heading text-xl sm:text-2xl md:text-3xl text-center'>Skills</h4>
                    <div className='flex font-body gap-5 mt-5'>
                        <ul className='flex-1 max-w-60 mx-auto'>
                            <header className='mb-2 font-heading text-sm md:text-base'>Languages & Tools</header>
                            {
                                skillsList.languagesAndTools.map((l, i) => {
                                    return (
                                        <li key={i} className='ml-5 text-base md:text-lg'>{l}</li>
                                    )
                                })
                            }
                        </ul>
                        <ul className='flex-1 max-w-60 mx-auto'>
                            <header className='mb-2 font-heading text-sm md:text-base'>Frameworks & Libraries</header>
                            {
                                skillsList.frameworksAndLibraries.map((l, i) => {
                                    return (
                                        <li key={i} className='ml-5 md:text-lg'>{l}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    ); 
}