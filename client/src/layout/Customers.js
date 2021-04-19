import React, { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption
} from '@chakra-ui/react'

const Customers = () => {
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)

  const {
    response: custCount,
    isLoading: custCountLoading,
    error: custCountError
  } = useFetch('http://localhost:4000/customer-count')

  const {
    response: allCust,
    isLoading: allCustLoading,
    error: allCustError
  } = useFetch('http://localhost:4000/get-customers')

  useEffect(() => {
    const loadingHandler = () => {
      custCountLoading || allCustLoading ? setLoading(true) : setLoading(false)
    }

    const errorHandler = () => {
      custCountError || allCustError ? setError(true) : setError(false)
    }

    loadingHandler()
    errorHandler()
  }, [custCountLoading, allCustLoading, custCountError, allCustError])

  const mainContent = (
    <div>
      <Heading size='md' p={4}>
        Total Customers:
        {custCount ? custCount.map((c) => ` ${c.customercount}`) : null}
      </Heading>
      <Table variant='simple'>
        <TableCaption>List of customers and their totals</TableCaption>
        <Thead>
          <Tr>
            <Th>Customer Name</Th>
            <Th isNumeric>Total Spent</Th>
          </Tr>
        </Thead>
        {allCust
          ? allCust.map((c) => (
              <Tbody key={c.customerid}>
                <Tr>
                  <Td>{c.customername}</Td>
                  <Td isNumeric>${c.totalspent}</Td>
                </Tr>
              </Tbody>
            ))
          : null}
      </Table>
    </div>
  )

  return (
    <>
      {error ? (
        <span>An error occured fetching data</span>
      ) : loading ? (
        <span>Loading...</span>
      ) : (
        mainContent
      )}
    </>
  )
}

export default Customers
