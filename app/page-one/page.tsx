'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Skeleton from '@/components/skeleton'
import { Photo } from '@/types/general'
import Image from 'next/image'
import { usePhotoStore } from '@/stores/zustand'
import { useRouter } from 'next/navigation'

export default function PageOne() {
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState<Photo[]>([])
  const router = useRouter()
  const { setPhoto } = usePhotoStore()

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/albums/1/photos'
      )
      setPosts(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  function handleOpenPhoto(photo: Photo) {
    setPhoto(photo)
    router.push(`/page-one/${photo.id}`)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='flex flex-col gap-5'>
      <h1>List of Photos</h1>
      {loading ? (
        <Skeleton count={5} />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
          {posts.map((post) => (
            <div
              key={post.id}
              className='bg-white flex flex-col gap-2 items-center justify-center rounded-md shadow p-5 cursor-pointer'
              onClick={() => handleOpenPhoto(post)}
            >
              <Image src={post.url} alt={post.title} width={250} height={250} />
              <p className='text-center'>{post.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
