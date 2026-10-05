// PAYLOAD_URL=https://cms.example.com
// PAYLOAD_API_KEY=your_secret_api_key    e8b66fe8-75ac-4ae7-a0e5-a7c08c2d7577


// const PAYLOAD_URL = process.env.PAYLOAD_URL!
// const PAYLOAD_API_KEY = process.env.PAYLOAD_API_KEY!

// export async function getBlogs() {
//   const response = await fetch(`${PAYLOAD_URL}/api/blogs`, {
//     headers: {
//       Authorization: `users API-Key ${PAYLOAD_API_KEY}`,
//     },
//     next: {
//       revalidate: 300,
//     },
//   })

//   if (!response.ok) {
//     throw new Error('Failed to fetch blogs')
//   }

//   return response.json()
// }

// import { getBlogs } from '@/lib/payload'

// export default async function BlogPage() {
//   const data = await getBlogs()

//   return (
//     <main>
//       {data.docs.map((blog: any) => (
//         <article key={blog.id}>
//           <h2>{blog.title}</h2>
//           <p>{blog.excerpt}</p>
//         </article>
//       ))}
//     </main>
//   )
// }

// export async function getBlogBySlug(slug: string) {
//   const params = new URLSearchParams({
//     'where[slug][equals]': slug,
//     limit: '1',
//   })

//   const response = await fetch(
//     `${PAYLOAD_URL}/api/blogs?${params.toString()}`,
//     {
//       headers: {
//         Authorization: `users API-Key ${PAYLOAD_API_KEY}`,
//       },
//       next: {
//         revalidate: 300,
//       },
//     },
//   )

//   if (!response.ok) {
//     throw new Error('Failed to fetch blog')
//   }

//   const data = await response.json()

//   return data.docs[0] ?? null
// }

// export interface Blog {
//   id: string
//   title: string
//   slug: string
//   excerpt: string
//   readingTime: number
//   publishedAt?: string
//   featuredImage: {
//     id: string
//     url: string
//     alt?: string
//   }
//   author: {
//     id: string
//     name: string
//   }
//   categories: {
//     id: string
//     name: string
//     slug: string
//   }[]
//   tags?: string[]
//   content: unknown
//   seo?: {
//     metaTitle?: string
//     metaDescription?: string
//     ogImage?: {
//       id: string
//       url: string
//     }
//   }
// }