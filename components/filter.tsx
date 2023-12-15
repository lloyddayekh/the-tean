'use client'

import { useEffect, useState } from 'react'
import { Post } from '@/types/general'

type Props = {
  data: Post[]
}

export default function Filter({ data }: Props) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const handleCheckboxChange = (filter: string) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]

      localStorage.setItem('selectedFilters', JSON.stringify(updatedFilters))

      return updatedFilters
    })
  }

  useEffect(() => {
    const storedFilters = localStorage.getItem('selectedFilters')
    if (storedFilters) {
      setSelectedFilters(JSON.parse(storedFilters))
    }
  }, [])

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex items-center gap-2'>
        <label>
          <input
            type='checkbox'
            checked={selectedFilters.includes('title')}
            onChange={() => handleCheckboxChange('title')}
          />
          Title
        </label>
        <label>
          <input
            type='checkbox'
            checked={selectedFilters.includes('body')}
            onChange={() => handleCheckboxChange('body')}
          />
          Body
        </label>
        <label>
          <input
            type='checkbox'
            checked={selectedFilters.includes('id')}
            onChange={() => handleCheckboxChange('id')}
          />
          Id
        </label>
      </div>

      {data.map((post) => (
        <div key={post.id}>
          {selectedFilters.includes('title') && <div>Title: {post.title}</div>}
          {selectedFilters.includes('body') && <div>Body: {post.body}</div>}
          {selectedFilters.includes('id') && <div>ID: {post.id}</div>}
        </div>
      ))}
    </div>
  )
}
