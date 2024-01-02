import { Center, Box, Button, Flex, Grid, GridItem, Image } from '@chakra-ui/react';
import logo from '../assets/images/logo.svg';
import X_gray from '../assets/images/icon-x-gray.svg';
import O_gray from '../assets/images/icon-o-gray.svg';
import X from '../assets/images/icon-x.svg';
import O from '../assets/images/icon-o.svg';
import Restart from '../assets/images/icon-restart.svg';
import useGameContext from '../assets/theme/context';
import Square from '../components/Square';
import SvgIconX from '../assets/images/SvgIconX';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';

const GameBoard = () => {
  const {
    board,
    playerOne,
    playerTwo,
    playerTurn,
    setPlayerTurn,
    playerTwoCPU,
    setBoardPiece,
    setPlayerSpaces,
    roundWinner,
    setRoundWinner,
    setScore,
    clearBoard
  } = useGameContext();

  const [playerToCheck, setPlayerToCheck] = useState('X');

  const rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  


  const playerClick = (e) => {
    if (!roundWinner) {
      setBoardPiece(playerTurn, e.target.value);
      setPlayerTurn(playerTurn === playerOne.symbol ? playerTwo.symbol : playerOne.symbol);
    }
  };

  const checkIfWin = () => {
    for (let i = 0; i < rows.length; i++) {
      const [x, y, z] = rows[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        return board[x];
      }
    }
  };

  const setRoundScore = (winner) => {
    console.log(winner === playerOne.symbol)
   if (winner === playerOne.symbol) setScore('p1') 
   else if (winner === playerTwo.symbol) setScore('p2') 
   else setScore('tie')
  }
 
  useEffect(() => {
    const winner = checkIfWin();
    if (winner) {
      setRoundWinner(winner);
      setRoundScore(winner)
    }
  }, [board]);

  useEffect(() => {
    let spacesRemaining = 9
    board.forEach(item =>{
      if ((item === 'X') || (item === 'O'))
        --spacesRemaining
    })
   if(spacesRemaining === 0){
     setRoundWinner('tie') 
    setRoundScore('tie')
   } 
  }, [board])

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
          <Button variant="gray" width="40px" height="40px" padding="0" margin="0" onClick={clearBoard}>
            <img src={Restart} alt="restart button" />
          </Button>
        </GridItem>

        {board.map((square, index) => (
          <GridItem w="96px" h="96px" padding="0" borderRadius="5px" bg="darkBlue" key={index} onClick={playerClick}>
            <Square value={index} />
          </GridItem>
        ))}

        <Footer />
      </Grid>
    </Center>
  );
};

export default GameBoard;
