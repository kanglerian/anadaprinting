import { Box, Button, Flex, Skeleton, Spacer, Text, Wrap, WrapItem } from "@chakra-ui/react";

const Menunggu = () => {
    return (
        <Wrap justify='center' spacing='30px' >
            <WrapItem>
                <Box w='350px' h='410px' borderWidth='1px' boxShadow='sm' borderRadius='15px' p={5}>
                    <Skeleton h='310px' borderRadius='15px'></Skeleton>
                    <Flex marginTop="20px" align='center'>
                        <Skeleton borderRadius='5px'>
                            <Button>Beli Sekarang!</Button>
                        </Skeleton>
                        <Spacer />
                        <Skeleton borderRadius='5px'>
                            <Text fontSize='24px'>
                                Rp1.200
                            </Text>
                        </Skeleton>
                    </Flex>
                </Box>
            </WrapItem>
            <WrapItem>
                <Box w='350px' h='410px' borderWidth='1px' boxShadow='sm' borderRadius='15px' p={5}>
                    <Skeleton h='310px' borderRadius='15px'></Skeleton>
                    <Flex marginTop="20px" align='center'>
                        <Skeleton borderRadius='5px'>
                            <Button>Beli Sekarang!</Button>
                        </Skeleton>
                        <Spacer />
                        <Skeleton borderRadius='5px'>
                            <Text fontSize='24px'>
                                Rp1.200
                            </Text>
                        </Skeleton>
                    </Flex>
                </Box>
            </WrapItem>
            <WrapItem>
                <Box w='350px' h='410px' borderWidth='1px' boxShadow='sm' borderRadius='15px' p={5}>
                    <Skeleton h='310px' borderRadius='15px'></Skeleton>
                    <Flex marginTop="20px" align='center'>
                        <Skeleton borderRadius='5px'>
                            <Button>Beli Sekarang!</Button>
                        </Skeleton>
                        <Spacer />
                        <Skeleton borderRadius='5px'>
                            <Text fontSize='24px'>
                                Rp1.200
                            </Text>
                        </Skeleton>
                    </Flex>
                </Box>
            </WrapItem>
        </Wrap>
    );
}

export default Menunggu;