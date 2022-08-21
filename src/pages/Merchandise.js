import { Container, VStack } from '@chakra-ui/react';
import React from 'react'
import Katalog from '../components/products/Katalog';
import Header from '../components/Header';

const Merchandise = () => {
    return (
        <VStack>
            <Container maxW="1200px">
                <Header/>
                <Katalog tipe='mc' hal='merchandise'/>
            </Container>
        </VStack>
    )
}

export default Merchandise;