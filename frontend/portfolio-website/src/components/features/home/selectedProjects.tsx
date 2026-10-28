'use client'

import SecondaryExternalLinkButton from '@/components/ui/secondaryExternalLinkButton';
import Image from 'next/image';
import { useState } from 'react';


type ProjectsList = {
    id: number; 
    name: string; 
    description: string; 
    WebsiteLink: string; 
    githubLink: string; 
    imageSrc: string; 
}[]; 

const projectsList: ProjectsList = [
    {
        id: 1, 
        name: 'Kanban Project Management Tool',
        description: 
            `A collaborative task board where teams
            organise work into boards, lists and
            cards. Changes appear instantly for
            everyone connected, so there's no
            refreshing and no confusion over who
            changed what. Tasks move with simple
            drag and drop, and secure logins with
            role-based access keep each team's
            work private.`,
        WebsiteLink: 'https://plannerexample.co.uk',
        githubLink: 'https://github.com/maninder56/Planner-Web-App',
        imageSrc: '/pictures/selectedProjects/plannerProject.png'
    }, 
    {
        id: 2, 
        name: 'Coffee Shop',
        description: 
            `A modern, mobile-friendly website for a
            coffee shop, designed in Figma first so
            every page, colour and component
            stays consistent. Smooth, subtle
            animations bring the menu and pages
            to life, and the whole site is styled to
            look sharp on any screen. It's packaged
            in Docker and shipped through an
            automated pipeline, so updates go live
            reliably without manual steps.`,
        WebsiteLink: '',
        githubLink: 'https://github.com/maninder56/web-development/tree/main/frontend/coffee-shop',
        imageSrc: '/pictures/selectedProjects/coffeeShopProject.png'
    }, 
    {
        id: 3, 
        name: 'Personal Finance Tracker',
        description: 
            `A simple, responsive tool for tracking
            transactions and understanding
            spending habits, with fast filtering and
            clear summaries.`,
        WebsiteLink: 'https://personalfinanceexample.co.uk',
        githubLink: 'https://github.com/maninder56/Personal-Finance-Web-App',
        imageSrc: '/pictures/selectedProjects/financeTrackerProject.png'
    }, 
]; 

export default function SelectedProjects() {
    

    return (
        <div className='text-text-secondary max-w-5xl m-auto pt-20 p-2'>
            <h2 id='work' className='font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-end scroll-mt-10'>Selected Projects</h2>
            {
                projectsList.map(project => {
                    const even: boolean = project.id % 2 === 0; 
                    return (
                        <div key={project.id} className='mt-10 sm:mt-20 md:mt-30'>
                            <h3 className={`
                                font-heading 
                                text-lg sm:text-xl md:text-2xl lg:text-3xl 
                                ${even ? 'text-start' : 'text-end'}
                                `}
                            >
                                {project.name}
                            </h3>
                            <div className={`
                                mt-5 sm:mt-10
                                flex flex-col-reverse 
                                ${even ? 'lg:flex-row-reverse' : 'lg:flex-row'} 
                                gap-5 lg:gap-8
                                `}
                            >
                                <div className='flex-1 flex flex-col justify-center'>
                                    <p className='font-body text-base sm:text-lg'>{project.description}</p>
                                    <div className='flex justify-evenly max-[375px]:flex-col lg:flex-col'>
                                        <SecondaryExternalLinkButton href={project.WebsiteLink} className='m-auto my-5'>
                                            <span className='mr-2'>View live site</span>
                                            <svg className='m-auto w-4' viewBox="0 0 55 55" fill="none">
                                                <path d="m2.5 52.5 50-50m0 37.5V2.5H15" 
                                                    strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" stroke="#333333"/>
                                            </svg>
                                        </SecondaryExternalLinkButton>
                                        <SecondaryExternalLinkButton href={project.githubLink} className='m-auto my-5'>
                                            <span className='mr-2'>View code</span>
                                            <svg className='m-auto w-7' viewBox="0 0 120 116" fill="none">
                                                <path d="M60 0C26.86 0 0 26.622 0 59.468c0 26.27 17.187 48.563 41.033 56.433 3.002.537 4.084-1.293 4.084-2.867 0-1.413-.048-5.158-.066-10.113-16.693 3.59-20.218-7.977-20.218-7.977-2.72-6.869-6.66-8.7-6.66-8.7-5.444-3.69.415-3.606.415-3.606 6.028.417 9.186 6.129 9.186 6.129 5.354 9.087 14.053 6.463 17.458 4.943.547-3.846 2.111-6.47 3.82-7.954-13.32-1.497-27.323-6.6-27.323-29.394 0-6.481 2.34-11.8 6.16-15.95-.608-1.508-2.683-7.56.595-15.74 0 0 5.035-1.604 16.495 6.088a58 58 0 0 1 15.015-2.004 58 58 0 0 1 15.015 2.004c11.466-7.698 16.495-6.088 16.495-6.088 3.278 8.18 1.221 14.232.596 15.74 3.85 4.15 6.16 9.463 6.16 15.95 0 22.853-14.017 27.874-27.384 29.346 2.136 1.837 4.06 5.462 4.06 11.007 0 7.953-.071 14.369-.071 16.319 0 1.592 1.07 3.44 4.132 2.856C102.831 108.007 120 85.732 120 59.468 120 26.622 93.14 0 60 0" 
                                                    fillRule="evenodd" clipRule="evenodd" fill="#333333"/>
                                            </svg>
                                        </SecondaryExternalLinkButton>
                                    </div>
                                </div>
                                <div className='flex-2'>
                                    <Image src={project.imageSrc} alt={`${project.name} picture`} height={1740} width={2175} 
                                        className='rounded-2xl'
                                    />
                                </div>
                            </div>
                        </div>
                    ); 
                })
            }
        </div>
    ); 
}