'use client'

import { useEffect } from 'react'

// Import Swiper
import Swiper, { Autoplay, Navigation } from 'swiper'
import 'swiper/swiper.min.css'
Swiper.use([Autoplay, Navigation])

export default function Carousel() {

  const events = [
    {
      title: "Expressive Arts Workshop",
      date: "September 15, 2023",
      time: "2:00 PM - 5:00 PM",
      location: "Creative Arts Studio",
      description: "Join us for an afternoon of creative exploration through various art forms including painting, movement, and music.",
      category: "Workshop"
    },
    {
      title: "Walking Meditation Session",
      date: "September 20, 2023", 
      time: "9:00 AM - 10:30 AM",
      location: "Community Labyrinth",
      description: "Experience the peaceful practice of walking meditation in our beautiful outdoor labyrinth.",
      category: "Meditation"
    },
    {
      title: "Writing & Reflection Retreat",
      date: "October 1, 2023",
      time: "10:00 AM - 4:00 PM", 
      location: "Peaceful Haven Center",
      description: "A full-day retreat combining mindful writing practices with guided reflection exercises.",
      category: "Retreat"
    },
    {
      title: "Group Singing Circle",
      date: "October 8, 2023",
      time: "7:00 PM - 8:30 PM",
      location: "Music Room",
      description: "Come together in community to experience the joy and healing power of group singing.",
      category: "Music"
    },
    {
      title: "Art & Movement Workshop",
      date: "October 15, 2023",
      time: "1:00 PM - 4:00 PM",
      location: "Dance Studio",
      description: "Explore the connection between visual arts and movement in this innovative workshop.",
      category: "Workshop"
    }
  ]

  useEffect(() => {
    const carousel = new Swiper('.carousel', {
      slidesPerView: 'auto',
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 24,
      autoplay: {
        delay: 7000,
      },
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    })
  }, [])

  return (
    <section className="border-t border-transparent dark:border-gray-800">
      <div className="py-12 md:py-20">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 font-red-hat-display mb-4">Events & Workshops</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">Join us for transformative experiences in creativity, mindfulness, and personal growth.</p>
          </div>

        </div>

        {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
        <div className="carousel swiper-container">
          <div className="swiper-wrapper">
            {/* Carousel items */}
            {events.map((event, index) => (
              <div key={index} className="swiper-slide max-w-lg">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 h-full">
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-teal-500 bg-teal-50 dark:bg-teal-500/10 rounded-full px-3 py-1">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{event.title}</h3>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <p>{event.date}</p>
                    <p>{event.time}</p>
                    <p>{event.location}</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <a className="inline-flex items-center text-teal-500 hover:text-teal-600 font-medium" href="#0">
                      Learn more
                      <svg className="w-3 h-3 fill-current ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </a>
                    <button className="btn-sm text-white bg-teal-500 hover:bg-teal-400">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-end gap-2 mt-12 md:mt-16">
            <button className="carousel-prev relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group bg-teal-500 hover:bg-teal-400 dark:bg-gray-800 dark:hover:bg-teal-500/25 shadow-xl transition duration-150 ease-in-out">
              <span className="sr-only">Previous</span>
              <svg className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-teal-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group bg-teal-500 hover:bg-teal-400 dark:bg-gray-800 dark:hover:bg-teal-500/25 shadow-xl transition duration-150 ease-in-out">
              <span className="sr-only">Next</span>
              <svg className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-teal-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}