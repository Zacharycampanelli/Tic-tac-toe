import { Box,  CardBody,  Flex } from '@chakra-ui/react';
import X from '../assets/images/icon-x.svg'
import O from '../assets/images/icon-O.svg'

const TogglePlayer = ({playerOne, setPlayerOne}) => {
  return (
    <CardBody display="flex" justifyContent="center" padding="0">
    <Flex h="4rem" justifyContent="space-between" backgroundColor="navy" w="85%">
      <Box onClick={() => setPlayerOne('X')} className={playerOne === "X" ? "xpick" : "opick"}><img  src={X}  /></Box>
      <Box onClick={() => setPlayerOne('O')} className={playerOne === "X" ? "opick" : "xpick"}><img  src={O} /></Box>
    </Flex>
  </CardBody>
  )
}

export default TogglePlayer
