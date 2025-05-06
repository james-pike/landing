'use client'

import { useState } from 'react'
import Image from 'next/image'
import VideoThumb from '@/public/images/video-thumb.jpg'

export default function Tabs() {

  const [category, setCategory] = useState<string>('design')

  const tabs = [
    {
      id: 'design',
      name: 'Design',
      description: 'Creating beautiful, intuitive interfaces that delight your customers.',
      icon: (
        <svg className="w-6 h-6 shrink-0 mr-3" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path className={`fill-current ${category === 'design' ? 'text-teal-200 dark:text-teal-400' : 'text-teal-500 dark:text-gray-400'}`} d="M15.4.6c-.84-.8-2.16-.8-3 0L8.7 4.3c.73.252 1.388.68 1.916 1.244.469.515.83 1.119 1.065 1.775L15.4 3.6c.8-.84.8-2.16 0-3zM4.937 6.9c-1.2 1.2-1.4 5.7-1.4 5.7s4.4-.4 5.6-1.5a2.987 2.987 0 000-4.2 2.9 2.9 0 00-4.2 0z" />
        </svg>
      ),
      content: {
        title: 'Beautiful User Interfaces',
        description: 'Our design process focuses on creating intuitive and visually appealing interfaces that enhance user experience.',
        listItems: [
          'User Interface Design',
          'User Experience Design', 
          'Responsive Web Design',
          'Mobile App Design'
        ]
      }
    },
    {
      id: 'development',
      name: 'Development', 
      description: 'Building robust, scalable applications with modern technologies.',
      icon: (
        <svg className="w-6 h-6 shrink-0 mr-3" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path className={`fill-current ${category === 'development' ? 'text-teal-200 dark:text-teal-400' : 'text-teal-500 dark:text-gray-400'}`} d="M5 16H4a4 4 0 01-4-4v-1h2v1a2 2 0 002 2h1v2zM13 10h-1.686l-1.207-1.207L14.37 4.63a2.121 2.121 0 00-3-3L7.207 5.793 5.99 4.576 5.98 3.02 3.038.079 0 3.117 3 6h1.586l1.207 1.207L4 9l3 3 1.793-1.793L10 11.414V13l3.01 3.01 2.98-2.979L13 10z" />
        </svg>
      ),
      content: {
        title: 'Robust Development Solutions',
        description: 'We build scalable, high-performance applications using modern technologies and best practices.',
        listItems: [
          'Full-stack Development',
          'Mobile App Development',
          'API Development', 
          'Cloud Solutions'
        ]
      }
    },
    {
      id: 'branding',
      name: 'Branding',
      description: 'Establishing memorable brand identities that resonate with your audience.',
      icon: (
        <svg className="w-6 h-6 shrink-0 mr-3" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path className={`fill-current ${category === 'branding' ? 'text-teal-200 dark:text-teal-400' : 'text-teal-500 dark:text-gray-400'}`} d="M6 0H1a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1V1a1 1 0 00-1-1zM5 5H2V2h3v3zM15 9h-5a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1zm-1 5h-3v-3h3v3z" />
        </svg>
      ),
      content: {
        title: 'Strategic Brand Identity',
        description: 'We help businesses establish a strong brand presence through comprehensive branding solutions.',
        listItems: [
          'Logo Design',
          'Brand Guidelines',
          'Visual Identity',
          'Brand Strategy'
        ]
      }
    }
  ]

  return (
    <section className="relative border-t border-transparent dark:border-gray-800">
      {/* Background gradient */}
      <div className="absolute inset-0 h-128 dark:opacity-25 bg-linear-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 pointer-events-none" aria-hidden="true"></div>
      {/* End background gradient */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-red-hat-display mb-4">Turn your ideas into reality in seconds</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
          </div>

          {/* Section content */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Category buttons */}
            <div className="lg:w-1/3">
              <div className="flex flex-row lg:flex-col gap-2 lg:gap-4">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    className={`flex-1 text-left p-4 lg:p-6 rounded-lg transition duration-150 ease-in-out ${category === tab.id ? 'bg-teal-500 hover:bg-teal-500 dark:bg-teal-600/25 dark:hover:bg-teal-600/25' : 'bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700'}`}
                    onClick={() => setCategory(tab.id)}
                  >
                    <div className="flex items-center">
                      {tab.icon}
                      <span className={`text-lg lg:text-xl font-semibold ${category === tab.id ? 'text-white dark:text-teal-400' : 'text-gray-900 dark:text-gray-300'}`}>{tab.name}</span>
                    </div>
                    <p className={`text-sm mt-3 hidden lg:block ${category === tab.id ? 'text-teal-100 dark:text-teal-300' : 'text-gray-600 dark:text-gray-400'}`}>
                      {tab.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Content area */}
            <div className="lg:w-2/3">
              {tabs.map(tab => (
                <div key={tab.id} className={category === tab.id ? 'block' : 'hidden'}>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                    <Image className="w-full h-60 rounded-lg mb-6" src={VideoThumb} width={700} height={150} alt={`${tab.name} services`} />
                    <h3 className="text-2xl font-semibold mb-4 dark:text-white">{tab.content.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{tab.content.description}</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                      {tab.content.listItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}