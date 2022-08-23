import { Container, VStack } from '@chakra-ui/react';
import React from 'react'
import Katalog from '../components/products/Katalog';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Souvenir = () => {
    return (
        <VStack>
            <Container maxW="1200px">
                <Header/>
                <Katalog tipe='sv' hal='souvenir'/>
                <Footer/>
            </Container>
        </VStack>
    )
}

export default Souvenir;