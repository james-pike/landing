'use client'

import { useState } from 'react'
import Image from 'next/image'
import PlayImage from '@/public/images/play.jpeg'
import WalkImage from '@/public/images/walk.jpeg'
import WriteImage from '@/public/images/write.jpeg'
import SingImage from '@/public/images/sing.jpeg'

export default function Tabs() {

  const [category, setCategory] = useState<string>('design')

  const tabs = [
    {
      id: 'design',
      name: 'Play',
      description: 'Expressive arts includes any and all creative modalities: visual arts, writing, tactile activities, storytelling, drama, music and movement, clowning, and puppetry.',
      image: PlayImage,
      color: 'text-teal-500',
      icon: (
        <svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-current" d="M15.4.6c-.84-.8-2.16-.8-3 0L8.7 4.3c.73.252 1.388.68 1.916 1.244.469.515.83 1.119 1.065 1.775L15.4 3.6c.8-.84.8-2.16 0-3zM4.937 6.9c-1.2 1.2-1.4 5.7-1.4 5.7s4.4-.4 5.6-1.5a2.987 2.987 0 000-4.2 2.9 2.9 0 00-4.2 0z" />
        </svg>
      ),
      content: {
        title: 'Expressive Arts & Play',
        description: 'The most wonderful course I ever joined was an Expressive Arts certificate program at a community college in Haliburton, Ontario. I completed the Graduate Certificate Program there in 2016. Bringing expressive arts into my psychotherapy work was probably the most powerful way that I could help facilitate healing, my own and those under my care. In psychiatry, the focus is too often on deficiencies and mental pathology, where what is needed are avenues for healing.',
        additionalContent: "Julia Cameron, author of The Artist's Way: A Spiritual Path to Higher Creativity, encourages a regular \"artist's date,\" and she views our creative self as akin to what therapists refer to as our \"inner child.\" Like any child, our creative self needs care and time to play and it needs nurturing. It's a simple thing, which all good parents learn from their children. Life is miserable when there isn't enough space to play. As adults, we have learned to put aside childish things, yet many of us still cherish our childhood toys. Play is serious business - watch any toddler and you will see this in action. Whether you're a parent, grandparent, or friend, taking time to play and be creative is essential for our wellbeing.",
        listItems: [
          'Visual Arts & Writing',
          'Tactile Activities & Movement', 
          'Storytelling & Drama',
          'Music & Creative Play'
        ]
      }
    },
    {
      id: 'development',
      name: 'Walk',
      description: 'A labyrinth is a single winding path used to guild walking meditation, as it leads you from the outer edge to the centre on a circuitous path.',
      image: WalkImage,
      color: 'text-purple-500',
      icon: (
        <svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-current" d="M5 16H4a4 4 0 01-4-4v-1h2v1a2 2 0 002 2h1v2zM13 10h-1.686l-1.207-1.207L14.37 4.63a2.121 2.121 0 00-3-3L7.207 5.793 5.99 4.576 5.98 3.02 3.038.079 0 3.117 3 6h1.586l1.207 1.207L4 9l3 3 1.793-1.793L10 11.414V13l3.01 3.01 2.98-2.979L13 10z" />
        </svg>
      ),
      content: {
        title: 'Walking Meditation',
        description: 'A labyrinth is a single winding path used to guild walking meditation, as it leads you from the outer edge to the centre on a circuitous path.',
        listItems: [
          'Guided Walking',
          'Meditation Practice',
          'Mindful Movement',
          'Centering Exercises'
        ]
      }
    },
    {
      id: 'branding',
      name: 'Write',
      description: 'A labyrinth is a single winding path used to guild walking meditation, as it leads you from the outer edge to the centre on a circuitous path.',
      image: WriteImage,
      color: 'text-blue-500',
      icon: (
        <svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-current" d="M6 0H1a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1V1a1 1 0 00-1-1zM5 5H2V2h3v3zM15 9h-5a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1zm-1 5h-3v-3h3v3z" />
        </svg>
      ),
      content: {
        title: 'Writing Meditation',
        description: 'A labyrinth is a single winding path used to guild walking meditation, as it leads you from the outer edge to the centre on a circuitous path.',
        listItems: [
          'Guided Writing',
          'Meditation Practice',
          'Mindful Expression',
          'Centering Exercises'
        ]
      }
    },
    {
      id: 'singing',
      name: 'Sing',
      description: 'Express yourself through music and vocal performance.',
      image: SingImage,
      color: 'text-pink-500',
      icon: (
        <svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-current" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm1-6.4V3h-2v6l4 2.4L12 9l-3-1.4z" />
        </svg>
      ),
      content: {
        title: 'Vocal Performance & Training',
        description: 'Develop your singing skills with professional guidance and comprehensive vocal training programs.',
        listItems: [
          'Vocal Technique',
          'Music Theory',
          'Performance Skills',
          'Recording Sessions'
        ]
      }
    }
  ]

  return (
    <section className="relative border-t border-transparent dark:border-gray-800">
      {/* Background gradient */}
      <div className="absolute inset-0 h-128 dark:opacity-25 bg-linear-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 pointer-events-none" aria-hidden="true"></div>
      {/* End background gradient */}
      <div className="relative max-w-6xl mx-auto px-2 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center px-2 pb-12 md:pb-16">
            <h2 className="h2 font-red-hat-display mb-4">My Creative Work</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400"> I work within four main modalities : labyrinth/walking meditation, expressive arts & play, singing and writing. </p>
          </div>

          {/* Section content */}
          <div className="flex flex-wrap justify-center -m-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`font-medium px-3 py-2 shadow transition duration-150 ease-in-out rounded-full inline-flex items-center justify-center m-1 ${
                  category === tab.id
                    ? tab.id === 'design' 
                      ? 'bg-teal-500 hover:bg-teal-500 dark:bg-teal-600/25 dark:hover:bg-teal-600/25'
                      : tab.id === 'development'
                      ? 'bg-purple-500 hover:bg-purple-500 dark:bg-purple-600/25 dark:hover:bg-purple-600/25'
                      : tab.id === 'branding'
                      ? 'bg-blue-500 hover:bg-blue-500 dark:bg-blue-600/25 dark:hover:bg-blue-600/25'
                      : 'bg-pink-500 hover:bg-pink-500 dark:bg-pink-600/25 dark:hover:bg-pink-600/25'
                    : 'bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700'
                }`}
                onClick={() => setCategory(tab.id)}
              >
                <div className={category === tab.id ? 'text-white' : tab.color}>
                  {tab.icon}
                </div>
                <span className={`transition duration-150 ease-in-out ${
                  category === tab.id 
                    ? 'text-white dark:text-teal-400'
                    : 'text-gray-600 dark:text-gray-300'
                }`}>
                  {tab.name}
                </span>
              </button>
            ))}
          </div>

          {/* Content area */}
          <div className="mt-8">
            {tabs.map(tab => (
              <div key={tab.id} className={category === tab.id ? 'block' : 'hidden'}>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <div className="md:flex">
                    <div className="md:w-1/3 md:pr-6 mb-6 md:mb-0">
                      <div className="relative w-full h-40 md:h-full">
                        <Image 
                          className="rounded-lg object-cover" 
                          src={tab.image} 
                          fill
                          style={{objectPosition: 'center'}}
                          alt={`${tab.name} services`}
                          priority={category === tab.id}
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-semibold mb-4 dark:text-white">{tab.content.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{tab.content.description}</p>
                      {tab.content.additionalContent && (
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{tab.content.additionalContent}</p>
                      )}
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                        {tab.content.listItems.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}