import { Wrap, WrapItem, Box, Button, Spacer, Text, Tooltip, Image, useColorMode, InputGroup, InputLeftElement, Input, ButtonGroup, IconButton, Badge, useDisclosure, ScaleFade, useMediaQuery } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { FaSearch, FaSortAmountDownAlt, FaSortAmountUpAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Unknown from '../utils/Unknown';

const Katalog = (props) => {

  const [tipe] = useState(props.tipe);
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  const [halaman] = useState(props.hal);
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const { isOpen, onToggle } = useDisclosure();

  let [products, setProducts] = useState([]);
  let [isStatus, setIsStatus] = useState(false);
  const [search, setSearch] = useState('');
  useEffect(() => {
    axios.get(`https://namira-api.vercel.app/api/${tipe}`, {
      params: {
        namira_key: 'namira'
      }
    }).then((result) => {
      setProducts(result.data.data);
      onToggle();
    });
    // eslint-disable-next-line
  }, []);
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }

  if (search.length > 0) {
    products = products.filter((i) => {
      return i.name.match(new RegExp(`${search}`, 'gi'));
    });
  };

  const check = () => {
    if (products.length === 0) {
      setIsStatus(true);
    } else {
      setIsStatus(false);
    };
  }

  useEffect(() => {
    check();
  });

  const listProducts = products.map((product, index) => {
    return (
      <WrapItem key={index}>
        <ScaleFade initialScale={0.5} in={isOpen}>
        <Box w={isNotSmallerScreen ? '280px' : '175px'} borderWidth='1px' boxShadow='sm' borderRadius='15px'>
          <Tooltip label={product.name} hasArrow placement='top'>
          <Link to={`/${halaman}/${product.id}`}>
            <Image src={`https://anada-storage.vercel.app/assets/${tipe}/` + product.photo[0]} borderRadius='15px 15px 0px 0px' />
          </Link>
          </Tooltip>
          <Box p={4} paddingBottom='15px'>
            <Text textOverflow='ellipsis' overflow='hidden' whiteSpace='nowrap' fontSize='12px' color={isDark ? 'white' : 'gray.700'}>{product.name}</Text>
            <Text marginTop='5px' fontSize='16px' color={isDark ? 'white' : 'gray.700'} fontWeight='bold'>
                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 4 }).format(product.price)}</Text>
          </Box>
        </Box>
        </ScaleFade>
      </WrapItem>
    );
  });

  return (
    <Box>
      <Wrap marginTop='20px' justify='between' p={2}>
        <WrapItem>
          <InputGroup>
            <InputLeftElement
              children={<FaSearch color='#718096' />}
            />
            <Input type='search' value={search} onChange={handleChange} placeholder='Cari disini...' />
          </InputGroup>
          <ButtonGroup marginLeft='10px'>
            <IconButton icon={<FaSortAmountDownAlt />} disabled></IconButton>
            <IconButton icon={<FaSortAmountUpAlt />} disabled></IconButton>
          </ButtonGroup>
        </WrapItem>
        <Spacer />
        <WrapItem>
          <ButtonGroup>
            <Link to='/'>
              <Button size='sm'>Souvenir<Badge bg='red.500' color='white' marginLeft='5px'>baru</Badge></Button>
            </Link>
            <Link to='/undangan'>
              <Button size='sm'>Undangan<Badge bg='red.500' color='white' marginLeft='5px'>baru</Badge></Button>
            </Link>
            <Link to='/merchandise'>
              <Button size='sm' disabled>Merchandise</Button>
            </Link>
          </ButtonGroup>
        </WrapItem>
      </Wrap >
      <Wrap justify='center' marginBottom='50px' spacing='10px' marginTop='20px'>
        {isStatus &&
          <Unknown />
        }
        {listProducts}
      </Wrap>
    </Box>
  )
}

export default Katalog;