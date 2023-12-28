import { Button, Flex, Image } from '@chakra-ui/react';

import logo from '../assets/images/logo.svg';
import SelectPlayer from '../components/SelectPlayer';
const StartScreen = ({ playerOne, setPlayerOne, setVsCpu }) => {
  return (
    <Flex h="100vh" flexDirection="column" justifyContent="center" alignItems="center">
      <Image src={logo} padding="2em" alt="X and O logo" />
      <SelectPlayer playerOne={playerOne} setPlayerOne={setPlayerOne} />
      <Button w={{sm: "90%", md: "60%"}} h={{sm: '3em',md: "3.5em"}} paddingBottom=".3em" variant="orange" onClick={() => setVsCpu(true)}>
        NEW GAME (VS CPU)
      </Button>
      <Button w={{sm: "90%", md: "60%"}} h={{sm: '3em',md: "3.5em"}} paddingBottom=".3em" variant="blue" onClick={() => setVsCpu(false)}>
        NEW GAME (VS PLAYER)
      </Button>
    </Flex>
  );
};

export default StartScreen;
