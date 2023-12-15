'use client'

import axios from 'axios'
import { usePhotoStore } from '@/stores/zustand'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function PhotoDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const { photo, setPhoto } = usePhotoStore()
  const [loading, setLoading] = useState(false)

  async function fetchPhotoDetails(id: string) {
    try {
      setLoading(true)
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      )
      setPhoto(response.data)
    } catch (error) {
      console.error('Error fetching photo details:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!photo || photo.id !== Number(params.id)) {
      fetchPhotoDetails(params.id)
    }
  }, [photo, params.id])

  return (
    <div className='bg-white rounded-md shadow p-5 flex flex-col gap-5 items-center justify-center'>
      {loading ? (
        <div>loading</div>
      ) : (
        <>
          {photo && photo.url && (
            <>
              <h1>{photo.title}</h1>
              <Image
                src={photo.url}
                alt={photo.title}
                width={250}
                height={250}
                loading='lazy'
              />
            </>
          )}
        </>
      )}
    </div>
  )
}
