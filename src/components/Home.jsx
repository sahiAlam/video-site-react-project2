import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOption = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTranaform: 'uppercase',
  padding: '4',
  size: '3xl',
};

const Home = () => {
  return (
    <>
      <Box>
        <MyCarousel />
        <Container maxW={'container.xl'} minH={'100vh'} p={["2", "16"]} mt={"4"} >
          <Heading
            borderBottom={'2px solid'}
            width={'fit-content'}
            margin={'auto'}
            py={'2'}
          >
            Services
          </Heading>
          <Stack
            h={'full'}
            p={'4'}
            alignItems={'center'}
            direction={['column', 'row']}
            marginTop={"4"}
          >
            <Image
              src={img5}
              h={['40', '400']}
              filter={'hue-rotate(-130deg)'}
            />
            <Text
              letterSpacing={'wider'}
              lineHeight={'170%'}
              p={['4', '16']}
              textAlign={'center'}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              deserunt harum corrupti quas quisquam eveniet tenetur autem
              consequatur temporibus. Expedita ipsum perspiciatis aperiam labore
              rem, ex quod ullam, natus nemo inventore sint consequuntur fugit
              voluptate suscipit est dolores incidunt a. Molestias nulla ullam,
              voluptatum amet possimus eos ab asperiores. Doloremque pariatur
              quis veritatis ipsum accusantium, harum libero illo sapiente
              aperiam quam praesentium aliquam dolor facilis! Quibusdam rerum
              excepturi corporis non nobis sequi quam voluptates ipsam alias,
              doloribus magni dolores dignissimos minus ratione, doloremque
              laboriosam? Alias obcaecati quidem praesentium explicabo, illum
              culpa impedit aperiam incidunt assumenda. Cumque, quaerat?
              Obcaecati vitae dolorem enim veritatis voluptate aliquam officia
              laudantium nobis! Velit ipsam eligendi expedita facilis veniam
              similique amet rerum ut ipsa voluptates, ex nulla aliquid tempore
              ducimus sunt perspiciatis accusantium. Voluptate culpa
              voluptatibus illo, nemo fugit blanditiis velit sint nihil soluta
            </Text>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

// Carousel
const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={4000}
    showThumbs={false}
    showStatus={false}
    showArrows={false}
  >
    <Box w={'full'} h={['50vh', '100vh']}>
      <Image src={img1} height={'100vh'} objectFit={'cover'} />
      <Heading
        bgColor={'blackAlpha.600'}
        color={'white'}
        fontSize={['3xl', '5xl']}
        {...headingOption}
      >
        Watch The Future
      </Heading>
    </Box>
    <Box w={'full'} h={['50vh', '100vh']}>
      <Image src={img2} height={'100vh'} objectFit={'cover'} />
      <Heading
        bgColor={'whiteAlpha.700'}
        color={'black'}
        fontSize={['3xl', '5xl']}
        {...headingOption}
      >
        Future is Gaming
      </Heading>
    </Box>
    <Box w={'full'} h={['50vh', '100vh']}>
      <Image src={img3} height={'100vh'} objectFit={'cover'} />
      <Heading
        bgColor={'whiteAlpha.600'}
        color={'black'}
        fontSize={['3xl', '5xl']}
        {...headingOption}
      >
        Gamimg on Console
      </Heading>
    </Box>
    <Box w={'full'} h={['50vh', '100vh']}>
      <Image src={img4} height={'100vh'} objectFit={'cover'} />
      <Heading
        bgColor={'whiteAlpha.600'}
        color={'black'}
        fontSize={['3xl', '5xl']}
        {...headingOption}
      >
        Night Life is Cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
