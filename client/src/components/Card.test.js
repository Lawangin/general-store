import '@testing-library/react'
import { render } from '@testing-library/react'
import Card from './Card'

describe('Card Component', () => {
  test('should render Card Component', () => {
    const { getByText } = render(<Card content={[]} />)
    expect(
      getByText(/item is our most popular item recently!/)
    ).toBeInTheDocument()
  })

  test('should render with Card with content', () => {
    const { getByText } = render(
      <Card content={[{ itemname: 'Ball', quantity: '5' }]} />
    )
    expect(
      getByText(/Ball item is our most popular item recently!/)
    ).toBeInTheDocument()
    expect(getByText(/5 have been sold already/)).toBeInTheDocument()
  })
})
