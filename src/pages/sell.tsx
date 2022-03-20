import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Input,
  Container,
  Button,
  Select,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  useColorMode,
  Badge,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  IconProps
} from '@chakra-ui/react';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Icon } from '@iconify/react';
import { position } from '@chakra-ui/react';

const company = {
  empresa: 'Porto seguros',
  tipo: 'Seguro',
  color: 'blue',
  logo: 'https://svgsilh.com/svg/148837.svg'
};

const avatars = [
  {
    alt: 'Casa',
    url: 'https://svgsilh.com/svg/148837.svg',
    icon: 'bi:house-fill'
  },
  {
    alt: 'Auto',
    url: 'https://svgsilh.com/svg/1889366.svg',
    icon: `ion:car-sport-sharp`
  },
  {
    alt: 'Reforma',
    url: 'https://bit.ly/prosper-baba',
    icon: `uil:constructor`
  },
  {
    alt: 'Vida',
    url: 'https://bit.ly/code-beast',
    icon: `bi:heart-pulse`
  },
  {
    alt: 'Previdência',
    url: 'https://bit.ly/code-beast',
    icon: `carbon:pedestrian-family`
  }
];

type FormData = {
  Tipo: string;
  Valor: number;
  FirstName: string;
  Email: string;
  Telefone: number;
};

export default function JoinOurTeam() {
  const color = { light: 'black', dark: 'whiteAlpha.800' };
  const bgColor = { light: 'gray.50', dark: 'gray.800' };
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  const { colorMode } = useColorMode();

  return (
    <Box
      position={'relative'}
      bgGradient="linear-gradient(90deg, rgba(38,152,250,1) 0%, rgba(47,130,250,1) 38%, rgba(57,104,250,1) 99%)"
    >
      <DarkModeSwitch />
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            color={color[colorMode]}
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
          >
            {company.tipo}{' '}
            <Text
              as={'span'}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              É
              <br />
            </Text>{' '}
            {company.empresa}
          </Heading>
          <Stack direction={'row'} spacing={4} align={'center'}>
            {avatars.map((avatar) => (
              <Flex
                align={'center'}
                justify={'center'}
                fontFamily={'heading'}
                fontSize={{ base: 'sm', md: 'lg' }}
                bg={bgColor[colorMode]}
                color={color[colorMode]}
                rounded={'full'}
                width={useBreakpointValue({ base: '44px', md: '60px' })}
                height={useBreakpointValue({ base: '44px', md: '60px' })}
                position={'relative'}
                _before={{
                  content: '""',
                  width: 'full',
                  height: 'full',
                  rounded: 'full',
                  transform: 'scale(1.125)',
                  bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                  position: 'absolute',
                  zIndex: -1,
                  top: 0,
                  left: 0
                }}
              >
                <Icon
                  icon={avatar.icon}
                  width={useBreakpointValue({ base: '30px', md: '40px' })}
                  height={useBreakpointValue({ base: '30px', md: '40px' })}
                  style={{ position: 'relative' }}
                  color={color[colorMode]}
                />
              </Flex>
            ))}

            <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
              +
            </Text>
            <Flex
              align={'center'}
              justify={'center'}
              fontFamily={'heading'}
              fontSize={{ base: 'sm', md: 'lg' }}
              bg={bgColor[colorMode]}
              color={color[colorMode]}
              rounded={'full'}
              width={useBreakpointValue({ base: '44px', md: '60px' })}
              height={useBreakpointValue({ base: '44px', md: '60px' })}
              position={'relative'}
              _before={{
                content: '""',
                width: 'full',
                height: 'full',
                rounded: 'full',
                transform: 'scale(1.125)',
                bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                position: 'absolute',
                zIndex: -1,
                top: 0,
                left: 0
              }}
            >
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={bgColor[colorMode]}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}
        >
          <Stack spacing={4}>
            <Heading
              color={color[colorMode]}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            >
              Faça uma simulação
              <Text
                as={'span'}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Stack maxW="32rem">
              <Text bg={bgColor[colorMode]} fontSize={{ base: 'md', sm: 'ld' }}>
                Esta a procura de um otimo seguro para seu bem ou consorcio para
                seu proximo sonho fale com a gente e venha ser
                <br />
                <Badge
                  borderRadius="full"
                  px="2"
                  m="1rem"
                  variant="solid"
                  ml="0.15em"
                  fontSize="1em"
                  colorScheme={company.color}
                >
                  {company.empresa}
                </Badge>
              </Text>
            </Stack>
          </Stack>
          <Box as={'form'} mt={10} onSubmit={onSubmit}>
            <Stack spacing={4}>
              <FormControl variant="floating" id="first-name">
                <Input
                  placeholder=" "
                  {...register('FirstName')}
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500'
                  }}
                />
                {/* It is important that the Label comes after the Control due to css selectors */}
                <FormLabel color={'gray.500'}>Nome</FormLabel>
              </FormControl>
              <FormControl variant="floating" id="email">
                <Input
                  placeholder=" "
                  {...register('Email')}
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500'
                  }}
                />
                {/* It is important that the Label comes after the Control due to css selectors */}
                <FormLabel color={'gray.500'}>E-mail</FormLabel>
              </FormControl>
              <FormControl variant="floating" id="phone">
                <Input
                  placeholder=" "
                  {...register('Telefone')}
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500'
                  }}
                />
                {/* It is important that the Label comes after the Control due to css selectors */}
                <FormLabel color={'gray.500'}>Telefone</FormLabel>
              </FormControl>
            </Stack>
            <Button
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              type="submit"
              bgGradient="linear(to-r, red.400,pink.400)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl'
              }}
            >
              Submit
            </Button>
          </Box>
          form
        </Stack>
      </Container>
    </Box>
  );
}
