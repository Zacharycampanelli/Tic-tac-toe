import { useEffect, useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import StartScreen from './pages/StartScreen';

function App() {
    const [playerOne, setPlayerOne] = useState('X')
    const [playerTwo, setPlayerTwo] = useState('X')
    const [vsCpu, setVsCpu] = useState(null)
    useEffect(() => {
      playerOne === 'X' ? setPlayerTwo('O') : setPlayerTwo('X')
    },[playerOne])

  return (
    <Box>
    {vsCpu === null && 
      <StartScreen playerOne={playerOne} setPlayerOne={setPlayerOne} setVsCpu={setVsCpu}/>
    }
   
    </Box>
  );
}

export default App;
