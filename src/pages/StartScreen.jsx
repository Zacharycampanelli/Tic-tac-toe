import { Button, Flex, Image } from '@chakra-ui/react';

import logo from '../assets/images/logo.svg';
import SelectPlayer from '../components/SelectPlayer';
import useGameContext from '../assets/theme/context';
import { useState } from 'react';
const StartScreen = ({ setStartGame }) => {
  const { playerOne, playerTwo, setPlayers, setPlayerTwoCPU, setPlayerTurn } = useGameContext();

  const setPlayersState = (type) => {
    setPlayerTwoCPU(type);


    setStartGame(true);
  };

  return (
    <Flex h="100vh" flexDirection="column" justifyContent="center" alignItems="center">
      <Image src={logo} padding="2em" alt="X and O logo" />
      <SelectPlayer />
      <Button
        w={{ sm: '327px', md: '460px' }}
        h={{ sm: '3em', md: '3.5em' }}
        paddingBottom=".3em"
        variant="orange"
        onClick={() => setPlayersState(true)}
      >
        NEW GAME (VS CPU)
      </Button>
      <Button
        w={{ sm: '327px', md: '460px' }}
        h={{ sm: '3em', md: '3.5em' }}
        paddingBottom=".3em"
        variant="blue"
        onClick={() => setPlayersState(false)}
      >
        NEW GAME (VS PLAYER)
      </Button>
    </Flex>
  );
};

export default StartScreen;
