export const metadata = {
  title: 'Home - Appy',
  description: 'Page description',
}

import PageIllustration from '@/components/page-illustration'
import Hero from '@/components/hero-home'
import Stats from '@/components/stats'
import Carousel from '@/components/carousel'
import Carousel2 from '@/components/testimonials-carousel'
import Tabs from '@/components/tabs'

import TestimonialsBlocks from '@/components/testimonials-blocks'
import FeaturesBlocks from '@/components/features-blocks'
import Cta from '@/components/cta'
import BlogPostCarousel from '@/components/blog-post-carousel'
import { getAllPosts } from '@/lib/api'
import Newsletter from '@/components/newsletter'

export default async function Home() {
  const posts = await getAllPosts()


  return (
    <>
      {/*  Page illustration */}
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <PageIllustration />
      </div>
      <Hero />
      <Stats />
      <Tabs />
      <Carousel />
      <BlogPostCarousel posts={posts} />
      {/* <Process />
      <PricingTables /> */}
      <Carousel2/>
      <FeaturesBlocks />
      {/* <Cta /> */}
      <div className="max-w-6xl mx-auto">
      <Newsletter/>
      </div>
    </>
  )
}
