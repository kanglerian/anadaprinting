import { Container, VStack} from '@chakra-ui/react';
import React from 'react'
import Header from '../components/Header';
import Katalog from '../components/products/Katalog';

const Undangan = () => {
    return (
        <VStack>
            <Container maxW="1200px">
                <Header/>
                <Katalog tipe='wi' hal='undangan'/>
            </Container>
        </VStack>
    )
}

export default Undangan;