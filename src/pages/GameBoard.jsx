import { useEffect, useState } from 'react';
import { useDisclosure, Center, Grid, GridItem } from '@chakra-ui/react';


import useGameContext from '../assets/theme/context';
import Square from '../components/Square';
import Footer from '../components/Footer';
import EndGameModal from '../components/EndGameModal';
import ResetGameModal from '../components/ResetGameModal';
import Header from '../components/Header';

const GameBoard = ({ setStartGame }) => {
  const { isOpen: isEndGameOpen , onOpen: onEndGameOpen, onClose: onEndGameClose } = useDisclosure()
  const { isOpen: isResetGameOpen , onOpen: onResetGameOpen, onClose: onResetGameClose } = useDisclosure()

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
    setPlayerTurn('X' === playerOne.symbol ? playerOne.symbol  : playerTwo.symbol );
  };



  const CpuPlayerMove = () => {
    if (playerTurn === playerTwo.symbol && playerTwoCPU === true && remaining.length > 0) {
      if (remaining.length > 0 || !roundWinner) {
        let randomChoice;
        do {
          randomChoice = Math.floor(Math.random() * board.length);
          console.log(randomChoice);
        } while (board[randomChoice] !== null);

        console.log(randomChoice);
        if (!roundWinner) {
          setBoardPiece(playerTurn, randomChoice);
          removeRemaining(randomChoice);
        }
        console.log(remaining, randomChoice);
      }
    }
  };

  useEffect(() => {
    if (playerTwoCPU && playerTurn === playerTwo.symbol && !roundWinner) setTimeout(CpuPlayerMove, 3000);
  }, [playerTurn]);

  const removeRemaining = (numToRemove) => {
    let updatedArray = remaining.filter((num) => {
      return num !== numToRemove;
    });
    setRemaining(updatedArray);
  };

  const playerClick = (e) => {
   if(e.target.type === 'button' && board[e.target.value])
    if (
      (!roundWinner && playerOne.symbol === playerTurn) ||
      (playerTwo.symbol === playerTurn && playerTwoCPU === false)
    ) {
    
      setBoardPiece(playerTurn, e.target.value);
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
    if (winner === playerOne.symbol) setScore(winner);
    else if (winner === playerTwo.symbol) setScore(winner)
    else setScore('tie');
  };

  useEffect(() => {
    const winner = checkIfWin();
    if (winner) {
      setRoundWinner(winner);
      setRoundScore(winner);
      setPlayerTurn(null);
      onEndGameOpen();
    } else if (winner !== 'X' && winner !== 'O' && remaining.length === 0) {
      setRoundWinner('tie');
      setRoundScore('tie');
      setPlayerTurn(null);
      onEndGameOpen();
    }
    
    // ensures x is first
    if(remaining.length < 9 && !winner)
    setPlayerTurn(playerTurn === 'X' ? 'O' : 'X');
  }, [board]);

  return (
    <>
      <Center mt="24px" h="100vh" display="flex" justifyContent="center" alignItems={{ sm: 'start', md:'center' }} >
        <Grid placeItems="center" justifyContent="center" templateColumns="repeat(3, 1fr)" gap={{sm: 6, md: 5}} w={{ sm: '328px', md: '460px' }}>
        <Header onResetGameOpen={onResetGameOpen} playerTurn={playerTurn} />
          {board.map((square, index) => (
            <GridItem boxSize={{sm: "96px", md: "140px"}} padding="0" borderRadius="5px" bg="darkBlue" key={index} onClick={playerClick}>
              <Square value={index} onEndGameOpen={onEndGameOpen} />
            </GridItem>
          ))}
          <Footer />
        </Grid>
      </Center>
      <EndGameModal
        playerTwo={playerTwo}
        setStartGame={setStartGame}
        restartGame={restartGame}
        isOpen={isEndGameOpen}
        onClose={onEndGameClose}
        roundWinner={roundWinner}
        playerTwoCPU={playerTwoCPU}
      />
      <ResetGameModal
        setStartGame={setStartGame}
        restartGame={restartGame}
        isOpen={isResetGameOpen}
        onClose={onResetGameClose}
      />
    </>
  );
};

export default GameBoard;
