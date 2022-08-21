import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Text, VStack, Image, Box, Wrap, WrapItem, Button, IconButton, useMediaQuery, useDisclosure, ScaleFade } from '@chakra-ui/react';
import * as Ikon from 'react-icons/fa';
import imageDefault from '../../images/default.jpg';
import { useParams, Link as Links } from 'react-router-dom';
import MenungguDetail from '../../components/utils/MenungguDetail';
import Header from '../../components/Header';

const DetailSouvenir = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  const [isLoading, setIsLoading] = useState(true);
  let [products, setProducts] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    axios.get(`https://namira-api.vercel.app/api/sv/${id}`, {
      params: {
        namira_key: 'namira'
      }
    }).then((result) => {
      setProducts(result.data.data);
      onToggle();
      setIsLoading(false);
    });
    // eslint-disable-next-line
  }, []);

  const detailProduct = products.map((product, index) => {
    return (
      <Wrap marginTop='50px' marginBottom='50px' justify='center' spacing='20px' key={index}>
        <WrapItem>
          <ScaleFade initialScale={0.9} in={isOpen}>
            <Box w={isNotSmallerScreen ? '500px' : '350px'} borderWidth='1px' boxShadow='sm' borderRadius='15px' p={5}>
              <Image src={product.photo === '' ? imageDefault : product.photo} borderRadius='15px' />
            </Box>
          </ScaleFade>
        </WrapItem>
        <WrapItem>
          <ScaleFade initialScale={0.9} in={isOpen}>
            <Box w={isNotSmallerScreen ? '500px' : '350px'} boxShadow='sm' borderRadius='15px' p={5}>
              <Links to='/souvenir'>
                <IconButton icon={<Ikon.FaChevronLeft />} />
              </Links>
              <Text marginTop='10px' fontSize='24px' fontWeight='bold'>{product.name}</Text>
              <Text marginTop='10px' style={{ color: '#4A5568' }}>{product.desc}</Text>
              <Text marginTop='10px' fontSize='24px' fontWeight='bold'>
                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 3 }).format(product.price)}</Text>
              <Button marginTop='10px' onClick={() => window.open(product.buy)} bg='red.500' color='white'>Beli Sekarang!</Button>
            </Box>
          </ScaleFade>
        </WrapItem>
      </Wrap>
    );
  });
  return (
    <VStack>
      <Container maxW="1200px">
        <Header />
        {isLoading && <MenungguDetail />}
        {detailProduct}
      </Container>
    </VStack>
  )
}

export default DetailSouvenir