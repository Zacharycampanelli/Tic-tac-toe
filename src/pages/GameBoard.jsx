import { AbsoluteCenter, Center, Box, Flex, Grid, GridItem, Image } from '@chakra-ui/react';
import logo from '../assets/images/logo.svg';

const GameBoard = () => {
  return (
    <Center mt="24px" h="100vh" display="flex" justifyContent="center" alignItems={{ sm: 'start' }}>
      <Grid placeItems="center" justifyContent="center" templateColumns="repeat(3, 1fr)" gap={6} w={{ sm: '90%' }}>
        <GridItem w="100%" h="10">
          {' '}
          <Image src={logo} alt="X and O logo" />
        </GridItem>
        <GridItem w="100%" h="10" bg="darkBlue" />
        <GridItem w="100%" h="10" bg="darkBlue" />

        <GridItem w="100%" h="10" bg="darkBlue" />
        <GridItem w="100%" h="10" bg="darkBlue" />
        <GridItem w="100%" h="10" bg="darkBlue" />

        <GridItem w="100%" h="10" bg="darkBlue" />
        <GridItem w="100%" h="10" bg="darkBlue" />
        <GridItem w="100%" h="10" bg="darkBlue" />

        <GridItem w="100%" h="10" bg="darkBlue" />
        <GridItem w="100%" h="10" bg="darkBlue" />
        <GridItem w="100%" h="10" bg="darkBlue" />

        <GridItem w="100%" h="10" bg="darkBlue" />
        <GridItem w="100%" h="10" bg="darkBlue" />
        <GridItem w="100%" h="10" bg="darkBlue" />
      </Grid>
    </Center>
  );
};

export default GameBoard;
