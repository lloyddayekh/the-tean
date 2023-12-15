import Filter from '@/components/filter'
import { Post } from '@/types/general'
import axios from 'axios'

async function fetchPostsById(id: string): Promise<Post[]> {
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error)
    })
}
export default async function UserPosts({
  params,
}: {
  params: { id: string }
}) {
  const data = await fetchPostsById(params.id)
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='bg-white p-8 rounded-md shadow-md w-full'>
        <h1 className='text-2xl font-bold mb-6'>List of posts by user:</h1>
        <h2 className='text-lg font-semibold mb-4'>Select:</h2>
        <div className='flex flex-col gap-2'>
          <Filter data={data} />
        </div>
      </div>
    </div>
  )
}
