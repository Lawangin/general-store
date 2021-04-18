import React from 'react'
import { Box, Badge, Text, Image } from '@chakra-ui/react'

const Card = (props) => {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4
  }

  return (
    <Box
      borderWidth='1px'
      borderRadius='lg'
      background='gray.50'
      display='flex'
      flexDirection={['column', 'row', 'row']}
      boxShadow='base'
      maxW={1200}
    >
      <Image src={property.imageUrl} alt={property.imageAlt} maxH={'50vh'} />

      <Box p='6' w='100%'>
        <Box d='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
        </Box>

        <Box mt='1' fontWeight='bold'>
          <Text fontSize='2rem' align='left'>
            {property.title}
          </Text>
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as='span' color='gray.600' fontSize='sm'>
            / wk
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Card
