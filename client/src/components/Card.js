import React from 'react'
import { Box, Badge, Text, Image } from '@chakra-ui/react'

const Card = ({ content }) => {
  return (
    <Box
      borderWidth='1px'
      borderRadius='lg'
      background='gray.50'
      display='flex'
      flexDirection={['column', 'row', 'row']}
      boxShadow='base'
    >
      <Image
        src={'/jar-image.jpg'}
        alt='image of a jar with flowers'
        maxH={'50vh'}
        objectFit='contain'
      />

      <Box p='6' w='100%'>
        <Box d='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
        </Box>

        <Box mt='1' fontWeight='bold'>
          <Text fontSize='2rem' align='left'>
            {content ? content.map((p) => p.itemname) : null} item is our most
            popular item recently!
          </Text>
        </Box>

        <Box>
          <Text fontSize='1rem' align='left'>
            {content ? content.map((p) => p.quantity) : null} have been sold
            already
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Card
