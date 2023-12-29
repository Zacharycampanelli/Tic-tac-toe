import { useEffect, useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import StartScreen from './pages/StartScreen';
import GameBoard from './pages/GameBoard';
import useGameContext from './assets/theme/context';

function App() {
    // const [playerOne, setPlayerOne] = useState('X')
    // const [playerTwo, setPlayerTwo] = useState('X')
    // const [vsCpu, setVsCpu] = useState(null)
    
    const {playerOne, playerTwo, setPlayers, PlayerTwoCPU, playerTurn} = useGameContext();
    // useEffect(() => {
    // //   playerOne === 'X' ? setPlayerTwo('O') : setPlayerTwo('X')
    // setPlayers()
    // },[playerOne])
    console.log(PlayerTwoCPU === undefined)
    console.log(PlayerTwoCPU )
    return (
        <Box>
    {!playerTurn && 
      <StartScreen />
  }
    {playerTurn && <GameBoard />}
   
    </Box>
  );
}

export default App;
