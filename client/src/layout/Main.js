import { Grid, GridItem } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../components/Card'
import SmallCard from '../components/SmallCard'

const Main = () => {
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)
  const [repeat, setRepeat] = useState(null)
  const [highSpender, setHighSpender] = useState(null)

  const {
    response: repeatCust,
    isLoading: repeatCustLoading,
    error: repeatCustError
  } = useFetch('http://localhost:4000/repeat')

  const {
    response: mostSpent,
    isLoading: mostSpentLoading,
    error: mostSpentError
  } = useFetch('http://localhost:4000/most-spent')

  const {
    response: popItems,
    isLoading: popItemsLoading,
    error: popItemError
  } = useFetch('http://localhost:4000/largest-item-count')

  useEffect(() => {
    const loadingHandler = () => {
      repeatCustLoading || mostSpentLoading || popItemsLoading
        ? setLoading(true)
        : setLoading(false)
    }

    const errorHandler = () => {
      repeatCustError || mostSpentError || popItemError
        ? setError(true)
        : setError(false)
    }
    const repeatContent = repeatCust
      ? repeatCust.map((r) => r.customername)
      : null

    const customerMostSpent = mostSpent
      ? mostSpent.map((m) => m.customername)
      : null

    setRepeat(repeatContent)
    setHighSpender(customerMostSpent)
    loadingHandler()
    errorHandler()
  }, [
    repeatCust,
    mostSpent,
    popItems,
    repeatCustLoading,
    mostSpentLoading,
    popItemsLoading,
    repeatCustError,
    mostSpentError,
    popItemError
  ])

  const mainContent = (
    <Grid
      h='200px'
      templateRows={['repeat(3, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)']}
      templateColumns={['repeat(1, 1fr)', 'repeat(4, 1fr)', 'repeat(4, 1fr)']}
      gap={4}
      p={6}
      px={[2, 10, 20]}
      maxW={1400}
      m={(0, 'auto')}
    >
      <GridItem
        colSpan={[1, 4, 4]}
        bg='papayawhip'
        display='flex'
        justifySelf='center'
      >
        <Card content={popItems} />
      </GridItem>
      <GridItem
        colSpan={[1, 2, 2]}
        bg='papayawhip'
        display='flex'
        justifySelf='center'
      >
        <SmallCard names={repeat} spent={null} type={'freqCustomer'} />
      </GridItem>
      <GridItem
        colSpan={[1, 2, 2]}
        bg='papayawhip'
        display='flex'
        justifySelf='center'
      >
        <SmallCard
          names={highSpender}
          spent={mostSpent ? mostSpent[0].total : null}
          type={'spender'}
        />
      </GridItem>
    </Grid>
  )

  return (
    <>
      {error ? (
        <span>An error occurred while fetching data</span>
      ) : loading ? (
        <span>Loading...</span>
      ) : (
        mainContent
      )}
    </>
  )
}

export default Main
