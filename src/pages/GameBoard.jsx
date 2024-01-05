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

  const togglePlayerTurn = () => {
    let playerX = { name: '', symbol: 'X' };
    let playerO = { name: '', symbol: 'O' };
    playerOne.symbol === 'X'
      ? ((playerX.name = playerOne.name), (playerO.name = playerTwo.name))
      : ((playerX.name = playerTwo.name), (playerO.name = playerOne.name));

    if (playerTurn.symbol === 'X') {
      setPlayerTurn(playerO);
    } else {
      setPlayerTurn(playerX);
      
    }
    
    // setTimeout(handleTurn, 3000);
  };

  const handleTurn = () => {
    setTimeout(CpuPlayerMove, 2000);
  };
  
  const CpuPlayerMove = () => {
    if (playerTurn.name === 'CPU') {
      if (remaining.length > 0 || roundWinner === false) {
        let randomChoice;
        console.log('symbol' + playerTurn.symbol)
    do {
      randomChoice = Math.floor(Math.random() * board.length);
      console.log(randomChoice);
    } while (board[randomChoice] !== null);

    console.log(randomChoice);
    if(!roundWinner) {

      setBoardPiece(playerTurn.symbol, randomChoice);
      removeRemaining(randomChoice);
      // setPlayerTurn(playerTurn.symbol === playerTwo.symbol ? {...playerOne} : {...playerTwo});
    }
    console.log(remaining, randomChoice);
  }
  }
  };
  
useEffect(() => {
  if(playerTwoCPU && playerTurn.name === 'CPU' )
  setTimeout(CpuPlayerMove, 3000)
}, [playerTurn])

  const removeRemaining = (numToRemove) => {
    let updatedArray = remaining.filter((num) => {
      return num !== numToRemove;
    });
    setRemaining(updatedArray);
  };

  const playerClick = (e) => {
    if (!roundWinner && playerTurn.name !== 'CPU') {
      setBoardPiece(playerTurn.symbol, e.target.value);
      removeRemaining(Number(e.target.value));
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
      setRoundWinner(winner);
      setRoundScore(winner);
      setPlayerTurn(null);
    } else if (!winner && remaining === 0) {
      setRoundWinner('tie');
      setRoundScore('tie');
      setPlayerTurn(null);
    }

    // ensures x is first
    if(remaining.length < 9)
    setPlayerTurn(playerTurn.symbol === playerOne.symbol ? {...playerTwo} : {...playerOne})

  }, [board]);


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
 
            <img src={playerTurn.symbol === 'X' ? X_gray : O_gray} width="16px" height="16px" />
      
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
            <img src={Restart} alt="restart button" onClick={'setReset(true)'} />
          </Button>
        </GridItem>

        {board.map((square, index) => (
          <GridItem w="96px" h="96px" padding="0" borderRadius="5px" bg="darkBlue" key={index} onClick={playerClick}>
            <Square value={index}  />
          </GridItem>
        ))}

        <Footer />
      </Grid>
    </Center>
  );
};

export default GameBoard;
