import { useEffect, useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Text,
} from '@chakra-ui/react';

import X from '../assets/images/icon-x.svg';
import O from '../assets/images/icon-o.svg';
import useGameContext from '../assets/theme/context';


const EndGameModal = ({ playerTwo, setStartGame, restartGame, isOpen, onClose, roundWinner, playerTwoCPU }) => {
  const { resetScore } = useGameContext();
  const [header, setHeader] = useState('');
  const [body, setBody] = useState('');
  const [winningSymbol, setWinningSymbol] = useState('');
  const [timeOut, setTimeOut] = useState(false)
  useEffect(() => {
    if (playerTwoCPU === true && roundWinner !== 'tie') {
      roundWinner === playerTwo.symbol ? setHeader('OH NO, YOU LOST ...') : setHeader('YOU WON!');
    }

    if(!playerTwoCPU && roundWinner !== 'tie') {
      roundWinner === playerTwo.symbol ? setHeader('PLAYER 2 WINS:') : setHeader('PLAYER 1 WINS:');
    }


    if (roundWinner !== 'tie') {
      roundWinner === 'X' ? setWinningSymbol(X) : setWinningSymbol(O);
    }

    if (roundWinner === 'tie') {
      setHeader("");
      setWinningSymbol(null)
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
    <Modal isOpen={isOpen} onClose={onClose} isCentered closeOnOverlayClick={false} >
      <ModalOverlay />
      <ModalContent backgroundColor="darkBlue" display="flex" flexDirection="column" alignItems="center" py="40px" minW="100vw" w="100vw">
        <ModalHeader textStyle="p" color="blueGray" fontSize="14px">
         {roundWinner !== 'tie' &&  <Text fontSize='14px'>{header}</Text>}
        </ModalHeader>
        
       <ModalBody textStyle="h2" display="flex" justifyContent="center" alignItems="center" padding="0">
        {roundWinner !== 'tie' && <img src={winningSymbol} width="10%" display="inline" />}
          {roundWinner !== 'tie' ? <Text marginLeft="0.5em" fontWeight="bold" color={winningSymbol === X ? '#65E9E4' : '#F2B137'}>
            TAKES THE ROUND
          </Text> : <Text marginLeft="0.5em" fontWeight="bold" color="blueGray" >
            ROUND TIED</Text>}
        </ModalBody>
        <ModalFooter width="75%" display="flex" justifyContent="center">
          <Button variant="gray" py="8px" mr="8px" onClick={quit}>
            QUIT
          </Button>
          <Button variant="orange" py="8px" ml="8px" onClick={nextRound}>
            NEXT ROUND
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EndGameModal;
