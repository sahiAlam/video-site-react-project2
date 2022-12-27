import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column', 'row']}>
          <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading
              size={'md'}
              textTransform={'uppercase'}
              textAlign={['center', 'left']}
            >
              Subscribe to get Updated
            </Heading>
            <HStack borderBottom={'2px solid white'} py={'2'}>
              <Input
                placeholder="Enter Email Here..."
                border={'none'}
                borderRadius={'none'}
                outline={'none'}
                focusBorderColor={'none'}
              />
              <Button
                p={'0'}
                colorScheme={'purple'}
                variant={'ghost'}
                borderRadius={'0 20px 20px 0'}
              >
                <AiOutlineSend size={'20'} />
              </Button>
            </HStack>
          </VStack>
          <VStack
            width={'full'}
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
          >
            <Heading
              size={'md'}
              textTransform={'uppercase'}
              textAlign={'center'}
            >
              video hub
            </Heading>
            <Text>All rights received</Text>
          </VStack>
          <VStack width={'full'}>
            <Heading size={'md'}>Social media</Heading>
            <Button
              variant={'link'}
              colorScheme={'purple'}
              textTransform={'capitalize'}
            >
              <a
                target={'blank'}
                href="https://www.linkedin.com/in/md-sahi-00ba7b213/"
              >
                Linkedin
              </a>
            </Button>
            <Button
              variant={'link'}
              colorScheme={'purple'}
              textTransform={'capitalize'}
            >
              <a target={'blank'} href="https://instagram.com/0mdsahialamkhan0">
                Instagram
              </a>
            </Button>
            <Button
              variant={'link'}
              colorScheme={'purple'}
              textTransform={'capitalize'}
            >
              <a target={'blank'} href="https://github.com/sahiAlam">
                GItHub
              </a>
            </Button>
          </VStack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
