import { Stack, Text } from '@chakra-ui/react';
import React from 'react'

const Footer = () => {

  return (
    <Stack bg='gray.700' color='white' marginTop='50px' borderRadius='20px 20px 0px 0px' p={4}>
        <Text textAlign='center' fontWeight='reguler' color='white' fontSize='13px'>www.namiraprinting.com</Text>
        <Text fontWeight='light' fontSize='13px' color='white' textAlign='center'>Jl. Cibungkul RT.05 RW.13 Kel. Sukamajukaler Kec. Indihiang Kota Tasikmalaya Jawa Barat 46151</Text>
    </Stack>
  )
}

export default Footer;