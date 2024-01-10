import {useDisclosure, Center, Box, Button, Flex, Grid, GridItem, Image } from '@chakra-ui/react';
import logo from '../assets/images/logo.svg';
import X_gray from '../assets/images/icon-x-gray.svg';
import O_gray from '../assets/images/icon-o-gray.svg';

import Restart from '../assets/images/icon-restart.svg';
import useGameContext from '../assets/theme/context';
import Square from '../components/Square';
import SvgIconX from '../assets/images/SvgIconX';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import EndGameModal from '../components/EndGameModal';

const GameBoard = ({setStartGame}) => {
  const { isOpen, onOpen, onClose} = useDisclosure()


  const {
    board,
    playerOne,
    playerTwo,
    playerTurn,
    setPlayerTurn,
    playerTwoCPU,
    setBoardPiece,
    roundWinner,
    setRoundWinner,
    setScore,
    clearBoard,
  } = useGameContext();

  const [remaining, setRemaining] = useState([...Array(9).keys()]);
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


  const restartGame = () => {
    clearBoard();
    setRemaining([...Array(9).keys()]);
    setPlayerTurn('X' === playerOne.symbol ? { ...playerOne } : { ...playerTwo });
  };

  

  
  const CpuPlayerMove = () => {
    if (playerTurn === playerTwo && playerTwoCPU === 'CPU') {
      if (remaining.length > 0 || !roundWinner.symbol ) {
        let randomChoice;
        console.log('symbol' + playerTurn.symbol)
    do {
      randomChoice = Math.floor(Math.random() * board.length);
      console.log(randomChoice);
    } while (board[randomChoice] !== null);

    console.log(randomChoice);
    if(!roundWinner.symbol) {

      setBoardPiece(playerTurn, randomChoice);
      removeRemaining(randomChoice);
      // setPlayerTurn(playerTurn.symbol === playerTwo.symbol ? {...playerOne} : {...playerTwo});
    }
    console.log(remaining, randomChoice);
  }
  }
  };
  
useEffect(() => {
  if(playerTwoCPU && playerTurn === playerTwo.symbol )
  setTimeout(CpuPlayerMove, 3000)
}, [playerTurn])

  const removeRemaining = (numToRemove) => {
    let updatedArray = remaining.filter((num) => {
      return num !== numToRemove;
    });
    setRemaining(updatedArray);
  };

  const playerClick = (e) => {
    if (!roundWinner && (playerOne.symbol === playerTurn) || (playerTwo.symbol === playerTurn && playerTwoCPU === false)) {
      setBoardPiece(playerTurn, e.target.value);
      removeRemaining(Number(e.target.value));
      setPlayerTurn(playerTurn === 'X' ? 'O' : 'X')
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
    console.log(winner === playerOne.symbol);
    if (winner === playerOne.symbol) setScore('p1');
    else if (winner === playerTwo.symbol) setScore('p2');
    else setScore('tie');
  };

  useEffect(() => {
    const winner = checkIfWin();
    if (winner) {
      console.log(winner)
      // let name = (winner === playerOne.symbol) ? playerOne : playerTwo
      setRoundWinner(winner)
      setRoundScore(winner);
      setPlayerTurn(null);
      onOpen()
    } else if (!winner && remaining === 0) {
      setRoundWinner('tie', '');
      setRoundScore('tie');
      setPlayerTurn(null);
      onOpen()
    }

    // ensures x is first
    // if(remaining.length < 9)
    // setPlayerTurn(playerTurn === playerOne.symbol ? {...playerTwo} : {...playerOne})

  }, [board]);


  return (
  <>
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
 
            <img src={playerTurn === 'X' ? X_gray : O_gray} width="16px" height="16px" />
      
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
          <Button variant="gray" width="40px" height="40px" padding="0" margin="0" onClick={restartGame}>
            <img src={Restart} alt="restart button" onClick={restartGame} />
          </Button>
        </GridItem>

        {board.map((square, index) => (
          <GridItem w="96px" h="96px" padding="0" borderRadius="5px" bg="darkBlue" key={index} onClick={playerClick}>
            <Square value={index}  onOpen={onOpen}/>
          </GridItem>
        ))}

        <Footer />
      </Grid>
    </Center>
      <EndGameModal playerTwo={playerTwo} setStartGame={setStartGame} restartGame={restartGame} isOpen={isOpen} onClose={onClose} roundWinner={roundWinner} playerTwoCPU={playerTwoCPU} />
      </>
  );
};

export default GameBoard;
