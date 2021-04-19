import '@testing-library/react'
import { render } from '@testing-library/react'
import SmallCard from './SmallCard'

describe('Card Component', () => {
  test('should render Card Component', () => {
    const { getByText } = render(
      <SmallCard names={[]} spent={null} type={'spender'} />
    )
    expect(getByText(/Shout out to our big spenders!/)).toBeInTheDocument()
  })

  test('should render with Card with content', () => {
    const { getByText } = render(
      <SmallCard names={['Law', 'Jake']} spent={'100.00'} type={'spender'} />
    )
    expect(getByText(/Law/)).toBeInTheDocument()
    expect(
      getByText('These customers have spent a total of $100.00')
    ).toBeInTheDocument()
  })
})
