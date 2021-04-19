import React from 'react'
import { Box, Text, Image } from '@chakra-ui/react'

const SmallCard = ({ names, spent, type }) => {
  return (
    <Box
      borderWidth='1px'
      borderRadius='lg'
      background='gray.50'
      display='flex'
      flexDirection={'column'}
      boxShadow='base'
      maxW={600}
    >
      <Image
        src={spent ? '/happy-customer.jpg' : '/repeat-customer.jpg'}
        alt={
          spent
            ? 'Lady with a lot of shopping bags'
            : 'Happy gentleman sitting at a coffee bar'
        }
        maxH={'50vh'}
      />

      <Box p='6' w='100%'>
        <Box mt='1' fontWeight='bold'>
          <Text fontSize='1.5rem' align='left'>
            {type === 'freqCustomer'
              ? 'We would like to recognize our most loyal customers:'
              : null}
            {type === 'spender' ? <p>Shout out to our big spenders!</p> : null}
          </Text>
          <Text fontSize='2rem' align='left'>
            {names ? names.map((n) => <p key={n}>{n}</p>) : null}
          </Text>
        </Box>

        <Box align='left'>
          {spent ? (
            <span>These customers have spent a total of ${spent}</span>
          ) : null}
        </Box>
      </Box>
    </Box>
  )
}

export default SmallCard
