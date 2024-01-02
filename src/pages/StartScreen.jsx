import { Button, Flex, Image } from '@chakra-ui/react';

import logo from '../assets/images/logo.svg';
import SelectPlayer from '../components/SelectPlayer';
import useGameContext from '../assets/theme/context';
const StartScreen = ({setStartGame}) => {
const {playerOne, playerTwo, setPlayerTwoCPU, setPlayerTurn} = useGameContext()

const setPlayers = (choice) => {
  setStartGame(true)
  setPlayerTwoCPU(choice)
  
  if(playerOne.symbol === 'X' )
 setPlayerTurn(playerOne.symbol)
else 
setPlayerTurn(playerTwo.symbol)

}

  return (
    <Flex h="100vh" flexDirection="column" justifyContent="center" alignItems="center">
      <Image src={logo} padding="2em" alt="X and O logo" />
      <SelectPlayer />
      <Button w={{sm: "327px", md: "460px"}} h={{sm: '3em',md: "3.5em"}} paddingBottom=".3em" variant="orange" onClick={() => setPlayers(true)}>
        NEW GAME (VS CPU)
      </Button>
      <Button w={{sm: "327px", md: "460px"}} h={{sm: '3em',md: "3.5em"}} paddingBottom=".3em" variant="blue" onClick={() => setPlayers(false)}>
        NEW GAME (VS PLAYER)
      </Button>
    </Flex>
  );
};

export default StartScreen;
