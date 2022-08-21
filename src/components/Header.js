import { Center, Divider, HStack, Icon, Image, Link, Text, VStack } from '@chakra-ui/react'
import logo from '../images/logo.svg';
import * as Ikon from 'react-icons/fa';
import React from 'react'

function Header() {
  return (
    <Center boxShadow='md' marginTop='10px' bgGradient='linear(to-br, #000000, #000000)' h='350px' borderRadius='15px' p={4}>
    <VStack spacing='15px'>
      <Image src={logo} />
      <Text fontWeight='light' fontSize='14px' color='white' textAlign='center'>Spesialis Undangan Pernikahan, Merchandise dan Souvenir dari Kota Tasikmalaya.</Text>
      {/* <Divider/> */}
      <Text fontWeight='light' fontSize='14px' color='white' textAlign='center'>Jl. Cibungkul RT.05 RW.13 Kel. Sukamajukaler Kec. Indihiang Kota Tasikmalaya Jawa Barat 46151</Text>
      <HStack>
        <Link href='https://api.whatsapp.com/send?phone=6285315666799&text=Halo%20kak,%20saya%20mau%20pesan' isExternal>
          <Icon as={Ikon.FaWhatsapp} color='white' w='20px' h='20px' />
        </Link>
        <Link href='https://www.instagram.com/anadaprinting.id' isExternal>
          <Icon as={Ikon.FaInstagram} color='white' w='20px' h='20px' />
        </Link>
      </HStack>
    </VStack>
  </Center>
  )
}

export default Header