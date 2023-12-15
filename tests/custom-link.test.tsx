// custom-link.test.js
import CustomLink from '@/components/custom-link'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/some-path'),
}))

describe('CustomLink component', () => {
  test('renders link with correct styles', () => {
    const href = '/some-path'
    const name = 'Some Link'

    render(<CustomLink href={href} name={name} />)

    expect(screen.getByText(name)).toBeInTheDocument()
    expect(screen.getByText(name)).toHaveClass('link')

    fireEvent.click(screen.getByText(name))

    expect(screen.getByText(name)).toHaveClass('link active')
  })
})
