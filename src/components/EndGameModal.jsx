import { useEffect, useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import X from '../assets/images/icon-x.svg';
import O from '../assets/images/icon-o.svg';
import useGameContext from '../assets/theme/context';

const EndGameModal = ({ setStartGame, restartGame, isOpen, onClose, roundWinner, playerTwoCPU }) => {
  const { resetScore } = useGameContext();
  const [header, setHeader] = useState('');
  const [winningSymbol, setWinningSymbol] = useState('');

  useEffect(() => {
    if (playerTwoCPU === true) {
      roundWinner.name === 'CPU' ? setHeader('OH NO, YOU LOST ...') : setHeader('YOU WON!');
    }

    if (roundWinner.symbol !== '') {
      roundWinner.symbol === 'X' ? setWinningSymbol(X) : setWinningSymbol(O);
    }
  }, [roundWinner]);

  const quit = () => {
    onClose();
    restartGame();
    resetScore();
    setStartGame(false);
  };

  const nextRound = () => {
    onClose();
    restartGame();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered maxW="100vw" w="100vw">
      <ModalOverlay />
      <ModalContent backgroundColor="darkBlue" display="flex" flexDirection="column" alignItems="center" py="40px">
        <ModalHeader textStyle="p" color="blueGray" fontSize="14px">
          {header}
        </ModalHeader>
        <ModalBody textStyle="h2" display="flex" justifyContent="center" alignItems="center" padding="0">
          <img src={winningSymbol} width="10%" display="inline" />{' '}
          <Text marginLeft="0.5em" fontWeight="bold" color={winningSymbol === X ? '#65E9E4' : '#F2B137'}>
            TAKES THE ROUND
          </Text>
        </ModalBody>
        <ModalFooter width="75%" display="flex" justifyContent="space-around">
          <Button variant="gray" py="8px" onClick={quit}>
            QUIT
          </Button>
          <Button variant="orange" py="8px" onClick={nextRound}>
            NEXT ROUND
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EndGameModal;
