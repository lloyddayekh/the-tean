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
    <div className='flex flex-col items-center justify-center '>
      <div className='bg-white p-8 rounded-md shadow-md'>
        <h1 className='text-2xl font-bold mb-6'>Choose a user id:</h1>
        <div className='flex flex-col gap-2'>
          {uniqueUserIds.map((userId) => (
            <Link
              href={`/${userId}`}
              key={userId}
              className='bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-blue-700'
            >
              User Id: {userId}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
