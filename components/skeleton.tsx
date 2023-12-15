import React from 'react'
import '@/styles/skeleton.scss'

export default function Skeleton({ count }: { count: number }) {
  const skeletons = Array.from({ length: count }, (_, index) => (
    <div key={index} className='skeletonItem'></div>
  ))

  return <div className='skeletonContainer'>{skeletons}</div>
}
