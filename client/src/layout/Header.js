import React from 'react'
import { Heading, Button, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Heading align='center'>General Store</Heading>
      <Box align='center' d='flex' justifyContent='center'>
        <Box p={4}>
          <Link to='/'>
            <Button>Home</Button>
          </Link>
        </Box>

        <Box p={4}>
          <Link to='/customers'>
            <Button>Customers</Button>
          </Link>
        </Box>
      </Box>
    </>
  )
}

export default Header
