'use client'

import axios from 'axios'
import { usePhotoStore } from '@/stores/zustand'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          Loading...
        </motion.div>
      ) : (
        <>
          {photo && photo.url && (
            <>
              <motion.h1
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
              >
                {photo.title}
              </motion.h1>
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
              >
                <Image
                  src={photo.url}
                  alt={photo.title}
                  width={250}
                  height={250}
                  loading='lazy'
                />
              </motion.div>
            </>
          )}
        </>
      )}
    </div>
  )
}
