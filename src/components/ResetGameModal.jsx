import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Text,
} from '@chakra-ui/react';

import useGameContext from '../assets/theme/context';


const ResetGameModal = ({  setStartGame, restartGame, isOpen, onClose }) => {
  const { resetScore } = useGameContext();

  const restart = () => {
    onClose();
    restartGame();
    resetScore();
  };

  

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered closeOnOverlayClick={false} maxW="100vw" w="100vw">
      <ModalOverlay />
      <ModalContent backgroundColor="darkBlue" display="flex" flexDirection="column" alignItems="center" py="40px">

       <ModalBody textStyle="h2" display="flex" justifyContent="center" alignItems="center" padding="0">
 <Text marginLeft="0.5em" fontWeight="bold" color="blueGray" >
            RESTART GAME?</Text>
        </ModalBody>
        <ModalFooter width="85%" display="flex" justifyContent="space-around">
          <Button variant="gray" py="8px" mx="8px" onClick={onClose}>
            NO, CANCEL
          </Button>
          <Button variant="orange" py="8px" mx="8px" onClick={restart}>
            YES, RESTART
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ResetGameModal;
