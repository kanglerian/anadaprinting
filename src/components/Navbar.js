import { Box, ButtonGroup, Flex, Heading, IconButton, Image, Spacer, Stack, useColorMode } from '@chakra-ui/react';
import * as Ikon from 'react-icons/fa';
import React from 'react';
import logo from '../images/logo.png';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    return (
        <Stack paddingTop="20px" paddingBottom="25px">
            <Flex align='center'>
                <Box>
                    <Heading size="md">
                        <Image src={logo} boxSize='60px' />
                    </Heading>
                </Box>
                <Spacer />
                <ButtonGroup>
                    <IconButton bg='brand.100' color='white' onClick={toggleColorMode} icon={isDark ? <Ikon.FaMoon /> : <Ikon.FaSun />}>{colorMode}</IconButton>
                </ButtonGroup>
            </Flex>
        </Stack>
    );
}

export default Navbar;