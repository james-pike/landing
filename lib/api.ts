export interface Post {
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

export async function getAllPosts(): Promise<Post[]> {
  return [
    {
      title: "Creative Clutter",
      slug: "creative-clutter",
      excerpt: "Some people wonder if expressive arts practitioners are actually hoarders in disguise.",
      coverImage: "/images/blog1.jpg",
      date: "October 22, 2020",
      author: {
        name: "Elspeth MacEwan",
        picture: "/images/elspeth.png"
      }
    },
    {
      title: "20 Unique Places to Find Web Design Inspiration",
      slug: "20-unique-places-to-find-web-design-inspiration",
      excerpt: "Discover 20 unique sources for web design inspiration that will help you create stunning websites.",
      coverImage: "/images/news-02.jpg",
      date: "October 15, 2020",
      author: {
        name: "Elspeth MacEwan",
        picture: "/images/elspeth.png"
      }
    },
    {
      title: "Why Your Customers Need a Responsive Website",
      slug: "why-your-customers-needs-a-responsive-website",
      excerpt: "Learn why having a responsive website is crucial for your business and how it impacts user experience.",
      coverImage: "/images/news-03.jpg",
      date: "October 8, 2020",
      author: {
        name: "Elspeth MacEwan",
        picture: "/images/elspeth.png"
      }
    },
    {
      title: "20 Elements of a Modern Website Design",
      slug: "20-elements-of-a-modern-website-design",
      excerpt: "Explore the essential elements that make up a modern, effective website design.",
      coverImage: "/images/news-04.jpg",
      date: "October 1, 2020",
      author: {
        name: "Elspeth MacEwan",
        picture: "/images/elspeth.png"
      }
    },
    {
      title: "What to Look for in a Digital Portfolio",
      slug: "what-to-look-for-in-a-digital-portfolio",
      excerpt: "A comprehensive guide on what makes a great digital portfolio and how to create one.",
      coverImage: "/images/news-05.jpg",
      date: "September 24, 2020",
      author: {
        name: "Elspeth MacEwan",
        picture: "/images/elspeth.png"
      }
    },
    {
      title: "Appy Launches New Thematic Solutions",
      slug: "appy-launches-new-thematic-solutions",
      excerpt: "Announcing our new thematic solutions designed to help you build better websites faster.",
      coverImage: "/images/news-06.jpg",
      date: "September 17, 2020",
      author: {
        name: "Elspeth MacEwan",
        picture: "/images/elspeth.png"
      }
    }
  ]
} 