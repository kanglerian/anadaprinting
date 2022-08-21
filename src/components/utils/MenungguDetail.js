import { Box, Button, Skeleton, SkeletonText, Text, Wrap, WrapItem } from "@chakra-ui/react";

const MenungguDetail = () => {
    return (
        <Wrap marginTop='50px' justify='center' spacing='20px'>
            <WrapItem>
                <Box w='500px' borderWidth='1px' boxShadow='sm' borderRadius='15px' p={5}>
                    <Skeleton h='450px' borderRadius='15px' />
                </Box>
            </WrapItem>
            <WrapItem>
                <Box w='600px' boxShadow='sm' borderRadius='15px' p={5}>
                    <Skeleton w='40px' h='40px' marginBottom='10px' borderRadius='5px'/>
                    <Skeleton w='250px' borderRadius='5px'>
                        <Text fontSize='24px'>Product Name</Text>
                    </Skeleton>
                    <SkeletonText marginTop='10px' noOfLines={14} />
                    <Skeleton marginTop='10px' borderRadius='5px'>
                        <Text fontSize='24px'>Product Price</Text>
                    </Skeleton>
                    <Skeleton marginTop='20px' w='150px' borderRadius='5px'>
                        <Button>Call to Action</Button>
                    </Skeleton>
                </Box>
            </WrapItem>
        </Wrap>
    );
}

export default MenungguDetail;