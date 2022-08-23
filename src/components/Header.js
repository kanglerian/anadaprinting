import { Center, HStack, Image, Link, Text, VStack } from '@chakra-ui/react'
import logo from '../images/logo.svg';
import backgroundJPEG from '../images/background.jpg'
import ShopeeLogo from '../images/logo/shopee.png'
import TokopediaLogo from '../images/logo/tokopedia.png'
import React from 'react'

function Header() {
  return (
    <Center boxShadow='md' marginTop='10px' bgImage={backgroundJPEG} bgSize='cover' h='350px' borderRadius='15px' p={4}>
      <VStack spacing='15px'>
        <Link href='https://anadaprinting.vercel.app/'>
          <Image src={logo} dropShadow={1} />
        </Link>
        <Text fontWeight='light' fontSize='14px' color='white' textAlign='center'>Spesialis Undangan Pernikahan, Merchandise dan Souvenir dari Kota Tasikmalaya.</Text>
        {/* <Divider/> */}
        <Text fontWeight='light' fontSize='14px' color='white' dropShadow={1} textAlign='center'>Jl. Cibungkul RT.05 RW.13 Kel. Sukamajukaler Kec. Indihiang Kota Tasikmalaya Jawa Barat 46151</Text>
        <Link href='https://anadaprinting.vercel.app/'>
          <Text bg='#2D3748' color='#EDF2F7' padding='5px 15px 5px 15px' borderRadius='10px'>anadaprinting.vercel.app</Text>
        </Link>
        <HStack>
          <Link href='https://shopee.co.id/anadaprintingofficial' isExternal>
            <Image src={ShopeeLogo} boxSize='35px' />
          </Link>
          <Link href='https://www.tokopedia.com/anadaprintingid' isExternal>
            <Image src={TokopediaLogo} boxSize='35px' />
          </Link>
        </HStack>
      </VStack>
    </Center>
  )
}

export default Header