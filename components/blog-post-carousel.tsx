'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Post {
  title: string
  slug: string
  excerpt: string
  coverImage: string
  date: string
  author: {
    name: string
    picture: string
  }
}

interface BlogPostCarouselProps {
  posts: Post[]
}

export default function BlogPostCarousel({ posts }: BlogPostCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [postsPerPage, setPostsPerPage] = useState(1) // Default to mobile
  const totalPages = Math.ceil(posts.length / postsPerPage)

  // Update posts per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // Desktop
        setPostsPerPage(3)
      } else if (window.innerWidth >= 768) { // Tablet
        setPostsPerPage(2)
      } else { // Mobile
        setPostsPerPage(1)
      }
    }

    handleResize() // Initial check
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    )
  }

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Latest Blog Posts</h2>
            <p className="text-xl text-gray-600">Stay up to date with our latest news and insights</p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {Array.from({ length: totalPages }).map((_, pageIndex) => (
                  <div 
                    key={pageIndex}
                    className="w-full flex-shrink-0 flex"
                  >
                    {posts.slice(pageIndex * postsPerPage, (pageIndex + 1) * postsPerPage).map((post) => (
                      <div 
                        key={post.slug}
                        className="w-full md:w-1/3 px-4"
                      >
                        <article className="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden">
                          <Link href={`/blog/${post.slug}`} className="relative block w-full h-48 md:h-56 overflow-hidden">
                            <Image
                              src={post.coverImage}
                              alt={post.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover transition-transform duration-300 hover:scale-105"
                              priority={pageIndex === 0}
                            />
                          </Link>
                          <div className="flex-grow p-6">
                            <header>
                              <div className="flex items-center mb-4">
                                <Image
                                  src={post.author.picture}
                                  alt={post.author.name}
                                  width={40}
                                  height={40}
                                  className="rounded-full"
                                />
                                <div className="ml-3">
                                  <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                                  <p className="text-sm text-gray-500">{post.date}</p>
                                </div>
                              </div>
                              <h3 className="h4 mb-2">
                                <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition duration-150 ease-in-out">
                                  {post.title}
                                </Link>
                              </h3>
                            </header>
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            <Link 
                              href={`/blog/${post.slug}`}
                              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                            >
                              Read more
                              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </Link>
                          </div>
                        </article>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Previous posts"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Next posts"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 