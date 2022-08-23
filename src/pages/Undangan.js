import { Container, VStack} from '@chakra-ui/react';
import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Katalog from '../components/products/Katalog';

const Undangan = () => {
    return (
        <VStack>
            <Container maxW="1200px">
                <Header/>
                <Katalog tipe='wi' hal='undangan'/>
                <Footer/>
            </Container>
        </VStack>
    )
}

export default Undangan;