import Link from 'next/link';
import * as React from 'react';
import { Companys } from "../interface"
import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Text,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';
type Props = {
    items: Companys[]
};

const CompanyCard = ({ items }: Props) => {
    return (
        <>
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={'3xl'}>This is the headline</Heading>
                    <Text color={'gray.600'} fontSize={'xl'}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua.
                    </Text>
                </Stack>
                <Container maxW={'6xl'} mt={10}>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                        {items.map((company) => (
                            <Link href="/[empresa]" as={`/${company.empresa}`}>
                                <Box
                                    maxW={'320px'}
                                    w={'full'}
                                    bg={useColorModeValue('white', 'gray.900')}
                                    boxShadow={'2xl'}
                                    rounded={'lg'}
                                    p={6}
                                    textAlign={'center'}>
                                    <Stack spacing={0} align={'center'} mb={5}>
                                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} alignContent="center">
                                            {company.empresa}
                                        </Heading>
                                        <Text color={'gray.500'}>
                                            Tipo : {company.tipo}
                                        </Text>
                                    </Stack>
                                </Box>
                            </Link>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>
        </>
    );
}

export default CompanyCard;