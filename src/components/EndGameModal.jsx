import { useEffect, useState } from 'react'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
  } from '@chakra-ui/react'  

import X from '../assets/images/icon-x.svg';
import O from '../assets/images/icon-o.svg';
import useGameContext from '../assets/theme/context';

const EndGameModal = ({setStartGame, restartGame, isOpen, onClose, roundWinner, playerTwoCPU }) => {

    const { resetScore } = useGameContext()
    const [header, setHeader] = useState('')
    const [winningSymbol, setWinningSymbol] = useState('')

    useEffect(() => {

        if(playerTwoCPU === true) {
            roundWinner.name === 'CPU' ? setHeader('OH NO, YOU LOST ...') : setHeader('YOU WON!')
        }
        
        if(roundWinner.symbol !== '') {
            
            roundWinner.symbol === 'X' ? setWinningSymbol(X) : setWinningSymbol(O)
        }
       
    }, [roundWinner])

    const quit = () => {
        onClose();
        restartGame();
        resetScore();
        setStartGame(false)
    }
   
    const nextRound = () => {
        onClose();
        restartGame();
    }

  return (
    <Modal isOpen={isOpen} onClose={onClose} >
        <ModalContent>
        <ModalHeader textStyle="p">{header}</ModalHeader>
        <ModalBody textStyke="h2"><img src={winningSymbol} /> TAKES THE ROUND</ModalBody>
        <ModalFooter>
            <Button variant="gray" onClick={quit}>QUIT</Button>
            <Button variant="orange" onClick={nextRound} >NEXT ROUND</Button>

        </ModalFooter></ModalContent>
    </Modal>
  )
}

export default EndGameModal
