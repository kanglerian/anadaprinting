import { Container, VStack } from '@chakra-ui/react';
import React from 'react'
import Katalog from '../components/products/Katalog';
import Header from '../components/Header';

const Souvenir = () => {
    return (
        <VStack>
            <Container maxW="1200px">
                <Header/>
                <Katalog tipe='sv' hal='souvenir'/>
            </Container>
        </VStack>
    )
}

export default Souvenir;