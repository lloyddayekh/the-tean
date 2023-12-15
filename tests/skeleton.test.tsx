import React from 'react'
import { render, screen } from '@testing-library/react'
import Skeleton from '@/components/skeleton'

describe('Skeleton component', () => {
  test('renders the correct number of skeletons', () => {
    const skeletonCount = 3

    render(<Skeleton count={skeletonCount} />)

    const skeletonItems = screen.getAllByTestId('skeleton-item')
    expect(skeletonItems).toHaveLength(skeletonCount)
  })
})
