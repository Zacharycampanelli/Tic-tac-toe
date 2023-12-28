import {Button, Flex, Image } from '@chakra-ui/react';
import X from '../assets/images/icon-x.svg'
import O from '../assets/images/icon-O.svg'
import logo from '../assets/images/logo.svg';
import SelectPlayer from '../components/SelectPlayer';
const StartScreen = ({playerOne, setPlayerOne, setVsCpu}) => {
  return (
    <Flex h="100vh" flexDirection="column" justifyContent="center" alignItems="center">
      <Image src={logo} padding="2em" alt="X and O logo" />
      <SelectPlayer playerOne={playerOne} setPlayerOne={setPlayerOne} />
     <Button w='90vw' variant="orange" onClick={() => setVsCpu(true)}>NEW GAME (VS CPU)</Button>
     <Button w='90vw' variant="blue" onClick={() => setVsCpu(false)}>NEW GAME (VS PLAYER)</Button>
    </Flex>
  );
};

export default StartScreen;
