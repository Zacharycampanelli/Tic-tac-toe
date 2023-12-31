import { AbsoluteCenter, Center, Box, Button, Flex, Grid, GridItem, Image } from '@chakra-ui/react';
import logo from '../assets/images/logo.svg';
import X_gray from '../assets/images/icon-x-gray.svg';
import O_gray from '../assets/images/icon-o-gray.svg';
import Restart from '../assets/images/icon-restart.svg';
import useGameContext from '../assets/theme/context';
import Square from '../components/Square';
import SvgIconX from '../assets/images/SvgIconX';

const GameBoard = () => {
  const { board, playerTurn } = useGameContext();
  console.log(board);

  return (
    <Center mt="24px" h="100vh" display="flex" justifyContent="center" alignItems={{ sm: 'start' }}>
      <Grid placeItems="center" justifyContent="center" templateColumns="repeat(3, 1fr)" gap={6} w={{ sm: '90%' }}>
        <GridItem w="96px" h="40px" padding="0" borderRadius="5px">
          {' '}
          <Image src={logo} alt="X and O logo" />
        </GridItem>

        <GridItem
          w="96px"
          h="40px"
          padding="0"
          borderRadius="5px"
          bg="darkBlue"
          sx={{ boxShadow: '0px -8px 0px 0px #10212A inset' }}
          textStyle="p"
          textColor="blueGray"
          fontWeight="bold"
          display="flex"
          justifyContent="center"
          alignItems="center"
          pb="8px"
        >
          {playerTurn === 'X' ? (
            <img src={X_gray} width="16px" height="16px" />
          ) : (
            <img src={O_gray} width="16px" height="16px" />
          )}{' '}
          <Box ml="10px">TURN</Box>
        </GridItem>
        <GridItem
          w="96px"
          h="40px"
          padding="0"
          borderRadius="5px"
          display="flex"
          justifyContent="end"
          alignItems="center"
        >
          {' '}
          <Button variant="gray" width="40px" height="40px" padding="0" margin="0">
            <img src={Restart} alt="restart button" />
          </Button>
        </GridItem>

        {board.map((square, index) => (
          <GridItem w="96px" h="96px" padding="0" borderRadius="5px" sx={{boxShadow: '0px -8px 0px 0px #10212A inset'}}
          bg="darkBlue">
            <Square key={index} value={square} />
          </GridItem>
        ))}
        {/*        
        <GridItem w="100%" h="10" bg="darkBlue" />
        <GridItem w="100%" h="10" bg="darkBlue" />
        <GridItem w="100%" h="10" bg="darkBlue" />

        <GridItem w="100%" h="10" bg="darkBlue" />
        <GridItem w="100%" h="10" bg="darkBlue" />
        <GridItem w="100%" h="10" bg="darkBlue" />

        <GridItem w="100%" h="10" bg="darkBlue" />
        <GridItem w="100%" h="10" bg="darkBlue" />
        <GridItem w="100%" h="10" bg="darkBlue" /> */}

        <GridItem
          w="96px"
          h="64px"
          padding="0"
          borderRadius="5px"
          bg="darkBlue"
          sx={{ boxShadow: '0px -8px 0px 0px #10212A inset' }}
        />
        <GridItem
          w="96px"
          h="64px"
          padding="0"
          borderRadius="5px"
          bg="darkBlue"
          sx={{ boxShadow: '0px -8px 0px 0px #10212A inset' }}
        />
        <GridItem
          w="96px"
          h="64px"
          padding="0"
          borderRadius="5px"
          bg="darkBlue"
          sx={{ boxShadow: '0px -8px 0px 0px #10212A inset' }}
        />
      </Grid>
    </Center>
  );
};

export default GameBoard;
