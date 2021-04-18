import './App.css'
import { Button, Heading, Grid, GridItem } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import useFetch from './hooks/useFetch'
import Card from './components/Card'
import SmallCard from './components/SmallCard'

function App() {
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)

  const {
    response: repeatCust,
    loading: repeatCustLoading,
    error: repeatCustError
  } = useFetch('http://localhost:4000/repeat')

  const {
    response: custCount,
    loading: custCountLoading,
    error: custCountError
  } = useFetch('http://localhost:4000/customer-count')

  const {
    response: mostSpent,
    loading: mostSpentLoading,
    error: mostSpentError
  } = useFetch('http://localhost:4000/most-spent')

  const {
    response: popItems,
    loading: popItemsLoading,
    error: popItemError
  } = useFetch('http://localhost:4000/largest-item-count')

  const loadingHandler = () => {}

  const errorHandler = () => {}
  return (
    <div className='App'>
      <Heading>Strider General Store</Heading>
      <Grid
        h='200px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(4, 1fr)'
        gap={4}
        p={6}
        px={[2, 10, 20]}
      >
        <GridItem
          colSpan={4}
          bg='papayawhip'
          display='flex'
          justifySelf='center'
        >
          <Card />
        </GridItem>
        <GridItem colSpan={2} bg='papayawhip'>
          <SmallCard />
        </GridItem>
        <GridItem colSpan={2} bg='papayawhip'>
          <SmallCard />
        </GridItem>
      </Grid>
    </div>
  )
}

export default App
