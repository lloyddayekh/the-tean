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
    <div className='flex flex-col gap-5'>
      <h1>List of post by user:</h1>
      <h1>Select:</h1>
      <div className='flex flex-col gap-2'>
        <Filter data={data} />
      </div>
    </div>
  )
}
