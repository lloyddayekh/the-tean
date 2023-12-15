import { Post } from '@/types/general'
import axios from 'axios'
import Link from 'next/link'

async function fetchPosts(): Promise<Post[]> {
  return axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error)
    })
}

export default async function Home() {
  const posts = await fetchPosts()

  const uniqueUserIds = [...new Set(posts.map((post) => post.userId))]
  return (
    <div className='flex flex-col gap-5'>
      <h1>Choose a title:</h1>
      <div className='flex flex-col gap-2'>
        {uniqueUserIds.map((userId) => (
          <Link href={`/${userId}`} key={userId}>
            User Id: {userId}
          </Link>
        ))}
      </div>
    </div>
  )
}
